import { Nav } from "react-bootstrap";
import Wordpress from "./Projects/Wordpress";
import React from "./Projects/ReactJS";
import Template from "./Projects/Template";

import PreLoader from "./PreLoader";

export default function Project() {
  const link = [
    {
      icon: "bi bi-arrow-left-circle pe-2 ",
      name: "About ",
      href: "/about",
    },
    {
      icon: "bi bi-arrow-right-circle pe-2 ",
      name: "Skill ",
      href: "/skill",
    },
  ];
  return (
    <>
      <PreLoader />
      <div id="content">
        <div className="container-fluid pt-5 overflow-auto h-100">
          <div className="row">
            <div className="col text-center">
              <h5 className="fw-bold display-4 text-center">
                My <span className="text-warning">Project</span>
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Wordpress />
              <React />
              <Template />
            </div>
          </div>
          <div className="row p-5 next-prev">
            <div className="col">
              <Nav className="justify-content-between fw-n">
                {link.map((item) => (
                  <Nav.Link
                    id="nav"
                    className="btn py-2 fw-n px-4 btn-to btn-warning text-white"
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
