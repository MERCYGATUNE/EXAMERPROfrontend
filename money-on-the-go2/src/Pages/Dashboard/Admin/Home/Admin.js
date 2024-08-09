import { useCallback, useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UserTable from "../components/UserTable";
import GroupComponent2 from "../components/GroupComponent2";
import TrashIcon from '../../../../assets/group-1011.svg'
import EditIcon from '../../../../assets/group-1021.svg'
import "./Admin.css";
import '../components/GroupComponent2.css'

const AdminDashboard = () => {
  const navigate = useNavigate();

  const onEXAMSTextClick = useCallback(() => {
    navigate("/admin-dashboard-exams");
  }, [navigate]);

  const onCATEGORIESTextClick = useCallback(() => {
    navigate("/admin-dashboard-categories");
  }, [navigate]);

  const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5555/all_users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
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

    const handleDelete = async (user_id) =>{
      try {
        const response = await fetch('http://127.0.0.1:5555/delete_account', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({user_id}),
        });
        console.log(response)
        const data = await response.json();
        console.log(data.message);
        fetchData();
      } catch (error) {
        console.log(user_id);
        console.error('Error deleting user:', error);
      }
    }

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
      {data ? (data.map((user)=>(
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
            alt=""
            src={EditIcon}
          />
        </div>
      </div>
      ))): <p className='loading'>Loading...</p>}
      {/* <GroupComponent2 />
      <GroupComponent2 /> */}
      <img
        className="arrow-down-2-iconly-pro"
        alt=""
        src="/arrow--down-2--iconly-pro.svg"
      />
    </div>
  );
};

export default AdminDashboard;
