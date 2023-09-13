// import ellipse1 from "../../assets/ellipse 1.svg";

import saveButton from "../../assets/save-button.svg";
import "./ArticleCard.css";

function ArticleCard({ article }) {
  return (
    <>
      <div className="articleContainer">
        <div className="eachCard">
          <div className="articleImage">
            <img src={article.image_url} alt="Destination Image" />
          </div>
          <div className="articleContentAndCreator">
            <div className="articleText">
              <h5>{article.name}</h5>
              <p>{article.description}</p>
            </div>
            <div className="articleCreatorAndSaveButton">
              <img src={saveButton} alt="" className="saveButton" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ArticleCard;
