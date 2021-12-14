import { Card } from "react-bootstrap";
import piccuplogo from "../piccup.png";

const PiccupCard = () => {
  return (
    <Card>
      <Card.Header
        className="p-0"
        onClick={() => window.open("https://piccup.herokuapp.com/index.html")}
      >
        <img src={piccuplogo} width="100%" />
      </Card.Header>
      <Card.Body>
        Piccup is a platform to post and RSVP to pick-up sports games in your
        area. Users can post games, create profiles, and join exisiting games.
        It is built with a React frontend and a Google Firebase backend.
      </Card.Body>
    </Card>
  );
};

export default PiccupCard;
