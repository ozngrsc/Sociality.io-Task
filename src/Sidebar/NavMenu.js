import React from "react";
import "./NavMenu.css";
import { ReactComponent as Icon1 } from "../images/Icon1.svg";
import { ReactComponent as Icon2 } from "../images/Icon2.svg";
import { ReactComponent as Icon3 } from "../images/Icon3.svg";
import { ReactComponent as Icon4 } from "../images/Icon4.svg";
import { ReactComponent as Icon5 } from "../images/Icon5.svg";
import { ReactComponent as Icon6 } from "../images/Icon6.svg";

function NavMenu() {
  return (
    <div className="nav_menu">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <div className="notifications">
                <Icon1 className="nav_icon" />
                NOTIFICATIONS
                <p className="notifications_value">29</p>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body"> ● Lorem Ipsum </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <Icon2 className="nav_icon" />
              SUMMARY
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body"> ● Lorem Ipsum </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <Icon3 className="nav_icon" />
              PUBLISH
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              ● Compose <br /> <br /> ● Feed
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              <Icon4 className="nav_icon" />
              ENGAGE
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body"> ● Lorem Ipsum </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              <Icon5 className="nav_icon" />
              LISTEN
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFive"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body"> ● Lorem Ipsum </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
              <Icon6 className="nav_icon" />
              REPORT
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingSix"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body"> ● Lorem Ipsum </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
