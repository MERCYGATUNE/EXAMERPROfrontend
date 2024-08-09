import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UserTable from "../components/UserTable";
import GroupComponent2 from "../components/GroupComponent2";
import "./Admin.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const onEXAMSTextClick = useCallback(() => {
    navigate("/admin-dashboard-exams");
  }, [navigate]);

  const onCATEGORIESTextClick = useCallback(() => {
    navigate("/admin-dashboard-categories");
  }, [navigate]);

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
      <GroupComponent2 />
      <GroupComponent2 />
      <img
        className="arrow-down-2-iconly-pro"
        alt=""
        src="/arrow--down-2--iconly-pro.svg"
      />
    </div>
  );
};

export default AdminDashboard;
