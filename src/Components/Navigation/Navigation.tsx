import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { Shoppingcontext } from "../../shared/Context/UserContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
              ShoppingStore
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/" className="ToolbarLink" as={NavLink}>
                Home
              </Nav.Link>
              <Nav.Link to="/electronics" className="ToolbarLink" as={NavLink}>
                Electronics
              </Nav.Link>
              <NavDropdown
                title="Explore"
                id="collapsible-nav-dropdown"
                className="ToolbarLink"
              >
                <NavDropdown.Item
                  to="/airconditioners"
                  className="ToolbarLink"
                  as={NavLink}
                >
                  AirConditioners
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/televisions"
                  className="ToolbarLink"
                  as={NavLink}
                >
                  Televisions
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/washingmachines"
                  className="ToolbarLink"
                  as={NavLink}
                >
                  Washing Machines
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  to="/allitems"
                  className="ToolbarLink"
                  as={NavLink}
                >
                  All Items
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
                  Dashboard
                </Nav.Link>
                <Nav.Link
                  to="/userdashboard/cart"
                  className="ToolbarLink"
                  as={NavLink}
                >
                  Cart
                </Nav.Link>
                <Nav.Link className="ToolbarLink" onClick={onlogout}>
                  Logout
                </Nav.Link>{" "}
              </Nav>
            ) : (
              <Nav>
                <Nav.Link to="/login" className="ToolbarLink" as={NavLink}>
                  Login
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
