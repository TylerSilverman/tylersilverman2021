import React, { useContext, useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { logoutUser } from "../../store/actions/authActions";
import { Store } from "../../store";
import {
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
 
  //changes the design on navbar links
  menuButton: {
    color: "#3266A1",
    fontWeight: 700,
    size: "22px",
    marginLeft: "38px",
  },
}));

const Navbar = (props) => {
  const { menuButton } = useStyles();

  const history = useHistory();
  const { state, dispatch } = useContext(Store);
  const [mobileView, setStateMobile] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  // const { mobileView } = stateMobile;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setStateMobile((prevState) => ({ ...prevState, mobileView: true }))
        : setStateMobile((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const onLogoutClick = (e) => {
    e.preventDefault();

    logoutUser(history)(dispatch);
  };

    return (
      <div>
        {" "}
        {state.auth.isAuthenticated ? (
          <Button to="/dashboard" component={NavLink} className={menuButton}>
            Dashboard
          </Button>
        ) : (
          " "
        )}{" "}
        {state.auth.isAuthenticated ? (
          <Button to="/resume" component={NavLink} className={menuButton}>
            Resume
          </Button>
        ) : (
          " "
        )}
        {state.auth.isAuthenticated ? (
          <Button to="/achievements
          " component={NavLink} className={menuButton}>
            Achievements
          </Button>
        ) : (
          " "
        )}
        {state.auth.isAuthenticated ? (
          <Button to="/search
          " component={NavLink} className={menuButton}>
            Search
          </Button>
        ) : (
          " "
        )}
        {state.auth.isAuthenticated ? (
          <Button to="/about
          " component={NavLink} className={menuButton}>
            About
          </Button>
        ) : (
          " "
        )}
        {state.auth.isAuthenticated ? (
          <Button to="/directory
          " component={NavLink} className={menuButton}>
            DirectoryBook
          </Button>
        ) : (
          " "
        )}
        
        {state.auth.isAuthenticated ? (
          <Button
            to={"/"}
            component={NavLink}
            className={menuButton}
            onClick={onLogoutClick}
          >
            Logout
          </Button>
        ) : (
          " "
        )}
      </div>
    );
  };

export default Navbar;