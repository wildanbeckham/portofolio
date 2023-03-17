import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import Nav from "react-bootstrap/Nav";

import PreLoader from "./PreLoader";

export default function Skill() {
  const link = [
    {
      icon: "bi bi-arrow-left-circle pe-2 ",
      name: "Project ",
      href: "/project",
      class: "text-start",
    },
    {
      icon: "bi bi-arrow-right-circle pe-2 ",
      name: "Contact ",
      href: "/contact",
      class: "text-end",
    },
  ];

  return (
    <>
      <PreLoader />
      <section id="content">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col h-100 d-flex align-items-center">
              <div className="mx-auto">
                <TagCloud
                  options={(
                    w: Window & typeof globalThis
                  ): TagCloudOptions => ({
                    radius: Math.min(w.innerWidth, w.innerHeight) / 2,
                    maxSpeed: "fast",
                  })}
                  onClick={(tag: string, ev: MouseEvent) => alert(tag)}
                  onClickOptions={{ passive: true }}
                  className="fw-n"
                >
                  {[
                    "VSCode",
                    "*",
                    "*",
                    "HTML 5",
                    "*",
                    "*",
                    "CSS 3",
                    "*",
                    "*",
                    "Javascript",
                    "*",
                    "*",
                    "ReactJS",
                    "*",
                    "*",
                    "NextJS",
                    "*",
                    "*",
                    "Wordpress",
                    "*",
                    "*",
                    "Bootstrap",
                    "*",
                    "*",
                    "Git",
                    "*",
                    "*",
                    "SASS",
                    "*",
                    "*",
                    "Microsoft Office",
                  ]}
                </TagCloud>
              </div>
            </div>
          </div>
          <div className="row sticky-bottom next-prev p-5">
            <div className="col">
              <Nav className="justify-content-between fw-n">
                {link.map((item) => (
                  <Nav.Link
                    id="nav"
                    className={
                      "btn py-2 px-4 btn-to bg-warning text-white " + item.class
                    }
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
      </section>
    </>
  );
}
