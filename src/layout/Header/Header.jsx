import { useState, useContext } from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Row, Col, Button } from "react-bootstrap";
import {Pannellum} from 'pannellum-react';
// import bg2 from "./background/pen__ink_inside_a_brickstone_library_tall_stacks.jpg";
import bg360 from "../../data/bg360.json";

export default function Page4() {
  const [easter360Id, setEaster360Id] = useState(0);

  const bgUri = "./background/" + bg360[easter360Id].image;

  const handle360Id = () => {
    if (easter360Id === bg360.length - 1) {
      setEaster360Id(0);
    } else {
      setEaster360Id(easter360Id + 1);
    }
  };

  return (
    <main>
      <div className="media-container">
        <div className="media-wrapper">
          <Pannellum
            width="100%"
            height="100%"
            image={require(`${bgUri}`)}
            yaw={180}
            hfov={110}
            autoLoad
            autoRotate={true}
            compass={false}
            showZoomCtrl={false}
            showFullscreenCtrl={false}
            mouseZoom={false}
          />
        </div>

        <Container fluid id="intro">
          <Row
            className="gradient-box d-flex 
            justify-content-center
            justify-content-lg-start
            align-items-center"
          >
            <Col
              xs={11}
              md={{ span: 8, offset: 0 }}
              lg={{ span: 5, offset: 5 }}
              className="media-content-column"
            >
              <div className="media-content">
                <h1 className="text-center text-lg-start">
                  <span className="header-intro">Sup Bud! I'm Aaron Agosto</span >
                </h1>
                <p className="header-intro">
                 Born and raised in the beautiful region of South Florida. Currently, I work as a software engineer, specializing in technologies such as React.js, AWS, and JavaScript. I have a passion for troubleshooting and finding solutions to complex problems. When I'm not immersed in coding, you'll often find me indulging in my other hobbies like watching sports or enjoying the tranquility of fishing.
                    <br/>
                Let me know if there's anything else I can help you with!
                </p>

                <div className="text-center text-md-center text-lg-start">
                    <Button
                      as={HashLink}
                      to="/#portfolio"
                      size="lg"
                      variant="danger"
                      className="equal-size d-block d-lg-inline m-auto button-style button-effect"
                    >
                      getPortfolio
                    </Button>

                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}
