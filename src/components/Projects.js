import { Card, Container, Button, Col, Row } from "react-bootstrap";
import "../index.css";
import PearCard from "./PearCard";
import PiccupCard from "./PiccupCard";

const Projects = () => {
  return (
    <div className="pt-5 bg-light" style={{ minHeight: "100vh" }}>
      <Container>
        <Card className="p-5">
          <Row>
            <Col>
              <PearCard />
            </Col>
            <Col>
              <PiccupCard />
            </Col>
            <Col></Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Projects;
