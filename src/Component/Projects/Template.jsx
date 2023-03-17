import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function Template() {
  const project = [
    {
      img: "project1",
      visit: "https://musing-ramanujan-360cad.netlify.app/",
    },
    {
      img: "project2",
      visit: "https://gallant-lamarr-c55df4.netlify.app/",
      src: "https://github.com/wildanbeckham/yukakad",
    },
    {
      img: "project3",
      visit: "https://brave-fermi-7169c7.netlify.app/",
      src: "https://github.com/wildanbeckham/SIPENA",
    },
    {
      img: "project4",
      visit: "https://musing-mahavira-34def4.netlify.app/",
      src: "https://github.com/wildanbeckham/wigmanStudio",
    },
    {
      img: "project5",
      visit: "https://elated-hypatia-60d9d9.netlify.app/",
      src: "https://github.com/wildanbeckham/beliayam.com",
    },
    {
      img: "project6",
      visit: "https://sleepy-engelbart-fcdf49.netlify.app/",
      src: "https://github.com/wildanbeckham/atigamall.com",
    },
    {
      img: "project7",
      visit: "https://chic-sunflower-523090.netlify.app/",
      src: "https://github.com/wildanbeckham/undangan",
    },
    {
      img: "project8",
      visit: "https://extraordinary-cassata-b70537.netlify.app/",
      src: "https://github.com/wildanbeckham/sosial.net",
    },
    {
      img: "project9",
      visit: "https://bwawildan.netlify.app/",
      src: "https://github.com/wildanbeckham/bwawd",
    },
    {
      img: "project10",
      visit: "https://hilarious-travesseiro-68a01b.netlify.app/",
      sr: "https://github.com/wildanbeckham/e-commerce,",
    },
    {
      img: "project11",
      visit: "https://cvgalangmediabuana.netlify.app/",
      sr: "https://github.com/wildanbeckham/compro-buana",
    },
  ];
  return (
    <div className="container">
      <div className="row pt-5 pb-4">
        <div className="col-auto">
          <h1 className="w-100 border-bottom border-3 border-warning pb-2">
            Template
          </h1>
        </div>
      </div>
      <div className="row pembungkus-project">
        {project.map((item) => (
          <div className="col-lg-3 py-2" key={item.img}>
            <Card className="text-white border-0" id="card">
              <Card.Img
                src={"/images/template/" + item.img + ".png"}
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
                  <Link
                    className="btn btn-warning mx-3 text-white shadow px-3 link"
                    to={item.src}
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
