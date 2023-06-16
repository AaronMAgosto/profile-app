import { Col, Container, Row, Carousel, Image } from "react-bootstrap";

export default function Certs () {

      return(
        <section id="skills">
            <Container className="carousel-container">
                <Row>
                    <Col sm={12} className="p-0 ">
                    <Carousel fade>
                        <Carousel.Item>
                          <div className="carousel-image-container">
                            <Image fluid src="/certimages/aws-cert-prep1.jpg"
                            className="cert  w-50"
                            alt="slide 1"
                            />
                            </div>
                             
                        </Carousel.Item>

                        <Carousel.Item>
                        <div className="carousel-image-container">
                            <Image fluid src="/certimages/figma-for-ux-cert.jpg"
                            className="cert w-50"
                            alt="slide 1"
                            />
                             </div>
                        </Carousel.Item>


                        <Carousel.Item>
                        <div className="carousel-image-container">
                            <Image fluid src="/certimages/how-to-plan.jpg"
                            className="cert  w-50"
                            alt="slide 1"
                            />
                             </div>
                        </Carousel.Item>

                        <Carousel.Item>
                        <div className="carousel-image-container">
                            <Image fluid src="/certimages/user-expo-cert.jpg"
                            className="cert  w-50"
                            alt="slide 1"
                           />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}
