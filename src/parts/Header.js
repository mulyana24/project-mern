import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/button";
import BrandIcon from "parts/IconText";

export default function Header(props) {

  // fungsi getNavLinkClass
  const getNavLinkClass = (path) => {
    //   mengembalikan jika ada pathname sama dengan path maka active
    return props.location.pathname === path ? "active" : "";
  };

  if (props.isCentered) {
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Button className="brand-text-icon mx-auto" href="" type="link">
                Galih<span className="text-gray-900">WO.</span>
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );
  }

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <BrandIcon />

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item ${getNavLinkClass("/")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("/browse-by")}`}>
                  <Button className="nav-link" type="link" href="/browse-by" >
                    Browse By
                  </Button>
                </li>
                {/* <li className={`nav-item ${getNavLinkClass("/stories")}`}>
                  <Button className="nav-link" type="link" href="/stories">
                    Stories
                  </Button>
                </li> */}
                {/* <li className={`nav-item ${getNavLinkClass("/agents")}`}>
                  <Button className="nav-link" type="link" href="/agents">
                    Agents
                  </Button>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
