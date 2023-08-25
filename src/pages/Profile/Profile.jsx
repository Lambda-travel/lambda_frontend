import React from "react";
import profile from "./Profile.css";
import avatar from "../../../public/Avatar.svg";
import ellipse1 from "../../../public/Ellipse 2.svg";
import ellipse2 from "../../../public/Ellipse 3.svg";
import editIcon from "../../../public/Group 1689.svg";
import tripImage from "../../../public/Rectangle 705.png";

import { AiOutlineHome } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";

import { FaRegUser, FaChevronLeft } from "react-icons/fa";

function Profile() {
  return (
    <div className="bigContainer">
      <nav className="homeButton">
        <ul>
          <li>
            <FaChevronLeft />
            Home
          </li>
        </ul>
      </nav>
      <div className="container">
        <div className="profileInfo">
          <div className="profileImage">
            <img src={avatar} alt="" />
            <img src={editIcon} alt="" className="editIcon" />
          </div>
          <div className="profileInfo">
            <h1 className="profileName">Kiera Watson</h1>
            <p className="userName">@kierawatson</p>
          </div>
        </div>
        <div className="tripsAndGuidesContainer">
          <div className="tripsPlusGuides">
            <div className="tripPlans">Trip plans</div>
            <div className="guides">Guides</div>
          </div>
          <div className="bottomLine"></div>

          <div className="tripPlansContent">
            <div className="tripsImagesLocation">
              <img src={tripImage} alt="trip image" className="tripImage" />
              <div>
                <h3>Trip to indonesia</h3>
                <div className="tripDateAndMates">
                  <img
                    src={ellipse1}
                    alt="mates"
                    className="travelMate1 mates"
                  />
                  <img
                    src={ellipse2}
                    alt="mates"
                    className="travelMate2 mates"
                  />
                  <p>Aug 26-28,2022-11 Places</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navmenu">
          <AiOutlineHome />
          <GrAdd />
          <FaRegUser />
        </div>
      </div>
    </div>
  );
}

export default Profile;
