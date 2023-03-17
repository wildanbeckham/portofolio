import Nav from "react-bootstrap/Nav";
import PreLoader from "./PreLoader";
import { Link } from "react-router-dom";

export default function Home() {
  const icon = [
    {
      link: "https://www.instagram.com/wldnbs13/?hl=en",
      icon: "bi bi-instagram",
    },
    {
      link: "https://www.linkedin.com/in/wildan-beckham-surtanik-2b08491b2/",
      icon: "bi bi-linkedin",
    },
    { link: "https://wa.me/085157283329", icon: "bi bi-whatsapp" },
    { link: "https://github.com/wildanbeckham", icon: "bi bi-github" },
  ];

  return (
    <>
      <PreLoader />
      <section id="content">
        <div className="container h-100">
          <div className="row  h-100 d-flex align-items-center">
            <div className="col-lg">
              <h1 className="display-3 fw-bold">
                Hey, I'm Wildan a{" "}
                <span className="text-warning">web developer</span>
              </h1>
              <h2>front-end developer & fresh graduation</h2>
              <div className="mt-5">
                <Link
                  to="https://drive.google.com/file/d/1GVXciUGC6VC6M_Wdkaql46VLt0zCtmpI/view?usp=sharing"
                  target="_blank"
                  className="me-2 btn btn-warning text-white px-4 py-2"
                >
                  resume
                </Link>
                {icon.map((item) => (
                  <Link
                    to={item.link}
                    target="_blank"
                    className="mx-2 btn btn-light py-2"
                    key={item.icon}
                  >
                    <i className={item.icon}></i>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="row sticky-bottom next-prev text-end p-5">
            <div className="col">
              <Nav className="justify-content-end fw-n">
                <Nav.Link
                  id="nav"
                  className="btn btn-warning text-white py-2 px-4 btn-to"
                  href="/about"
                >
                  About Me <i className="bi bi-arrow-right-circle ps-2"></i>
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
