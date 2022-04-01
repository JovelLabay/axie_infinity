import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// REACT BOOTSTRAP
import { NavDropdown, Navbar, Container } from "react-bootstrap";
import CreateAdminModal from "../components/CreateAdminModal";

import logo from "../img/logo120.png";

export default function Navigation() {
  // LOCATION
  const history = useHistory();

  // LOGOUT
  const logout = () => {
    sessionStorage.removeItem("token");
    history.replace("/admin-login");
  };
  // CREATE NEW ADMIN MODAL
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const props = { show, handleClose };

  return (
    <div className="sub_container">
      <Navbar>
        <Navbar.Brand className="flex items-center">
          <img src={logo} alt="Logo" height={50} width={50} className="pr-3" />
          <h4>Axie Infinity</h4>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <NavDropdown title="Dropdown" id="basic-nav-dropdown" align="end">
            <NavDropdown.Item onClick={handleShow}>
              Create new admin
            </NavDropdown.Item>
            <NavDropdown.Item disabled>Delete all</NavDropdown.Item>
            <NavDropdown.Item disabled>
              Add new prohibited words
            </NavDropdown.Item>
            <NavDropdown.Item onClick={logout}>Log out</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>

      {/* CREATE ADMIN MODAL */}
      <CreateAdminModal {...props} />
    </div>
  );
}
