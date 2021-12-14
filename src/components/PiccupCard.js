import { Card } from "react-bootstrap";
import piccuplogo from "../piccup.png";

const PiccupCard = () => {
  return (
    <Card>
      <Card.Header
        className="piccup-card"
        onClick={() => window.open("https://piccup.herokuapp.com/index.html")}
      >
        <img src={piccuplogo} height="100vh" />
      </Card.Header>
      <Card.Body>
        Piccup is a platform to post and RSVP to pick-up sports games in your
        area. Users can post games, create profiles, and join exisiting games.
        It is built with a React frontend and a Google Firebase backend.
      </Card.Body>
      <Card.Footer>
        <a href="https://github.com/jmp929/pear">Visit Github</a>
      </Card.Footer>
    </Card>
  );
};

export default PiccupCard;
