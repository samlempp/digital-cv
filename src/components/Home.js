import { Card, Container, Button, Col, Row } from "react-bootstrap";
import "../index.css";
import piccuplogo from "../piccup.png";
import PearCard from "./PearCard";
import PiccupCard from "./PiccupCard";

const Home = () => {
  return (
    <div className="pt-5 bg-dark text-light" height="100%">
      <Container>
        <Card className="p-5 bg-black">
          <h3>
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
          </h3>
          <Container className="p-3 pb-5 d-flex justify-content-center">
            <Button
              className="fs-4 p-2"
              variant="outline-light"
              href="mailto:slempp@live.unc.edu"
            >
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
