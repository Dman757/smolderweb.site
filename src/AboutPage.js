import React from "react";

import construction from "./assets/construction_sign.jpg";
import "./AboutPage.css";

import NavBar from "./NavBar";
export default function AboutPage() {
  return (
    <div className="about-layout">
      <NavBar />
      <div className="about-text">
        <h1>About</h1>
        <p>
          Hey there, <b>{`<Undisputed> Magé`}</b> here, welcome to the
          "unofficial" website for the WoW classic server Smolderweb. This site
          is a "for fun project" and perpetually work in progress. I wanted to
          make this to help bridge the various community resources together.{" "}
          <br />
          <br />I don't really have a project road map but here's a few things
          I'd like to do if I get around to it:
        </p>
        <ul>
          <li>Collab with smolderweb enquirer somehow...?</li>
          <li>
            Integrate with smolderweb discord to display announcements or
            something idk
          </li>
          <li>
            Open up my github repo for PR's if anyone else would like to help on
            this site.
          </li>
        </ul>
      </div>
      <div>
        <img
          className="construction-image"
          src={construction}
          alt="construction sign"
        />
      </div>
      <div className="about-text">
        <p>
          {`Site made by `}
          <a href="https://classic.warcraftlogs.com/character/us/smolderweb/mag%C3%A9">
            Magé
          </a>
        </p>
        <p>
          Suggestions welcome, message me in the smolderweb discord or in game
          mail. If you would like to support this site, in game donations are
          always welcome.
        </p>
      </div>
    </div>
  );
}
