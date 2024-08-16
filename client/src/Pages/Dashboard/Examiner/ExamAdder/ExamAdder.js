import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Radio, FormControlLabel } from '@mui/material';
import axios from 'axios';
import './ExamAdder.css';

const ExamAdder = () => {
    const { control, handleSubmit, watch } = useForm();
    const [questions, setQuestions] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);

    const questionMode = watch('questionMode', '');

    const user = JSON.parse(localStorage.getItem('user'));
    const username = user?.username;

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://http://0.0.0.0:10000/all_categories', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const jsonData = await response.json();
                setAllCategories(jsonData);
            } else {
                console.error('Failed to fetch data:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const onSubmit = async (data) => {
        const userId = localStorage.getItem('userId');
        try {
            const formattedQuestions = questions.map((q) => ({
                question_text: q.question,
                isChoice: q.mode === 'multiple-choice',
                topic: q.topic,
                choice1: q.answers[0]?.answer || '',
                choice2: q.answers[1]?.answer || '',
                choice3: q.answers[2]?.answer || '',
                choice4: q.answers[3]?.answer || '',
                answer: q.mode === 'multiple-choice' ? q.answers[q.correctAnswer]?.answer || '' : q.correctAnswer
            }));

            const examData = {
                exam_name: data.examName,
                category: selectedCategory.name,
                subcategory: selectedSubcategory?.name || '',
                questions: formattedQuestions,
                createdBy: username,
                createdOn: new Date().toISOString(),
                exam_duration: data.examDuration,
                examiner_id: userId,
            };
            console.log(examData)
            await axios.post('http://http://0.0.0.0:10000/add_exams', examData);
            alert('Exam added successfully!');
        } catch (error) {
            console.error(error);
            alert('Failed to add exam.');
        }
    };

    const handleAddQuestion = () => {
        if (questionMode) {
            setQuestions([...questions, { question: '', mode: questionMode, answers: [], correctAnswer: '' }]);
        } else {
            alert('Please select a question mode before adding a question.');
        }
    };

    const handleQuestionChange = (index, event) => {
        const updatedQuestions = questions.map((q, i) =>
            i === index ? { ...q, question: event.target.value } : q
        );
        setQuestions(updatedQuestions);
    };

    const handleAnswerChange = (questionIndex, answerIndex, event) => {
        const updatedQuestions = questions.map((q, i) =>
            i === questionIndex
                ? {
                    ...q,
                    answers: q.answers.map((a, j) =>
                        j === answerIndex ? { ...a, answer: event.target.value } : a
                    ),
                }
                : q
        );
        setQuestions(updatedQuestions);
    };

    const handleAddAnswer = (index) => {
        const updatedQuestions = questions.map((q, i) =>
            i === index ? { ...q, answers: [...q.answers, { answer: '' }] } : q
        );
        setQuestions(updatedQuestions);
    };

    const handleRemoveAnswer = (questionIndex, answerIndex) => {
        const updatedQuestions = questions.map((q, i) =>
            i === questionIndex
                ? { ...q, answers: q.answers.filter((_, j) => j !== answerIndex) }
                : q
        );
        setQuestions(updatedQuestions);
    };

    const handleCorrectAnswerChange = (questionIndex, event) => {
        const updatedQuestions = questions.map((q, i) =>
            i === questionIndex
                ? { ...q, correctAnswer: event.target.value }
                : q
        );
        setQuestions(updatedQuestions);
    };

    const handleTopicChange = (questionIndex, event) => {
        const updatedQuestions = questions.map((q, i) =>
            i === questionIndex ? { ...q, topic: event.target.value } : q
        );
        setQuestions(updatedQuestions);
    };

    const handleCategoryChange = (event) => {
        const selected = allCategories.find((cat) => cat.name === event.target.value);
        setSelectedCategory(selected);
        setSelectedSubcategory(null); // Reset subcategory when the category changes
    };

    const handleSubcategoryChange = (event) => {
        const selected = selectedCategory.subcategories.find((subcat) => subcat.name === event.target.value);
        setSelectedSubcategory(selected);
    };

    const handleBackToDashboard = () => {
        window.location.href = '/examiner-dashboard';
    }

    return (
        <div className="exam-adder-container">
            <h1>Add Exam</h1>
            <h2>Current User: {username}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-field">
                    <Controller
                        name="examName"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <TextField {...field} label="Exam Name" fullWidth required />}
                    />
                </div>
                <div className="form-field">
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select value={selectedCategory?.name || ''} onChange={handleCategoryChange} label="Category">
                            {allCategories.map((category) => (
                                <MenuItem key={category.id} value={category.name}>
                                    {category.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className="form-field">
                    <FormControl fullWidth>
                        <InputLabel>Subcategory</InputLabel>
                        <Select
                            value={selectedSubcategory?.name || ''}
                            onChange={handleSubcategoryChange}
                            label="Subcategory"
                            disabled={!selectedCategory}
                        >
                            {selectedCategory?.subcategories.map((subcategory) => (
                                <MenuItem key={subcategory.id} value={subcategory.name}>
                                    {subcategory.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className="form-field">
                    <Controller
                        name="examDuration"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <TextField {...field} label="Exam Duration (minutes)" fullWidth required />}
                    />
                </div>
                <div className="form-field">
                    <FormControl fullWidth>
                        <InputLabel>Question Mode</InputLabel>
                        <Controller
                            name="questionMode"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Select {...field} label="Question Mode">
                                    <MenuItem value="open-ended">Open-ended</MenuItem>
                                    <MenuItem value="multiple-choice">Multiple-choice</MenuItem>
                                </Select>
                            )}
                        />
                    </FormControl>
                </div>
                {questions.map((question, index) => (
                    <div key={index} className="question-block">
                        <TextField
                            name={`question-${index}`}
                            value={question.question}
                            onChange={(e) => handleQuestionChange(index, e)}
                            label={`Question ${index + 1}`}
                            fullWidth
                            required
                        />

                        {question.mode === 'open-ended' && (
                            <div className="correct-answer-block">
                                <TextField
                                    name={`correct-answer-${index}`}
                                    value={question.correctAnswer}
                                    onChange={(e) => handleCorrectAnswerChange(index, e)}
                                    label="Correct Answer"
                                    fullWidth
                                    required
                                />
                            </div>
                        )}

                        {selectedSubcategory && (
                            <FormControl fullWidth>
                            <InputLabel>Topic</InputLabel>
                            <Select
                                value={question.topic || ''}
                                onChange={(e) => handleTopicChange(index, e)}
                                label="Topic"
                            >
                                {selectedSubcategory.topics?.map((topic) => (
                                    <MenuItem key={topic.id} value={topic.name}>
                                        {topic.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        )}

                        {question.mode === 'multiple-choice' && question.answers.map((answer, ansIndex) => (
                            <div key={ansIndex} className="answer-block">
                                <TextField
                                    name={`answer-${index}-${ansIndex}`}
                                    value={answer.answer}
                                    onChange={(e) => handleAnswerChange(index, ansIndex, e)}
                                    label={`Choice ${ansIndex + 1}`}
                                    fullWidth
                                    required
                                />
                                <FormControlLabel
                                    control={
                                        <Radio
                                            checked={question.correctAnswer === ansIndex}
                                            onChange={() => handleCorrectAnswerChange(index, { target: { value: ansIndex } })}
                                            value={ansIndex}
                                        />
                                    }
                                    label="Correct Answer"
                                />
                                {ansIndex > 1 && (
                                    <Button onClick={() => handleRemoveAnswer(index, ansIndex)} variant="outlined" color="secondary">
                                        Remove Choice
                                    </Button>
                                )}
                            </div>
                        ))}

                        {question.mode === 'multiple-choice' && (
                            <Button onClick={() => handleAddAnswer(index)} variant="outlined" color="primary">
                                Add Answer
                            </Button>
                        )}
                    </div>
                ))}
                <Button onClick={handleAddQuestion} variant="contained" color="primary">
                    Add Question
                </Button>
                <Button type="submit" variant="contained" color="secondary">
                    Submit Exam
                </Button>
                <Button onClick={handleBackToDashboard} variant="contained" color="inherit">
                    Back to Dashboard
                </Button>
            </form>
        </div>
    );
};

export default ExamAdder;