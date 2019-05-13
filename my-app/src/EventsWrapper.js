import React from "react";

import EventListItem from "./EventListItem";

const EventsWrapper = props => {
  if (props.allEvents.length) {
    return (
      <div className={props.className}>
      <h2>{props.title}</h2>
      <ul>
        {props.allEvents.map(event => {
          return <EventListItem key={event.id} eventInfo={event}/>;
        })}
      </ul>
      </div>
    )
  } else {
    return (
      <div className={props.className}>
      <h2>{props.title}</h2>
      <p>There are no {props.title} for this user </p>
      </div>
    )
  }
};

export default EventsWrapper;