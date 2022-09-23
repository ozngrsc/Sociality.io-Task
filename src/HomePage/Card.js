import React from "react";
import "./Card.css";
import Delete from "../images/delete.png";
import Options from "../images/options.png";
import NoPostImage from "../images/no-post-image.png";
import Likes from "../images/likes.png";
import Comments from "../images/comments.png";
import Shares from "../images/shares.png";
import Views from "../images/views.png";
import InstagramLogo from "../images/Instagram-logo.png";
import FacebookLogo from "../images/Facebook-logo2.png";
import TwitterLogo from "../images/Twitter-logo2.png";

function Card({ data }) {
  const statusColorFormatter = (status) => {
    switch (status) {
      case 2:
        return "#ACACAC";

      case 1:
        return "#3AC183";

      case 0:
        return "#F7BF38";

      case 4:
        return "#FB6450";

      case 5:
        return "#67B1F2";

      default:
        return "#ACACAC";
    }
  };

  const logoChanger = (channel) => {
    switch (channel) {
      case "instagrambusiness":
        return InstagramLogo;

      case "twitter":
        return TwitterLogo;

      case "facebook":
        return FacebookLogo;
      default:
        return InstagramLogo;
    }
  };

  console.log("card", data);
  return (
    <div className="card">
      <div
        className="colorbox"
        style={{
          backgroundColor: `${statusColorFormatter(data.status)}`,
        }}
      >
        <img
          className="colorbox_logo"
          src={logoChanger(data.account.channel)}
          alt=""
        />
      </div>
      <p className="date">{data.created_at}</p>
      <div className="actions">
        <img className="actions_delete" src={Delete} alt="" />
        <img className="actions_options" src={Options} alt="" />
      </div>
      <p className="desc">{data.entry.message}</p>

      {data.entry.image ? (
        <img className="card_image" src={data.entry.image} alt="No Post Img" />
      ) : (
        <img className="card_image" src={NoPostImage} alt="no-post-img" />
      )}

      <div className="reactions">
        <img className="likes" src={Likes} alt="" />
        <p className="likes_number">124</p>
        <img className="comments" src={Comments} alt="" />
        <p className="comments_number">63</p>
        <img className="shares" src={Shares} alt="" />
        <p className="shares_number">4</p>
        <img className="views" src={Views} alt="" />
        <p className="views_number">1.426</p>
      </div>
    </div>
  );
}

export default Card;
