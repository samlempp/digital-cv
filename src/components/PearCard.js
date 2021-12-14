import { Card } from "react-bootstrap";
import pearlogo from "../pear logo.svg";

const PearCard = () => {
  return (
    <Card bg="dark" text="light">
      <Card.Header
        className="pear-card"
        onClick={() =>
          window.open("http://pear-git-slempp.apps.cloudapps.unc.edu/")
        }
      >
        <h1
          className="display-6"
          style={{
            margin: "auto",
            verticalAlign: "middle",
            alignContent: "center",
          }}
        >
          <img src={pearlogo} alt="Pear Logo" height="50vh" width="auto" /> Pear
        </h1>
      </Card.Header>
      <Card.Body>
        Pear is a full-stack web app built using React and Django with a
        PostgreSQL database. It allows researchers using the academic survey
        tool Qualtrics to access key-value pairs in databases and return them to
        survey takers in real time.
      </Card.Body>
      <Card.Footer>
        <a href="https://github.com/jmp929/pear">Visit Github</a>
      </Card.Footer>
    </Card>
  );
};

export default PearCard;
