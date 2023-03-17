import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function Wordpress() {
  const project = [
    { img: "1", visit: "https://letsgrow.co.id/" },
    { img: "2", visit: "https://tunasbertumbuh.org/" },
  ];
  return (
    <div className="container">
      <div className="row pb-4 pt-5">
        <div className="col-auto">
          <h1 className="w-100 border-bottom border-3 border-warning pb-2">
            WordPress
          </h1>
        </div>
      </div>
      <div className="row pembungkus-project">
        {project.map((item) => (
          <div className="col-lg-3 py-2" key={item.img}>
            <Card className="text-white border-0" id="card">
              <Card.Img
                src={"/images/wp/project" + item.img + ".jpg"}
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
                    Visit
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
