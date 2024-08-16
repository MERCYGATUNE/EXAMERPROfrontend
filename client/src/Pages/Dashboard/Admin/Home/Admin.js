import { useCallback, useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UserTable from "../components/UserTable";
import TrashIcon from '../../../../assets/group-1011.svg';
import EditIcon from '../../../../assets/group-1021.svg';
import "./Admin.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const onEXAMSTextClick = useCallback(() => {
    navigate("/admin-dashboard-exams");
  }, [navigate]);

  const onCATEGORIESTextClick = useCallback(() => {
    navigate("/admin-dashboard-categories");
  }, [navigate]);

  const [data, setData] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [newPassword, setNewPassword] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch('http://0.0.0.0:5555/all_users', {
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

  const handleDelete = async (user_id) => {
    try {
      const response = await fetch('http://0.0.0.0:5555/delete_account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id }),
      });
      const data = await response.json();
      console.log(data.error);
      fetchData();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEditClick = (user) => {
    setEditingUser(user); // Set the user to be edited
  };

  const handleSave = async () => {
    const updatedData = { ...editingUser };
    if (newPassword) {
      updatedData.password = newPassword; // Include new password if provided
    }
    try {
      const response = await fetch('http://0.0.0.0:5555/update_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      const data = await response.json();
      console.log(data.message);
      setEditingUser(null);
      setNewPassword(""); // Exit edit mode
      fetchData(); // Refresh the data after saving
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleCancel = () => {
    setEditingUser(null);
    setNewPassword(""); // Exit edit mode without saving
  };

  return (
    <div className="admin-dashboard">
      <div className="exam-pro-container23">
        <div className="examerpro-group">
          <h1 className="examerpro23">ExamerPro™</h1>
          <div className="admin-container">
            <h1 className="admin1">ADMIN</h1>
          </div>
        </div>
      </div>
      <div className="admin-dashboard-inner">
        <div className="frame-parent8">
          <Button
            className="frame-item"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              letterSpacing: '5px',
              fontWeight: 'bold',
              color: "#fff",
              fontSize: "16",
              background: "#8e31eb",
              borderRadius: "30px",
              "&:hover": { background: "#8e31eb" },
              width: 184,
              height: 33,
            }}
          >
            USERS
          </Button>
          <div className="headers">
            <b className="exams2" onClick={onEXAMSTextClick}>
              EXAMS
            </b>
          </div>
          <div className="headers1">
            <b className="categories" onClick={onCATEGORIESTextClick}>
              CATEGORIES
            </b>
          </div>
        </div>
      </div>
      <UserTable />
      {editingUser ? (
        <div className="login-sections101">
          <div className='login-form-container1'>
            <div className='form2'>
              <div className='form-text1'>
                <h3 className='sign-in'>Edit User</h3>
              </div>
              <div className='credentials-form-container'>
                <div className='form3'>
                  <form className='form4'>
                    <label>
                      Username:
                      <input
                        className='password101'
                        type="text"
                        value={editingUser.username}
                        onChange={(e) => setEditingUser({ ...editingUser, username: e.target.value })}
                      />
                    </label>
                    <label>
                      Email:
                      <input
                        className='password101'
                        type="email"
                        value={editingUser.email}
                        onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                      />
                    </label>
                    <label>
                      Role:
                      <input
                        className='password101'
                        type="text"
                        value={editingUser.role}
                        onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
                      />
                    </label>
                    <label>
                      New Password:
                      <input
                        className="password101"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
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
        data ? (data.map((user) => (
          <div className={`lenny-row-parent`} key={user.id}>
            <div className="lenny-row">
              <b className="lenny">{user.username}</b>
            </div>
            <div className="lenny-info-row">
              <div className="lenny-details">
                <b className="lennywachira01gmailcom">{user.email}</b>
                <b className="student">{user.role}</b>
              </div>
            </div>
            <div className="empty-user-row">
              <b className="empty-user-cell">{user.created_at}</b>
            </div>
            <div className="frame-parent20">
              <div className="frame-wrapper3">
                <img
                  className="frame-child3"
                  loading="lazy"
                  onClick={() => handleDelete(user.id)}
                  alt=""
                  src={TrashIcon}
                />
              </div>
              <img
                className="frame-child4"
                loading="lazy"
                onClick={() => handleEditClick(user)}
                alt=""
                src={EditIcon}
              />
            </div>
          </div>
        ))) : <p className='loading'>Loading...</p>
      )}
      <img
        className="arrow-down-2-iconly-pro"
        alt=""
        src="/arrow--down-2--iconly-pro.svg"
      />
    </div>
  );
};

export default AdminDashboard;
