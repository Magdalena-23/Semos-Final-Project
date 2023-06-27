import React from "react";
import classes from "./User.module.css";
import Button from "../../components/common/Button/Button";

const User = (props) => {
  return (
    <div className={classes.user}>
      <div className={classes["user-details"]}>
        <div className={classes["img-container"]}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCoS1h0huK1B606Qb4j_hHmwGH8wPmvKLSKQ&usqp=CAU"
            alt="profile-avatar"
          />
        </div>
        <div>
          <h3 className={classes.h3}>{props.fullName}</h3>
          <span className={classes.email}>{props.email}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <Button
          className={`${classes.btn} ${
            props.isAdmin ? classes["admin-btn"] : classes["user-btn"]
          }`}
        >
          {props.isAdmin ? "Make User" : "Make Admin"}
        </Button>
        <Button className={`${classes["delete-btn"]} ${classes.btn}`}>
          Delete User
        </Button>
      </div>
    </div>
  );
};

export default User;
