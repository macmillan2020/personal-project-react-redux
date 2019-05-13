import React from "react";

const EventListItem = props => {
  return (
    <li key="{props.eventInfo.id}">
     	<a href={props.eventInfo.url} className={props.eventInfo.type}>{props.eventInfo.title}</a>
    </li>
  );
};

export default EventListItem;