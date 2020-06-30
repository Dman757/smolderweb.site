import React from "react";
import "./Card.css";

export default function Card({ title, url }) {
  return (
    <div className="card" onClick={() => window.location.assign(url)}>
      <div className="additional">
        <h3>{title}</h3>
      </div>
      <div className="asdf">
        <p>Sup</p>
      </div>
    </div>
  );
}
