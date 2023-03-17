import Nav from "react-bootstrap/Nav";

import PreLoader from "./PreLoader";
import profile from "../assets/images/profile.jpg";

export default function About() {
  const link = [
    {
      icon: "bi bi-arrow-left-circle pe-2 ",
      name: "Home ",
      href: "/",
      class: "btn-warning text-white",
    },
    {
      icon: "bi bi-arrow-right-circle pe-2 ",
      name: "Project ",
      href: "/project",
      class: "bg-white text-warning",
    },
  ];

  return (
    <>
      <PreLoader />
      <div id="content">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-md-6 px-5 h-100 d-flex align-items-center">
              <div>
                <h5 className="fw-bolder display-4">
                  About <span className="text-warning">me</span>
                </h5>
                <span className="bg-warning px-3 rounded-pill"></span>
                <p className="pt-4">
                  Passionate web developer with 4+ years of experience in
                  HTML/CSS, Javascript, and Wordpress. Has done certified
                  internships both as web and front-end developer. A
                  detail-oriented, fast learner, and able to complete work on
                  time. Used to work both in a team and individually, also has
                  attended workshops, webinars, and other events off campus.
                </p>
              </div>
            </div>
            <div className="col-md-6 bg-warning text-center h-100 d-flex align-items-center">
              <div className="text-center">
                <img className="w-75 pt-4" src={profile} alt="profile" />
              </div>
            </div>
          </div>
          <div className="row sticky-bottom next-prev p-5">
            <div className="col">
              <Nav className="justify-content-between fw-n">
                {link.map((item) => (
                  <Nav.Link
                    id="nav"
                    className={"btn py-2 px-4 btn-to " + item.class}
                    key={item.name}
                    href={item.href}
                  >
                    <i className={item.icon}></i> {item.name}
                  </Nav.Link>
                ))}
              </Nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
