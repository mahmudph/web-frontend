import React, { useState, useEffect } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link } from "react-scroll";
import { Link as GatsbyLink } from "gatsby";
import s from "./Navbar.module.scss";

const NavbarDefault = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, [currentPath]);

  console.log(s);

  return (
    <div id={s["topNav"]}>
      <Navbar color="light" className={s["topNav"]} light expand="md">
        <GatsbyLink to="/">
          <img alt="Palembang Digital" src={"/logo.png"} width="50px" />
        </GatsbyLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className={s["navItem"]}>
              {!currentPath.startsWith("/patal-team") ? (
                <Link
                  to={`event`}
                  smooth={true}
                  duration={1000}
                  className={s["NavLink"]}>
                  Acara
                </Link>
              ) : (
                <GatsbyLink to="/#event" className={s["NavLink"]}>
                  Acara
                </GatsbyLink>
              )}
            </NavItem>
            <NavItem className={s["navItem"]}>
              {!currentPath.startsWith("/patal-team") ? (
                <Link
                  to={`tentang`}
                  smooth={true}
                  duration={1000}
                  className={s["NavLink"]}>
                  Tentang
                </Link>
              ) : (
                <GatsbyLink to="#tentang" className={s["NavLink"]}>
                  Tentang
                </GatsbyLink>
              )}
            </NavItem>
            <NavItem className={s["navItem"]}>
              {!currentPath.startsWith("/patal-team") ? (
                <Link
                  to={`footer`}
                  smooth={true}
                  duration={1000}
                  className={s["NavLink"]}>
                  Kontak
                </Link>
              ) : (
                <GatsbyLink to="/#footer" className={s["NavLink"]}>
                  Kontak
                </GatsbyLink>
              )}
            </NavItem>
            <NavItem
              className={`${s["navItem"]} ${
                currentPath.startsWith("/patal-team") ? s["active"] : ""
              }`}>
              <GatsbyLink to="/patal-team" className={s["NavLink"]}>
                Tim
              </GatsbyLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarDefault;
