import { Container, Card, Col, Row } from "react-bootstrap";

export default function Projects () {

  return (
    <>
    <Container>
      <h1>Projects</h1>
    <Row className="d-flex justify-content-center g-4">

    <Col sm={10} md={6} lg={4}>
    <Card >
                <div className="hole-card justify-content-center"  >
                  <figure>
                  <Card.Img 
                   onClick={''}
                   fluid src ="" />
                  </figure>
                  <Card.Body>
                  <Card.Text className="text-card mb-0 pb-0">
                  <div className="bottom-half">
                   <h2 className="location mt-3">test</h2>
                    <p className="species">test</p>
                    <p className="size">test</p>               
                </div>
                </Card.Text>
                </Card.Body>
              </div>
              </Card>
              </Col>

              <Col sm={10} md={6} lg={4}>
              <Card >
                <div className="hole-card justify-content-center"  >
                  <figure>
                  <Card.Img 
                   onClick={''}
                   fluid src />
                  </figure>
                  <Card.Body>
                  <Card.Text className="text-card mb-0 pb-0">
                  <div className="bottom-half">
                   <h2 className="location mt-3">test</h2>
                    <p className="species">test</p>
                    <p className="size">test</p>               
                </div>
                </Card.Text>
                </Card.Body>
              </div>
              </Card>


              </Col>
              </Row>
    </Container>
    </>
  )
}