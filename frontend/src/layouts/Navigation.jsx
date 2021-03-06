import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// REACT BOOTSTRAP
import { NavDropdown, Navbar } from "react-bootstrap";
import CreateAdminModal from "../components/CreateAdminModal";
import CreateNewWord from "../components/CreateNewWord";

import logo from "../img/logo120.png";

export default function Navigation() {
  // LOCATION
  const history = useHistory();

  // LOGOUT
  const logout = () => {
    alert(`THIS IS ALPHA VERSION | Logged out`);
    sessionStorage.removeItem("token");
    history.replace("/admin-login");
  };
  // CREATE NEW ADMIN MODAL
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const props = { show, handleClose };
  const props2 = { show2, handleClose2 };

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
            <NavDropdown.Item onClick={handleShow2}>
              Add new prohibited words
            </NavDropdown.Item>
            <NavDropdown.Item onClick={logout}>Log out</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>

      {/* CREATE ADMIN MODAL */}
      <CreateAdminModal {...props} />

      {/* CREATE NEW PROHBITED WORD */}
      <CreateNewWord {...props2} />
    </div>
  );
}
