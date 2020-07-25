import React from "react";
import "./Card.css";

export default function Card({ title, url, icon, body = "Click Me" }) {
  return (
    <div className="card" onClick={() => window.location.assign(url)}>
      <div className="additional">
        <h3>{title}</h3>
        <p>{body}</p>
        <div className="reveal">
          <div className="social-icon">
            <img src={icon} />
          </div>
          <div className="join">
            <h2>Join Now</h2>
          </div>
        </div>
      </div>
      <div className="asdf">
        <div className="social-icon">
          <img src={icon} />
        </div>
      </div>
    </div>
  );
}
