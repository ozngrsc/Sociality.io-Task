import React from "react";
import "./HomePage.css";
import data from "../data.json";
import Color1 from "../images/Color1.png";
import Color2 from "../images/Color2.png";
import Color3 from "../images/Color3.png";
import Color4 from "../images/Color4.png";
import Color5 from "../images/Color5.png";
import Profile from "../images/Profile.png";
import Card from "./Card";
function HomePage() {
  console.log(data.posts_by_date["2021-07-01"]);
  console.log("object entries", Object.entries(data.posts_by_date));
  return (
    <div className="home_page">
      <div className="descriptions">
        <div className="desc_status">
          <img src={Color1} alt="" />
          <p>Published</p>
        </div>
        <div className="desc_status">
          <img src={Color2} alt="" />
          <p>Scheduled</p>
        </div>
        <div className="desc_status">
          <img src={Color3} alt="" />
          <p>Need Approval</p>
        </div>
        <div className="desc_status">
          <img src={Color4} alt="" />
          <p>Error</p>
        </div>
        <div className="desc_status">
          <img src={Color5} alt="" />
          <p>Notes</p>
        </div>
      </div>
      <div className="profile_pic">
        <img src={Profile} alt="" />
      </div>
      <div className="card_top">
        {data.posts_by_date["2021-07-01"].map((group, i) => {
          console.log("group", group);
          return <Card data={group} key={i} />;
        })}
      </div>

      <div className="card_middle">
        {data.posts_by_date["2021-06-17"].map((group, i) => {
          console.log("group", group);
          return <Card data={group} key={i} />;
        })}
      </div>
      <div className="card_bottom">
        {data.posts_by_date["2021-07-01"].map((group, i) => {
          console.log("group", group);
          return <Card data={group} key={i} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
