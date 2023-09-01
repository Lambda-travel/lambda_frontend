import "./ArticleCard.css";
// import ellipse1 from "../../assets/ellipse 1.svg";
import saveButton from "../../assets/save-button.svg";
import { useState, useEffect } from "react";
import api from "../../api/api";

function ArticleCard() {
  const [articles, setArticles] = useState([]);

  const getArticles = (data) => {

    api
      .get("/articles", data)
      .then((response) => setArticles(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getArticles();
  }, []);
  console.log(articles);
  return (
    <div className="articleContainer">
      {articles.map((article) => (
        <div key={article.id}>
          <div className="articleImage">
            <img src={article.image_url} alt="Destination Image" />
            {/* <Button text="Guide" className="guideButton" /> */}
            {/* <div className="guide">Guide</div> */}
          </div>
          <div className="articleContentAndCreator">
            <div className="articleText">
              <h5>{article.name}</h5>
              <p>{article.description}</p>
            </div>
            <div className="articleCreatorAndSaveButton">
              {/* <div className="articleCreator">
                <img src={ellipse1} alt="" />
                <p>Marc</p>
              </div> */}
              <img src={saveButton} alt="" className="saveButton" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ArticleCard;
