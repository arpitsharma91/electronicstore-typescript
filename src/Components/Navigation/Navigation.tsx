import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { Shoppingcontext } from "../../shared/Context/UserContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as ITEMS from "../../shared/Constants/electronicitem";

function Navigation() {
  const user = Shoppingcontext();
  const navigate = useNavigate();
  useEffect(() => {
    user.checkAuthState();
  }, []);

  const onlogout = () => {
    user.logout();
    navigate("/");
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand>
            {" "}
            <NavLink to="/" className="ToolbarLink">
              SHOPPINGSTORE
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/" className="ToolbarLink" as={NavLink}>
                HOME
              </Nav.Link>
              <Nav.Link to="/electronics" className="ToolbarLink" as={NavLink}>
                ELECTRONICS
              </Nav.Link>
              <NavDropdown
                title="EXPLORE"
                id="collapsible-nav-dropdown"
                className="ToolbarLink"
              >
                <NavDropdown.Item
                  to="/airconditioners"
                  className="ToolbarLink"
                  as={NavLink}
                >
                  {ITEMS.AIR_CONDITIONERS}
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/televisions"
                  className="ToolbarLink"
                  as={NavLink}
                >
                  {ITEMS.TELEVISIONS}
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/washingmachines"
                  className="ToolbarLink"
                  as={NavLink}
                >
                  {ITEMS.WASHING_MACHINES}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  to="/allitems"
                  className="ToolbarLink"
                  as={NavLink}
                >
                  ALL ITEMS
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {user.authData.token ? (
              <Nav>
                <Nav.Link
                  to="/userdashboard"
                  className="ToolbarLink"
                  as={NavLink}
                >
                  DASHBOARD
                </Nav.Link>
                <Nav.Link
                  to="/userdashboard/cart"
                  className="ToolbarLink"
                  as={NavLink}
                >
                  CART
                </Nav.Link>
                <Nav.Link className="ToolbarLink" onClick={onlogout}>
                  LOGOUT
                </Nav.Link>{" "}
              </Nav>
            ) : (
              <Nav>
                <Nav.Link to="/login" className="ToolbarLink" as={NavLink}>
                  LOGIN
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
