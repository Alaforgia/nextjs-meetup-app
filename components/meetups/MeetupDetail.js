import { Fragment } from "react";
import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    // classes allows us to use same class names across different css module files w/o error, w/ appropriate file import
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;
