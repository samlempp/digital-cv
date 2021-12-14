import { Card, Container, Button, Col, Row } from "react-bootstrap";
import "../index.css";
import piccuplogo from "../piccup.png";
import PearCard from "./PearCard";
import PiccupCard from "./PiccupCard";

const Home = () => {
  return (
    <div className="pt-5 bg-light" height="100%">
      <Container>
        <Card className="p-5">
          <h2>
            My name is Sam Lempp. I am a{" "}
            <span className="text-primary">full-stack developer</span> with
            experience in{" "}
            <span className="text-success">
              JavaScript, TypeScript, Java, Python, C, and SQL.{" "}
            </span>
            I have experience with frameworks such as{" "}
            <span className="text-danger">Django and React. </span>
            This website is built entirely in React using the{" "}
            <span className="text-warning">Bootstrap </span>
            css framework
          </h2>
          <Container className="p-3 pb-5">
            <Button className="btn fs-4" href="mailto:slempp@live.unc.edu">
              Contact Me
            </Button>
          </Container>
          <h3 className="fw-bold mb-5">Featured Work</h3>
          <Row>
            <Col className="mb-5">
              <PearCard />
            </Col>
            <Col>
              <PiccupCard />
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Home;
