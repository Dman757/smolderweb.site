import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./MainPage.css";
import Card from "./Card";

export default function MainPage() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="Main">
      <div className="Reddit">
        {/* <p>asdf</p>
        <div className="ColumnGroup">
          <p>asdf</p>
          <p>asdf</p>
        </div>
        <p>asdf</p> */}
        <Card title="Reddit" />
      </div>
      <div className="Discord">
        <Card title="Discord" />
      </div>
      <div className="WowForums">
        <Card title="Wow Forums" />
      </div>
    </div>
  );
}

export function AnotherPage() {
  return (
    <div className="App">
      <p>Sup</p>
      <iframe
        src="https://discordapp.com/widget?id=211900829307895819&theme=dark"
        width="350"
        height="500"
        allowtransparency="true"
        frameborder="0"
      ></iframe>
    </div>
  );
}
