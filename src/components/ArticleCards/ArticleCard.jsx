import "./ArticleCard.css";
import ellipse1 from "../../assets/ellipse 1.svg";
import saveButton from "../../assets/save-button.svg";

function ArticleCard() {
  return (
    <div className="articleContainer">
      <div className="articleImage">
        <img src="" alt="" />
        {/* <Button text="Guide" className="guideButton" /> */}
        <div className="guide">Guide</div>
      </div>
      <div className="articleContentAndCreator">
        <div className="articleText">
          <h5>Trip to The Great Wall of China - Guide</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a dui
            et velit rhoncus commodo. Donec vestibulum condimentum leo ac
            mattis.
          </p>
        </div>
        <div className="articleCreatorAndSaveButton">
          <div className="articleCreator">
            <img src={ellipse1} alt="" />
            <p>Marc</p>
          </div>
          <img src={saveButton} alt="" className="saveButton" />
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
