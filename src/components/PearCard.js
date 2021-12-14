import { Card } from "react-bootstrap";
import pearlogo from "../pear logo.svg";

const PearCard = () => {
  return (
    <Card>
      <Card.Header
        className="pear-card p-4"
        onClick={() =>
          window.open("http://pear-git-slempp.apps.cloudapps.unc.edu/")
        }
      >
        <h1 className="display-1">
          <img src={pearlogo} alt="Pear Logo" width="100" height="100" /> Pear
        </h1>
      </Card.Header>
      <Card.Body>
        Pear is a full-stack web app built using React and Django with a
        PostgreSQL database. It allows researchers using the academic survey
        tool Qualtrics to access key-value pairs in databases and return them to
        survey takers in real time.
      </Card.Body>
    </Card>
  );
};

export default PearCard;
