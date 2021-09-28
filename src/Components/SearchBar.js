import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import Button from "@mui/material/Button";
import { getAllContacts } from "../utils";
// import PersonIcon from "@mui/icons-material/Person";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import EditIcon from "@mui/icons-material/Edit";
// import { ListItem } from "@mui/material";

export default function SearchBar() {
  const [Data, setData] = useState([]);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    getAllContacts()
      .then((data) => {
        setData(data);
        // console.log(data.results[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  const handlesearch = (searchdata) => {
    let new_array = [];
    // let lower = searchdata;
    !searchdata == ""
      ? Data.filter((item) => {
          // console.log(item.name.includes(searchdata));
          item.name.toLowerCase().includes(searchdata.toLowerCase()) &&
            console.log(item.name);
        })
      : setRows(Data);
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
            <Button variant="contained" size="medium">
              Add
            </Button>
          </div>
          <div className="header-search">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => {
                // setSearchData(e.target.value);
                handlesearch(e.target.value);
              }}
            />
          </div>
          <div className="contact-list">
            {Data.length !== 0 &&
              Data.map((item) => {
                return (
                  <div key={item.id} className="contact-data">
                    <div className="logo">
                      {<AccountCircleRoundedIcon fontSize="large" />}
                    </div>
                    <div className="info">
                      <p>{item.name}</p>
                      <p>{item.email}</p>
                      {!rows.length == 0 && console.log(rows)}
                    </div>
                    <div className="actions">
                      <p className="action">
                        <EditIcon />
                      </p>
                      <p className="action">
                        <DeleteForeverRoundedIcon />
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
