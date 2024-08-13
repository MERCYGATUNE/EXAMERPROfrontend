import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Radio, FormControlLabel } from '@mui/material';
import axios from 'axios';
import './ExamAdder.css';

const ExamAdder = () => {
    const { control, handleSubmit, watch } = useForm();
    const [questions, setQuestions] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
    const username = user.username

    const questionMode = watch('questionMode', '');

    const onSubmit = async (data) => {
            const userId = localStorage.getItem('userId');
            const user = JSON.parse(localStorage.getItem('user'));
            const username = user.username
            console.log(userId)
        try {
            const formattedQuestions = questions.map((q) => ({
                question_text: q.question,
                isChoice: q.mode === 'multiple-choice',
                choice1: q.answers[0]?.answer || '',
                choice2: q.answers[1]?.answer || '',
                choice3: q.answers[2]?.answer || '',
                choice4: q.answers[3]?.answer || '',
                answer: q.mode === 'multiple-choice' ? q.answers[q.correctAnswer]?.answer || '' : q.correctAnswer
            }));

            const examData = {
                exam_name: data.examName,
                category: data.category,
                subcategory: data.subcategory,
                questions: formattedQuestions,
                createdBy: username, // Replace with dynamic data if needed
                createdOn: new Date().toISOString(),
                exam_duration: data.examDuration, // Set the exam duration or make it dynamic
                examiner_id: userId,
            };

            // Submit exam details along with questions
            await axios.post('http://127.0.0.1:5555/add_exams', examData);
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
                    <Controller
                        name="category"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <TextField {...field} label="Category" fullWidth required />}
                    />
                </div>
                <div className="form-field">
                    <Controller
                        name="subcategory"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <TextField {...field} label="Subcategory" fullWidth required />}
                    />
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
                                    label="Correct"
                                />
                                <Button
                                    className="remove-button"
                                    onClick={() => handleRemoveAnswer(index, ansIndex)}
                                >
                                    Remove Choice
                                </Button>
                            </div>
                        ))}
                        {question.mode === 'multiple-choice' && (
                            <Button
                                className="add-button"
                                onClick={() => handleAddAnswer(index)}
                            >
                                Add Choice
                            </Button>
                        )}
                    </div>
                ))}
                <Button
                    className="add-button"
                    onClick={handleAddQuestion}
                >
                    Add Question
                </Button>
                <Button
                    type="submit"
                    className="submit-button margin-top-20"
                >
                    Submit Exam
                </Button>
            </form>
        </div>
    );
};

export default ExamAdder;
