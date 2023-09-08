import "./ArticleCard.css";
// import ellipse1 from "../../assets/ellipse 1.svg";
import { useInView } from "react-intersection-observer";
import saveButton from "../../assets/save-button.svg";
import { useState, useEffect } from "react";
import api from "../../api/api";

function ArticleCard() {
  const { ref: myRef, inView: scrollState } = useInView();
  const [articles, setArticles] = useState([]);

  const getArticles = (data) => {
    api
      .get("/articles", data)
      .then((response) => setArticles(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getArticles();

    // console.log(myRef.current);
  }, []);

  return (
    <>
      <div className="articleContainer">
        {articles.map((article) => (
          <div
            key={article.id}
            className={`eachCard ${scrollState ? "animateDiv" : ""}`}
            ref={myRef}
          >
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
        ))}
      </div>
    </>
  );
}
export default ArticleCard;
