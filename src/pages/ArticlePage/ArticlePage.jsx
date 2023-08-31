import HomeNav from "../../components/HomeNav/HomeNav";
import "./ArticlePage.css";
import elliseIcon from "../../assets/ellipse 1.svg";
import arrowIcon from "../../assets/arrow-pointing-down.svg";
function ArticlePage() {
  return (
    <div>
      <div className="ImageAndNav">
        <HomeNav customClassName="homeButt" />

        <h3>Trip to the Great wall of china</h3>
      </div>
      <div className="userAndInfos">
        <div className="userAvatarAndName">
          <img src={elliseIcon} alt="" />
          <p>Marc</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a dui et
          velit rhoncus commodo. Donec vestibulum{" "}
        </p>
      </div>
      <div className="generalTips">
        <div className="iconAndHeader">
          <img src={arrowIcon} alt="arrow icon" />
          <h4>General Tips</h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a dui
          etvelit rhoncus commodo. Donec vestibulum condimentum leo ac mattis.
        </p>
      </div>
      <div className="daysAndContents">
        <div className="iconAndDays">
          <img src={arrowIcon} alt="arrow icon" />
          <h4>Day 1</h4>
        </div>
        <div className="textContent">
          <h5>The Grewat Wall</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a dui
            et velit rhoncus commodo. Donec vestibulum condimentum leo ac
            mattis.
          </p>
          <p>
            <span>View Details</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
