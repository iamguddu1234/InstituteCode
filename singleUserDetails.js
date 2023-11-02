import classes from "./singleUserDetails.module.css";

import IMG from "./p2.jpg";

function singleUserDetails() {
  return (
    <div className={classes.parentClass}>
      <div className={classes.nameContainer}>Akshay Bhasme</div>
      <div className={classes.rolwContainer}>Teachers</div>
      <div className={classes.dateContainer}>20-12-2023</div>
      <div className={classes.statusContainer}>Active</div>
    </div>
  );
}

export default singleUserDetails;
