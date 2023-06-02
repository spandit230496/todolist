import {
  Add,
  AddBox,
  AddBoxRounded,
  AddCircleOutline,
  Cancel,
  Edit,
  EditRounded,
  Man,
} from "@mui/icons-material";
import React from "react";
import { useState, useEffect } from "react";
import RightBar from "../components/EditComponent/RightBar";
import { FaCross, FaUser, FaUserCircle } from "react-icons/fa";
import { WestOutlined } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";

const getLocalItem = () => {
  const list = localStorage.getItem("list");

  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else return [];
};
const TodoList = () => {
  const [todoLists, setTodoLists] = useState(getLocalItem);
  const [newListName, setNewListName] = useState("");
  const [newTodoInputs, setNewTodoInputs] = useState({});
  const [editedId, setEditedId] = useState(0);
  const [data, setData] = useState({});
  

  useEffect(() => {
    console.log("FinalTodo-->", todoLists);
    console.log("DATAAAAA-->", data);
  }, [todoLists, data]);

  const addList = () => {
    if (newListName === "") {
      toast("add list name");
      return;
    }

    const newList = {
      id: Date.now().toString(),
      name: newListName,
      todos: [],
    };

    setTodoLists((prevLists) => [...prevLists, newList]);
    // setTodoLists( [...todoLists, newList]);

    setNewListName("");

    setNewTodoInputs({
      ...newTodoInputs,
      [newList.id]: { title: "", description: "" },
    });
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todoLists));
  }, [todoLists]);

  const addTodo = (listId) => {
    if (
      newTodoInputs[listId].title === "" ||
      newTodoInputs[listId].description === ""
    ) {
      toast("add todo name");
      return;
    }

    const newTodo = {
      isEdit: "",
      id: Date.now().toString(),
      title: newTodoInputs[listId].title.trim(),
      description: newTodoInputs[listId].description.trim(),
    };

    setTodoLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId ? { ...list, todos: [...list.todos, newTodo] } : list
      )
    );

    setNewTodoInputs((prevInputs) => ({
      ...prevInputs,
      [listId]: { title: "", description: "" },
    }));
  };

  //delete the list
  const handleDelete = (id) => {
    const deletedItem = todoLists.filter((item) => item.id === id);
    toast("list  deleted");
    const updatedTodos = todoLists.filter((item) => item.id !== id);
    setTodoLists(updatedTodos);
  };

  const handleInputChange = (listId, field, value) => {
    setNewTodoInputs((prevInputs) => ({
      ...prevInputs,
      [listId]: {
        ...prevInputs[listId],
        [field]: value,
      },
    }));
  };

  const edit = (listId, id) => {
    const list = todoLists.find((list) => list.id === listId);
    if (list) {
      const item = list.todos.find((itemedit) => itemedit.id === id);
      setEditedId(id);
      console.log("EditItem-->", item);
      console.log(data, "{}{")
     // setEditVal({heading:item.title,paragraph:item.description})
      setData(item);
      
    }
  };


  function Update() {
    const updatedTodoLists = todoLists.map((list) => {
      const updatedTodos = list.todos.map((todo) => {
        if (todo.id === editedId) {
          if(data.title===""){
            return {
              ...todo,
              title:todo.title,
              description: data.description,
            }; 
          }
         else if(data.description===""){
            return {
              ...todo,
              title:data.title,
              description:todo.description,
            }; 
          }
        else{
          return {
            ...todo,
            title: data.title,
            description: data.description,
          };
        }
        }
        return todo;
      });

      return {
        ...list,
        todos: updatedTodos,
      };
    });

    setTodoLists(updatedTodoLists);
    setEditedId(0);
    setData({ heading: "", paragraph: "" });
    toast("data updated ")
  }

  console.log(data);

  return (
    <div className="mcomment">
      <div className="divmain">
        <div className="mbottom">
          {/* Display Todo Lists */}
          <ToastContainer />
          {todoLists.map((list) => (
            <div key={list.id}>
              <div className="mtodo">
                <div className="todolistname">
                  <h2>{list.name}</h2>
                  <Cancel
                    style={{ color: "grey" }}
                    onClick={() => handleDelete(list.id)}
                  />
                </div>
                <div className="todolist">
                  <div className="hsection" >
                    <FaUser
                      style={{ color: "grey", marginRight: "0.2rem" }}
                      className="fa"
                    />
                    <input
                      type="text"
                      value={newTodoInputs[list.id]?.title || ""}
                      onChange={(e) =>
                        handleInputChange(list.id, "title", e.target.value)
                      }
                      placeholder="Add Todo"
                    />
                    <AddCircleOutline
                      style={{ color: "grey" }}
                      onClick={() => addTodo(list.id)}
                    />
                  </div>
                  <textarea
                    type="text"
                    value={newTodoInputs[list.id]?.description || ""}
                    onChange={(e) =>
                      handleInputChange(list.id, "description", e.target.value)
                    }
                    placeholder="Add todo description"
                  />
                </div>
              </div>
              {/* Display Todos */}

              {list.todos.map((todo) => (
                <div className="mtodoassign" key={todo.id}>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      className="heading"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <FaUser
                        style={{ color: "grey", marginRight: "0.2rem" }}
                        className="fa"
                      />
                      <h3>{todo.title}</h3>
                    </div>
                    <div>
                      <EditRounded
                        style={{ color: "grey" }}
                        onClick={() => edit(list.id, todo.id)}
                      />
                    </div>
                  </div>
                  <p>{todo.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="madd">
          {/* Add Todo List */}
          <input
            type="text"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            placeholder="Enter list name"
          />
          <Add onClick={addList} />
        </div>
        {editedId ? (
          <div>
            <div className="containerright">
              <div className="edit" onClick={() => setEditedId(0)}>
                <WestOutlined />
                <h1>Edit</h1>
              </div>
              <div className="right">
                <input
                  type="text"
                  value={data.title}
                  placeholder="Edit Heading"
                  onChange={(e) =>
                    setData({ ...data, title: e.target.value })
                  }
                />
                <textarea
                  type="text"
                  placeholder="Edit Description"
                  value={data.description}
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                ></textarea>
                <button onClick={Update}>Save</button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TodoList;