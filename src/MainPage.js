import React, { useEffect } from "react";
import logo from "./logo.svg";
// import "./App.css";
import "./MainPage.css";
import Card from "./Card";
import NavBar from "./NavBar";
export default function MainPage() {
  // TODO A dark/light mode toggle but it's HORDE/ALLIANCE

  useEffect(async () => {
    const redditData = await fetch(
      "https://www.reddit.com/r/Smolderweb/about.json"
    );
    const forumData = await fetch(
      "https://us.forums.blizzard.com/en/wow/c/smolderweb/230/l/latest.json"
    );
    const discordData = await fetch(
      "https://discordapp.com/api/guilds/98368024687673444/widget.json"
    );

    console.log(discordData);
  }, []);

  return (
    <>
      {/* <h1>SMOLDERWEB.SITE</h1>
      <h2>
      Welcome to the unofficial website for the WoW Classic server Smolderweb
    </h2> */}

      <div className="Main">
        <NavBar />
        <div className="Reddit">
          <Card title="Reddit" url="https://www.reddit.com/r/Smolderweb/" />
        </div>
        <div className="Discord">
          <Card title="Discord" url="https://discord.com/invite/gaGYyVz" />
        </div>
        <div className="WowForums">
          <Card
            title="Forums"
            url="https://us.forums.blizzard.com/en/wow/c/smolderweb"
          />
        </div>
      </div>
    </>
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

// Subreddit api https://www.reddit.com/r/Smolderweb/about.json
// discord widget https://discordapp.com/api/guilds/98368024687673444/widget.json
// fourms sniffing https://us.forums.blizzard.com/en/wow/c/smolderweb/230/l/latest.json
