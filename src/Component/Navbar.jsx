import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasExample() {
  const navigation = [
    { icon: "bi bi-house ", name: "Home ", href: "/" },
    { icon: "bi bi-people ", name: "About Me ", href: "/about" },
    { icon: "bi bi-cup-hot ", name: "Project ", href: "/project" },
    { icon: "bi bi-wrench-adjustable-circle ", name: "Skill ", href: "/skill" },
    { icon: "bi bi-telephone ", name: "Contact Me ", href: "/contact" },
  ];

  return (
    <>
      {["false"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="fixed-top"
          id="nav-wrap"
        >
          <Container fluid className="rounded-nav" id="nav-wrap">
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className="bg-warning rounded-nav"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  className="text-dark fw-bold"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  Wbs.
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end text-dark fw-n">
                  {navigation.map((item) => (
                    <Nav.Link
                      id="nav"
                      className="my-2"
                      key={item.name}
                      href={item.href}
                    >
                      <i className={item.icon}></i> {item.name}
                    </Nav.Link>
                  ))}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
