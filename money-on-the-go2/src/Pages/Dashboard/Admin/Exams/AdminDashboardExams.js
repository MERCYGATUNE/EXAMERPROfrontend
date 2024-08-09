import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExamDetails from "../components/ExamDetails";
import GroupComponent3 from "../components/GroupComponent3";
import "./AdminDashboardExams.css";

const AdminDashboardExams = () => {
  const navigate = useNavigate();

  const onUSERSTextClick = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  const onCATEGORIESTextClick = useCallback(() => {
    navigate("/admin-dashboard-categories");
  }, [navigate]);

  return (
    <div className="admin-dashboard-exams">
      <div className="branding">
        <div className="product-name">
          <h1 className="examerpro3">ExamerPro™</h1>
          <div className="admin-label">
            <h1 className="admin2">ADMIN</h1>
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
      <GroupComponent3 />
      <GroupComponent3 />
    </div>
  );
};

export default AdminDashboardExams;
