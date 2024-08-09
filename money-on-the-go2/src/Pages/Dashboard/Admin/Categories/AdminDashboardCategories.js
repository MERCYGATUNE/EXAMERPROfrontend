import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GroupComponent4 from "../components/GroupComponent4";
import "./AdminDashboardCategories.css";

const AdminDashboardCategories = () => {
  const navigate = useNavigate();

  const onUSERSTextClick = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  const onEXAMSTextClick = useCallback(() => {
    navigate("/admin-dashboard-exams");
  }, [navigate]);

  return (
    <div className="admin-dashboard-categories">
      <section className="main-layout">
        <div className="content-area">
          <div className="exam-area">
            <div className="examerpro-parent">
              <h1 className="examerpro1">ExamerPro™</h1>
              <div className="admin-wrapper">
                <h1 className="admin">ADMIN</h1>
              </div>
            </div>
          </div>
          <div className="navigation-area">
            <div className="user-navigation">
              <b className="users" onClick={onUSERSTextClick}>
                USERS
              </b>
            </div>
            <div className="exam-navigation">
              <b className="exams" onClick={onEXAMSTextClick}>
                EXAMS
              </b>
            </div>
            <Button
              className="category-navigation"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#ffeeee",
                fontSize: "16",
                background: "#8e31eb",
                borderRadius: "30px",
                "&:hover": { background: "#8e31eb" },
                width: 184,
                height: 33,
              }}
            >
              CATEGORIES
            </Button>
          </div>
        </div>
      </section>
      <section className="frame-section33">
        <GroupComponent4 fORM1="FORM 1" />
        <GroupComponent4 fORM1="FORM 2" />
        <GroupComponent4 fORM1="FORM 3" />
      </section>
    </div>
  );
};

export default AdminDashboardCategories;
