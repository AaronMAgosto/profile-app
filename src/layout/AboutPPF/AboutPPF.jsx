import {Container, Row, Col, Image,Button } from "react-bootstrap";


export default function AboutPPF () {

  return (
    
    <>
    <Container id="about" className="p-5">
    <Row>
      <Col>
        <h2 className="text-center">About <br/> <span> A Journey of Transitions and Adaptation</span></h2>
      </Col>
    </Row>

    <Row className="justify-content-center">
      <Col xs={8} md={6} lg={4} xl={3}>
      <Image fluid src="/images/aboutimg.jpg" 
           className=""
           alt=""/>
      </Col>

      <Col  lg={8}  className="main-summary">
        <p>I grew up in sunny South Florida, where the vibrant environment and warm climate nurtured my love for the outdoors. Spending time amidst nature became an integral part of my upbringing. Interestingly, my roots are deeply intertwined with the construction industry, particularly as an electrician. However, one day, I stumbled upon the captivating world of software engineering, and it sparked an insatiable curiosity within me. The more I explored this fascinating field, the stronger my desire to learn and dive deeper into its intricacies grew.</p>
        <p>Driven by my newfound passion, I took a significant leap and joined Boca Code, a renowned school that cultivates aspiring software engineers. The experience was transformative, and I recently celebrated my graduation from the program. As a newly graduate, I now find myself in an exhilarating position—interning at Boca Code. It is a thrilling opportunity that allows me to apply and expand my knowledge in practical settings. With each passing day, I am fueled by the prospect of taking on new challenges and embracing emerging technologies.</p>        
        <p>Looking forward, my focus is set on exploring cutting-edge domains that push the boundaries of innovation. I have developed a keen interest in delving into the realms of artificial intelligence (AI), Web3, and blockchain. These areas hold tremendous potential and are poised to redefine numerous industries. As I embark on this journey, I am determined to contribute to their growth and evolution. By bringing a fresh perspective and challenging conventional thinking, I aspire to make meaningful contributions that shape the future landscape of technology.</p>
      </Col>
    </Row>

    <Row>        
      <Col className="text-center">
        <a href="https://www.linkedin.com/in/aaronagosto/"
        target="_blank"
        rel="noreferrer"
        className="button-effect">
          <Button>Connect on Linkedin</Button>
        </a>
      </Col>
    </Row>
  </Container>
  </>
  )
}