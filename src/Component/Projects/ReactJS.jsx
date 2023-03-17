import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function ReactJS() {
  const project = [
    { img: "1", visit: "https://github.com/wildanbeckham/portofolio" },
    { img: "2", visit: "https://github.com/wildanbeckham/moonton1" },
  ];
  return (
    <div className="container">
      <div className="row pt-5 pb-4">
        <div className="col-auto">
          <h1 className="w-100 border-bottom border-3 border-warning pb-2">
            ReactJS
          </h1>
        </div>
      </div>
      <div className="row pembungkus-project">
        {project.map((item) => (
          <div className="col-lg-3 py-2" key={item.img}>
            <Card className="text-white border-0" id="card">
              <Card.Img
                src={"/images/react/project" + item.img + ".png"}
                className="img-overlay border border-dark border-4"
                alt="Card image"
              />
              <Card.ImgOverlay className="overlay d-none border border-dark border-4">
                <div className="h-100 d-flex align-items-center justify-content-center">
                  <Link
                    className="btn btn-warning mx-3 text-white shadow px-3 link"
                    to={item.visit}
                    target="_blank"
                  >
                    Source Code
                  </Link>
                </div>
              </Card.ImgOverlay>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
