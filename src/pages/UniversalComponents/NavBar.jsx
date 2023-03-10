import React from "react";
import "./NavBar.css";
import iconB from "../../assets/Icons/delta-black.svg";
import iconW from "../../assets/Icons/delta.svg";
import userIcon from "../../assets/Icons/user.svg";
import menuIcon from "../../assets/Icons/menu.svg";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function NavBar() {
  let location = useLocation();
  const [invalidUrl, setInvalidUrl] = useState(true);
  const [NavBarState, setNavBarState] = useState(true);
  const [trigger, setTrigger] = useState("");
  const [visibility, setVisibility] = useState("");
  const invalidPathsArr = ["/404-page-not-found"];
  const specialPathsArr = ["/bookings", "/hotel-single"];

  useEffect(() => {
    const isInvalidPath = invalidPathsArr
      .map((item) => item === location.pathname)
      .includes(true);
    setInvalidUrl(isInvalidPath);
  });

  useEffect(() => {
    const isSpecialPath = specialPathsArr
      .map((item) => item === location.pathname)
      .includes(true);
    setNavBarState(isSpecialPath);
  });

  const triggerOpen = (event) => {
    event.preventDefault();
    setTrigger("90%");
  };

  const triggerClose = (event) => {
    event.preventDefault();
    setTrigger("0px");
  };

  useEffect(() => {
    NavBarState
    ? setVisibility(true)
    : setVisibility(false);
  }, [])
  
  const toggleVisible = () => {
    if (!NavBarState){
       document.documentElement.scrollTop > 100
        ? setVisibility(true)
        : setVisibility(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    !invalidUrl && (
      <main
        className="NavBar-container txt-color"
        style={{
          backgroundColor: visibility ? "white" : "transparent",
          boxShadow: visibility
            ? `0px 10px 10px rgba(43, 43, 43, 0.2)`
            : "none",
          // display: invalidUrl ? "none" : "flex",
        }}
      >
        <nav className="NavBar">
          <section className="nav-section">
            <Link to="/">
              <img src={visibility ? iconB : iconW} alt="Delta" />
            </Link>
          </section>

          <section className="nav-desktop">
            <Link to="/">
              <h2 style={{ color: visibility ? "black" : "white" }}>Home</h2>
            </Link>
            <Link to="/hotel-list">
              <h2 style={{ color: visibility ? "black" : "white" }}>Hotel</h2>
            </Link>

            <div className="dropdown">
              <h2 style={{ color: visibility ? "black" : "white" }}>Pages ???</h2>

              <ul className="dropdown-menu">
                <Link to="/404-page-not-found">
                  <li className="item-ctn">
                    <h2>404</h2>
                  </li>
                </Link>
                <Link to="/bookings">
                  <li className="item-ctn">
                    <h2>Booking</h2>
                  </li>
                </Link>
                <Link to="/dashboard">
                  <li className="item-ctn">
                    <h2>dashboard</h2>
                  </li>
                </Link>
                <Link to="/hotel-single">
                  <li className="item-ctn">
                    <h2>hotel single</h2>
                  </li>
                </Link>
                <Link to="/signup">
                  <li className="item-ctn">
                    <h2>Sign Up</h2>
                  </li>
                </Link>
                <Link to="/bookings">
                  <li className="item-ctn">
                    <h2>Bookings</h2>
                  </li>
                </Link>
                <Link to="/checkout">
                  <li className="item-ctn">
                    <h2>Check out</h2>
                  </li>
                </Link>
                <Link to="/about-us">
                  <li className="item-ctn">
                    <h2>About Us</h2>
                  </li>
                </Link>
              </ul>
            </div>
          </section>

          <div className="user-related">
            <section className="accesibility">
              <select
                name=""
                id=""
                className="coin"
                style={{ color: visibility ? "black" : "white" }}
              >
                <option value="">USD</option>
                <option value="">COP</option>
              </select>

              <select
                name=""
                id=""
                className="language"
                style={{ color: visibility ? "black" : "white" }}
              >
                <option value="">ESP</option>
                <option value="">ENG</option>
              </select>
            </section>

            <section className="nav-section">
              <div
                id="mySidepanel"
                style={{ width: trigger }}
                className="sidepanel"
              >
                <div className="closebtn" onClick={triggerClose}>
                  <Link to="/">
                    <h2>Back ???</h2>
                  </Link>
                </div>
                <div className="mobile-menu-titles">
                  <h2>Navigation</h2>
                </div>

                <Link to="/" className="item-ctn">
                  <h2>Home</h2>
                </Link>
                <Link to="/hotel-list" className="item-ctn">
                  <h2>Hotel</h2>
                </Link>
                <Link to="/" className="item-ctn">
                  <h2>Pages</h2>
                </Link>

                <div className="mobile-menu-titles">
                  <h2>Account</h2>
                </div>
                <Link to="/" className="item-ctn">
                  <h2>Log-in</h2>
                </Link>
                <Link to="/" className="item-ctn">
                  <h2>Log-out</h2>
                </Link>
                <Link to="/signup" className="item-ctn">
                  <h2>Sign-up</h2>
                </Link>
                <div className="mobile-menu-titles">
                  <h2>Accesibility</h2>
                </div>
                <div className="item-ctn">
                  <div className="acc-ctn-lbl">
                    <h2>Coin:</h2>
                  </div>

                  <select name="" id="" className="coin">
                    <option value="">USD</option>
                    <option value="">COP</option>
                  </select>
                </div>
                <div className="item-ctn">
                  <div className="acc-ctn-lbl">
                    <h2>Language:</h2>
                  </div>
                  <select id="" className="language">
                    <option value="">ESP</option>
                    <option value="">ENG</option>
                  </select>
                </div>
              </div>
              <button className="dropdown square-icon" onClick={triggerOpen}>
                <img
                  src={menuIcon}
                  alt="Delta"
                  style={{ filter: visibility ? "invert(0)" : "invert(1)" }}
                />
              </button>
            </section>

            <section className="nav-section">
              <div className="dropdown square-icon">
                <img
                  src={userIcon}
                  alt="Delta"
                  style={{ filter: visibility ? "invert(0)" : "invert(1)" }}
                />
                <ul className="dropdown-menu">
                  <li className="item-ctn">
                    <Link to="/">
                      <h2>Log In</h2>
                    </Link>
                  </li>
                  <li className="item-ctn">
                    <Link to="/signup">
                      <h2>Log out</h2>
                    </Link>
                  </li>
                  <li className="item-ctn">
                    <Link to="/signup">
                      <h2>Sign In</h2>
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </nav>
      </main>
    )
  );
}

export default NavBar;
