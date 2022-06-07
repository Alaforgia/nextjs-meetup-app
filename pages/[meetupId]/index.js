import { Fragment } from "react";

function MeetupDetails() {
  return (
    <Fragment>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg"
        alt="A First Meetup"
      />
      <h1>A First Meetup</h1>
      <address>Some Street</address>
      <p>The meetup description</p>
    </Fragment>
  );
}

export default MeetupDetails;
