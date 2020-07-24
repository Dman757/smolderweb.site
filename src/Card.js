import React from "react";
import "./Card.css";

export default function Card({ title, url, body = <p>Click Me</p> }) {
  return (
    <div className="card" onClick={() => window.location.assign(url)}>
      <div className="additional">
        <h3>{title}</h3>
        <p>{body}</p>
        <p className="reveal">Join Now</p>
      </div>
      <div className="asdf">{body}</div>
    </div>
  );
}
