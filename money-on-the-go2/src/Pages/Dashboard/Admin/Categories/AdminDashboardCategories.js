import { useCallback, useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TrashIcon from '../../../../assets/group-1011.svg';
import EditIcon from '../../../../assets/group-1021.svg';
import "./AdminDashboardCategories.css";

const AdminDashboardCategories = () => {
  const navigate = useNavigate();
  const [jsonTestData, setjsonTestData] = useState()

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5555/all_categories', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const jsonData = await response.json();
        console.log(jsonData)
        setjsonTestData(jsonData);
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



  const onUSERSTextClick = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  const onEXAMSTextClick = useCallback(() => {
    navigate("/admin-dashboard-exams");
  }, [navigate]);

  const [currentView, setCurrentView] = useState("categories");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const [editingCategory, setEditingCategory] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState("");

  const [editingSubCategory, setEditingSubCategory] = useState(null);
  const [newSubCategoryName, setNewSubCategoryName] = useState("");

  const [editingTopic, setEditingTopic] = useState(null);
  const [newTopicName, setNewTopicName] = useState("");

  const [addingCategory, setAddingCategory] = useState(false);
  const [addCategoryName, setAddCategoryName] = useState("")

  const [addingSubcategory, setAddingSubcategory] = useState(false);
  const [addSubcategoryName, setAddSubcategoryName] = useState("")

  const [addingTopic, setAddingTopic] = useState(false);
  const [addTopicName, setAddTopicName] = useState("")

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    localStorage.setItem("selectedCategoryId", category.id);
    setCurrentView("subcategories");
  };

  const handleEditClickCategory = (category) => {
    setEditingCategory(category);
    setNewCategoryName(category.name);
  };

  const handleSaveEditCategory = async (category) => {
    if (editingCategory) {
      try {
        const response = await fetch('http://127.0.0.1:5555/edit_category', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "category_id": category.id,
            "name": newCategoryName,
          }),
        });
        const data = await response.json();
        setEditingCategory(null);
        setNewCategoryName("");
        console.log(data.message);
        fetchData(); // Refresh the data after saving
      } catch (error) {
        console.error('Error saving user:', error);
      }
    }
  };

  const handleCancelEditCategory = () => {
    setEditingCategory(null);
    setNewCategoryName("");
  };

  const handleSaveAddCategory = async () => {
    if (addingCategory) {
      try {
        const response = await fetch('http://127.0.0.1:5555/add_category', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 'name': `${addCategoryName}` }),
        });
        const data = await response.json();
        console.log(data.error);
        setAddingCategory(false);
        fetchData();
      } catch (error) {
        console.error('Error adding user:', error);
      }
    }
  }

  const handleEditClickSubCategory = (subcategory) => {
    setEditingSubCategory(subcategory);
    setNewSubCategoryName(subcategory.name);
  };
  const handleSaveAddSubCategory = async () => {
    if (addingSubcategory) {
      try {
        const selectedCategoryId = localStorage.getItem('selectedCategoryId');
        const response = await fetch('http://127.0.0.1:5555/add_subcategory', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 'name': `${addSubcategoryName}`, 'category_id': `${selectedCategoryId}` }),
        });
        const data = await response.json();
        console.log(data.error);
        fetchData();
        setAddingSubcategory(false)
      } catch (error) {
        console.error('Error adding user:', error);
      }
    }
  }

  const handleSaveAddTopic= async () =>{
    if (addingTopic) {
      try {
        const selectedSubCategoryId = localStorage.getItem('selectedSubCategoryId');
        const response = await fetch('http://127.0.0.1:5555/add_topic', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 'name': `${addTopicName}`, 'subcategory_id': `${selectedSubCategoryId}` }),
        });
        const data = await response.json();
        console.log(data.error);
        fetchData();
        setAddingTopic(false)
      } catch (error) {
        console.error('Error adding user:', error);
      }
    }
  }

  const handleSaveEditSubCategory = async (subcategory) => {
    if (editingSubCategory) {
      try {
        const response = await fetch('http://127.0.0.1:5555/edit_subcategory', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "subcategory_id": subcategory.id,
            "name": newSubCategoryName,
          }),
        });
        const data = await response.json();
        setEditingSubCategory(null);
        setNewSubCategoryName("");
        console.log(data.message);
        fetchData(); // Refresh the data after saving
      } catch (error) {
        console.error('Error saving user:', error);
      }
    }
  };


  const handleDeleteCategory = async (category_id) => {
    try {
      const response = await fetch('http://127.0.0.1:5555/delete_category', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category_id }),
      });
      const data = await response.json();
      fetchData();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }

  const handleDeleteSubCategory = async (subcategory_id) =>{
    try{
      const response = await fetch('http://127.0.0.1:5555/delete_subcategory', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subcategory_id }),
      });
      const data = await response.json();
      fetchData();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
    }

  const handleDeleteTopic = async (topic_id) => {
    try {
      const response = await fetch('http://127.0.0.1:5555/delete_topic', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic_id }),
      });
      const data = await response.json();
      fetchData();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
  const handleCancelEditSubCategory = () => {
    setEditingSubCategory(null);
    setNewSubCategoryName("");
  };

  const handleEditClickTopic = (topic) => {
    setEditingTopic(topic);
    setNewTopicName(topic.name);
  };

  const handleSaveEditTopic = async (topic) => {
    if (editingTopic) {
      try {
        const response = await fetch('http://127.0.0.1:5555/edit_topic', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "topic_id": topic.id,
            "name": newTopicName,
          }),
        });
        const data = await response.json();
        setEditingTopic(null);
        setNewTopicName("");
        console.log(data.message);
        fetchData(); // Refresh the data after saving
      } catch (error) {
        console.error('Error saving user:', error);
      }
    }
  };

  const handleCancelEditTopic = () => {
    setEditingTopic(null);
    setNewTopicName("");
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
    localStorage.setItem('selectedSubCategoryId', subcategory.id);
    setCurrentView("topics");
  };

  const handleBackClick = () => {
    if (currentView === "topics") {
      localStorage.removeItem('selectedSubCategoryId');
      setSelectedSubcategory(null);
      setCurrentView("subcategories");
    } else if (currentView === "subcategories") {
      localStorage.removeItem('selectedCategoryId');
      setSelectedCategory(null);
      setCurrentView("categories");
    }
  };

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
      {currentView === "categories" && (
        <section className="frame-section33">
          {jsonTestData?.map((category) => (
            <div
              className={`form-1-wrapper8`}
              key={category.id}
            >
              {editingCategory && editingCategory.id === category.id ? (
                <div>
                  <TextField
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                  />
                  <Button onClick={() => { handleSaveEditCategory(category) }}>Save</Button>
                  <Button onClick={handleCancelEditCategory}>Cancel</Button>
                </div>
              ) : (
                <div onClick={() => handleCategoryClick(category)}>
                  <h1 className="form-115">{category.name}</h1>
                  <div className="frame-parent20">
                    <div className="frame-wrapper3">
                      <img
                        className="frame-child3"
                        loading="lazy"
                        alt=""
                        src={TrashIcon}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteCategory(category.id);
                        }}
                      />
                    </div>
                    <img
                      className="frame-child4"
                      alt=""
                      src={EditIcon}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditClickCategory(category);
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className={`form-1-wrapper8`}>
            {addingCategory ? (
              <>
                <TextField
                  value={addCategoryName}
                  onChange={(e) => setAddCategoryName(e.target.value)}
                />
                <Button onClick={handleSaveAddCategory}>Save</Button>
                <Button onClick={() => { setAddingCategory(false) }}>Cancel</Button>
              </>
            ) : (
              <>
                <h1 className="form-140" onClick={() => { setAddingCategory(true) }}>+</h1>
              </>
            )}
          </div>
        </section>
      )}
      {currentView === "subcategories" && selectedCategory && (
        <section className="frame-section33">
          {selectedCategory.subcategories?.map((subcategory) => (
            <div
              className={`form-1-wrapper8`}
              key={subcategory.id}
            >
              {editingSubCategory && editingSubCategory.id === subcategory.id ? (
                <div>
                  <TextField
                    value={newSubCategoryName}
                    onChange={(e) => setNewSubCategoryName(e.target.value)}
                  />
                  <Button onClick={(e) =>{handleSaveEditSubCategory(subcategory)}}>Save</Button>
                  <Button onClick={handleCancelEditSubCategory}>Cancel</Button>
                </div>
              ) : (
                <div onClick={() => handleSubcategoryClick(subcategory)}>
                  <h1 className="form-115">{subcategory.name}</h1>
                  <div className="frame-parent20">
                    <div className="frame-wrapper3">
                      <img
                        className="frame-child3"
                        loading="lazy"
                        alt=""
                        src={TrashIcon}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteSubCategory(subcategory.id)
                        }}
                      />
                    </div>
                    <img
                      className="frame-child4"
                      alt=""
                      src={EditIcon}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditClickSubCategory(subcategory);
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className={`form-1-wrapper8`}>
            {addingSubcategory ? (
              <>
                <TextField
                  value={addSubcategoryName}
                  onChange={(e) => setAddSubcategoryName(e.target.value)}
                />
                <Button onClick={handleSaveAddSubCategory}>Save</Button>
                <Button onClick={() => {setAddingSubcategory(false)}}>Cancel</Button>
              </>
            ) : (
              <>
                <h1 className="form-140" onClick={() => { setAddingSubcategory(true) }}>+</h1>
              </>
            )}
          </div>
        </section>
      )}
      {currentView === "topics" && selectedSubcategory && (
        <section className="frame-section33">
          {selectedSubcategory.topics?.map((topic) => (
            <div
              className={`form-1-wrapper8`}
              key={topic.id}
            >
              {editingTopic && editingTopic.id === topic.id ? (
                <div>
                  <TextField
                    value={newTopicName}
                    onChange={(e) => setNewTopicName(e.target.value)}
                  />
                  <Button onClick={(e) => {handleSaveEditTopic(topic)}}>Save</Button>
                  <Button onClick={handleCancelEditTopic}>Cancel</Button>
                </div>
              ) : (
                <div>
                  <h1 className="form-115">{topic.name}</h1>
                  <div className="frame-parent20">
                    <div className="frame-wrapper3">
                      <img
                        className="frame-child3"
                        loading="lazy"
                        alt=""
                        src={TrashIcon}
                        onClick={(e) =>{
                          e.stopPropagation();
                          handleDeleteTopic(topic.id);
                        }}
                      />
                    </div>
                    <img
                      className="frame-child4"
                      alt=""
                      src={EditIcon}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditClickTopic(topic);
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className={`form-1-wrapper8`}>
          {addingTopic ? (
              <>
                <TextField
                  value={addTopicName}
                  onChange={(e) => setAddTopicName(e.target.value)}
                />
                <Button onClick={handleSaveAddTopic}>Save</Button>
                <Button onClick={() => { setAddingTopic(false) }}>Cancel</Button>
              </>
            ) : (
              <>
                <h1 className="form-140" onClick={() => { setAddingTopic(true) }}>+</h1>
              </>
            )}
          </div>
        </section>
      )}
      {currentView !== "categories" && (
        <div className="back-button-container">
          <button className="back-button" onClick={handleBackClick}>
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminDashboardCategories;
