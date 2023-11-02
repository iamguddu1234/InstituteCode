import logo from "./logo.svg";
import classes from "./ContactTitleDiv.module.css";

import LeftSideMenu from "./LeftSideMenu";
import RightSideDetails from "./RightSideDetails";

// import 'typeface-roboto';

import insIcon from "./instituteIICON.jpeg";

function App() {
  return (
    <div className={classes.contactTitleDiv}>
      {/* <div className={classes.contactTitle}>
        Institute: manage your institute
      </div> */}

      <div className={classes.topbox}>
        <img src={insIcon} className={classes.insLogo} />

        <div className={classes.insName}>
          NIT, Naresh IT Institute, Hydreabaad, 4444444
        </div>
      </div>

      <div className={classes.mainContainer}>
        <LeftSideMenu />
        <RightSideDetails />
      </div>
    </div>
  );
}

export default App;
