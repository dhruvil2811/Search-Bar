import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import Button from "@mui/material/Button";
import { getAllContacts, deleteContacts } from "../utils";
// import PersonIcon from "@mui/icons-material/Person";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import EditIcon from "@mui/icons-material/Edit";
// import { ListItem } from "@mui/material";

export default function SearchBar() {
  const [Data, setData] = useState([]);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    getAllContacts()
      .then((data) => {
        setData(data);
        setRows(data);
      })
      .catch((err) => console.error(err));
  }

  const handlesearch = (searchdata) => {
    let new_array = [];
    searchdata.length !== 0
      ? Data.filter((item) => {
          item.name.toLowerCase().includes(searchdata.toLowerCase()) &&
            new_array.push(item);
          setRows(new_array);
        })
      : setRows(Data);
  };

  const handleDelete = (id) => {
    let new_array = [];
    // deleteContacts(id)
    //   .then()
    //   .catch((err) => console.error(err));
    rows.filter((item) => {
      item.id !== id && new_array.push(item);
      setRows(new_array);
    });
  };

  return (
    <>
      <div className="mobile-container">
        <div className="container">
          <div className="title">
            <h2>Contact Manager</h2>
          </div>
          <div className="header-input">
            <h3>Contact List</h3>
            {/* <Button variant="contained" size="medium">
              Add
            </Button> */}
          </div>
          <div className="header-search">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => {
                // console.log(e.target.value);
                // setRows([]);
                e.preventDefault();
                handlesearch(e.target.value);
              }}
            />
          </div>
          <div className="contact-list">
            {rows.length !== 0 &&
              rows.map((item) => {
                return (
                  <div key={item.id} className="contact-data">
                    <div className="logo">
                      {<AccountCircleRoundedIcon fontSize="large" />}
                    </div>
                    <div className="info">
                      <p>{item.name}</p>
                      <p>{item.email}</p>
                      {/* {!rows.length == 0 && console.log(rows)} */}
                    </div>
                    <div className="actions">
                      <p className="action">
                        <DeleteForeverRoundedIcon
                          onClick={() => handleDelete(item.id)}
                        />
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
