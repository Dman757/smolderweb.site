import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
// import "./App.css";
import "./MainPage.css";
import Card from "./Card";
import NavBar from "./NavBar";
import redditIcon from "./assets/reddit_border.png";
import discordIcon from "./assets/discord_svg.svg";
import wowIcon from "./assets/wow.png";
export default function MainPage() {
  // TODO A dark/light mode toggle but it's HORDE/ALLIANCE

  const [redditData, setRedditData] = useState(null);
  const [forumData, setForumData] = useState(null);
  const [discordData, setDiscordData] = useState(null);

  async function fetchData() {
    const redditData = fetch("https://www.reddit.com/r/Smolderweb/about.json");
    // const forumData = fetch(
    //   "https://us.forums.blizzard.com/en/wow/c/smolderweb/230/l/latest.json"
    // );
    const discordData = fetch(
      "https://discordapp.com/api/guilds/698368024687673444/widget.json"
    );

    try {
      const fetched = await Promise.allSettled([
        redditData,
        // forumData,
        discordData,
      ]);
      // console.log("discord", discordData);
      // console.log("reddit", redditData);
      // console.log("wow", forumData);
      const reddit = await fetched[0].value.json();
      const discord = await fetched[1].value.json();

      setRedditData(reddit.data.subscribers);
      console.log(reddit.data.subscribers);

      setDiscordData(discord.presence_count);
      console.log(discord.presence_count);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="Main">
        <NavBar />
        <div className="Reddit">
          <Card
            title="Reddit"
            url="https://www.reddit.com/r/Smolderweb/"
            icon={redditIcon}
            body={`There's currently ${redditData} people subscribed to the Smolderweb Subreddit`}
          />
        </div>
        <div className="Discord">
          <Card
            title="Discord"
            url="https://discord.com/invite/gaGYyVz"
            icon={discordIcon}
            body={`There's currently ${discordData} people online in the Smolderweb Discord`}
          />
        </div>
        <div className="WowForums">
          <Card
            title="Forums"
            url="https://us.forums.blizzard.com/en/wow/c/smolderweb"
            icon={wowIcon}
            body={"Official WoW forums for Smolderweb"}
          />
        </div>
      </div>
    </>
  );
}

// Subreddit api https://www.reddit.com/r/Smolderweb/about.json
// discord widget https://discordapp.com/api/guilds/98368024687673444/widget.json
// fourms sniffing https://us.forums.blizzard.com/en/wow/c/smolderweb/230/l/latest.json
// https://classic.wowhead.com/search?q= //search wowhead
