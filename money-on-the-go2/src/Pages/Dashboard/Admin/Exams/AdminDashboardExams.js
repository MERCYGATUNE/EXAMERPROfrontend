import { useCallback, useEffect, useState} from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExamDetails from "../components/ExamDetails";
import GroupComponent3 from "../components/GroupComponent3";
import TrashIcon from '../../../../assets/group-1011.svg'
import EditIcon from '../../../../assets/group-1021.svg'
import "./AdminDashboardExams.css";

const AdminDashboardExams = () => {
  const navigate = useNavigate();

  const onUSERSTextClick = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  const onCATEGORIESTextClick = useCallback(() => {
    navigate("/admin-dashboard-categories");
  }, [navigate]);

  const [data, setData] = useState(null);
  const [editingExam, setEditingExam] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5555/get_exams', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        console.error('Failed to fetch data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEditClick = (exam) => {
    setEditingExam(exam); // Set the user to be edited
  };
  const handleSave = async () => {
    const updatedData = { ...editingExam };
    try {
      const response = await fetch('http://127.0.0.1:5555/update_exam', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      const data = await response.json();
      console.log(data.message);
      setEditingExam(null);
      fetchData(); // Refresh the data after saving
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleDelete = async (exam_id) => {
    try {
      const response = await fetch('http://127.0.0.1:5555/delete_exam', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ exam_id }),
      });
      const data = await response.json();
      console.log(data.message);
      fetchData();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleCancel = () => {
    setEditingExam(null);
  };

  return (
    <div className="admin-dashboard-exams">
       <div className="exam-pro-container23">
        <div className="examerpro-group">
          <h1 className="examerpro23">ExamerPro™</h1>
          <div className="admin-container">
            <h1 className="admin1">ADMIN</h1>
          </div>
        </div>
      </div>
      <div className="navigation">
        <div className="menu-container">
          <div className="menu-items">
            <b className="users1" onClick={onUSERSTextClick}>
              USERS
            </b>
          </div>
          <Button
            className="exams41"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#8e31eb",
              borderRadius: "30px",
              "&:hover": { background: "#8e31eb" },
              width: 184,
              height: 33,
            }}
          >
            EXAMS
          </Button>
          <div className="categories-label">
            <b className="categories1" onClick={onCATEGORIESTextClick}>
              CATEGORIES
            </b>
          </div>
        </div>
      </div>
      <ExamDetails />
      {editingExam ? (
        <div className="login-sections101">
          <div className='login-form-container1'>
            <div className='form2'>
              <div className='form-text1'>
                <h3 className='sign-in'>Edit Exam</h3>
              </div>
              <div className='credentials-form-container'>
                <div className='form3'>
                  <form className='form4'>
                    <label>
                      Exam Name:
                      <input
                        className='password101'
                        type="text"
                        value={editingExam.exam_name}
                        onChange={(e) => setEditingExam({ ...editingExam, exam_name: e.target.value })}
                      />
                    </label>
                    <label>
                      Category:
                      <input
                        className='password101'
                        type="email"
                        value={editingExam.category}
                        onChange={(e) => setEditingExam({ ...editingExam, category: e.target.value })}
                      />
                    </label>
                    <label>
                      Subcategory:
                      <input
                        className='password101'
                        type="text"
                        value={editingExam.subcategory}
                        onChange={(e) => setEditingExam({ ...editingExam, subcategory: e.target.value })}
                      />
                    </label>
                    <label>
                      Exam Duration:
                      <input
                        className='password101'
                        type="text"
                        value={editingExam.exam_duration}
                        onChange={(e) => setEditingExam({ ...editingExam, exam_duration: e.target.value })}
                      />
                    </label>
                  </form>
                </div>
              </div>

              <button  className='search-flights-button1' onClick={handleSave}>Save</button>
              <button  className='search-flights-button1' onClick={handleCancel}>Back</button>
            </div>
          </div>
        </div>
      ) : (
        data ? (data.map((exam) => (
          <div className={`selection-container-parent`}>
      <div className="selection-container">
        <div className="selected-items">
          <div className="selection-details">
            <b className="july-high-school">{exam.exam_name}</b>
          </div>
          <div className="form-selection">
            <b className="form-116">{exam.category}</b>
          </div>
          <b className="biology7">{exam.subcategory}</b>
        </div>
      </div>
      <div className="topic-selection">
        <div className="topic-details">
          <b className="julius-ceasar">{exam.createdBy}</b>
          <div className="placeholder-container">
            <b className="empty-selection">{exam.createdOn}</b>
          </div>
        </div>
      </div>
      <div className="frame-parent21">
        <div className="frame-wrapper4">
          <img
            className="frame-child5"
            loading="lazy"
            alt=""
            src={TrashIcon}
            onClick={() => handleDelete(exam.id)}
          />
        </div>
        <img
          className="frame-child6"
          loading="lazy"
          alt=""
          src={EditIcon}
          onClick={()=> handleEditClick(exam)}
        />
      </div>
    </div>
        ))) : <p className='loading'>Loading...</p>
      )}
    </div>
  );
};

export default AdminDashboardExams;
