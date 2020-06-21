import React from "react";
import "./Card.css";

export default function Card({ title }) {
  return (
    <div className="card">
      <div className="additional">
        <h3>{title}</h3>
      </div>
    </div>
  );
}
