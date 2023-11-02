import classes from "./singleUser.module.css";

import IMG from "./p2.jpg";

function singleUser() {
  return (
    <div className={classes.parentClass}>
      <div className={classes.nameContainer}>Name</div>
      <div className={classes.rolwContainer}>Role</div>
      <div className={classes.dateContainer}>Date Joined</div>
      <div className={classes.statusContainer}>Status</div>
    </div>
  );
}

export default singleUser;
