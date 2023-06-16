import { Container, Row, Col } from "react-bootstrap"

export default function Characteristics () {

  return (
    <>
     <section id="characteristics">
     <Container className="my-5">
    <Row>
        <Col><h2 className="card-title text-center">Characteristics for Success</h2></Col>
      </Row>

      <Row>

        <Col>
        <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
        <img className="" src="" alt="" />

            <p class="title">Problem-solving skills</p>
            <p>"It's not a bug, its a Feature"</p>
        </div>
        <div class="flip-card-back">
            <h2 class="title">Trouble shoot your way to freedom</h2>
            
            <p>
            Software engineers encounter complex problems regularly and need strong problem-solving abilities to analyze, break down, and develop effective solutions. They must possess a logical and analytical mindset, be able to think critically, and approach challenges with creativity and resourcefulness. Problem-solving skills enable software engineers to identify the root causes of issues, devise efficient algorithms, and develop robust software solutions
            </p>
        </div>
    </div>
</div>
        </Col>

        <Col>
        <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
        <img className="" src="" alt="" />
            <p class="title">Continual learning and adaptability</p>
            <p>Improvise, Adapt, Overcome.</p>
        </div>
        <div class="flip-card-back">
            <h2 class="title">Use it or Lose it</h2>
            <p>
            The field of software engineering is constantly evolving, with new technologies, frameworks, and programming languages emerging regularly. Successful software engineers embrace a growth mindset and possess a strong desire to learn and adapt. They stay updated with industry trends, seek out new knowledge, and are comfortable stepping outside their comfort zones. Adapting to change is crucial for software engineers to keep their skills relevant and effectively navigate the evolving landscape of technology.
            </p>
        </div>
    </div>
</div>
        </Col>

        <Col><div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
        <img className="" src="" alt="" />
            <p class="title">Effective communication and collaboration</p>
            <p>Teamwork makes the Dream Work</p>
        </div>
        <div class="flip-card-back">
            <p class="title">This is a Team Sport</p>
            <p>
            Software engineering is rarely a solitary endeavor. Collaboration and effective communication are vital for success in team-based projects. Software engineers must be able to communicate their ideas, listen actively, and articulate technical concepts to both technical and non-technical stakeholders. They should work well with others, respect diverse perspectives, and contribute positively to team dynamics. Effective communication and collaboration enable software engineers to work seamlessly in cross-functional teams, share knowledge, and collectively deliver high-quality software solutions.
            </p>
        </div>
    </div>
</div>
        </Col>

      </Row>
    </Container>
    </section>
    </>
  )
}