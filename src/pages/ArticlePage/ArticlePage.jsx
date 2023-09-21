// import HomeNav from "../../components/HomeNav/HomeNav";
import arrowIcon from "../../assets/arrow-pointing-down.svg";
import "./ArticlePage.css";
import { useEffect, useState } from "react";
import api from "../../api/api";
import { useParams } from "react-router-dom";

function ArticlePage() {
  const [article, setArticle] = useState();
  const { id } = useParams();

  const getTotalPlaceCount = () => {
    api.get(`/articles/${id}`).then((res) => {
      console.log(res.data[0]);
      setArticle(res.data[0]);
    });
  };

  useEffect(() => {
    getTotalPlaceCount();
  }, []);

  return (
    <div className="main-container">
      {article ? (
        <>
          <div className="ImageAndNav">
            <h3>{article.name}</h3>
            <img
              className="backImg"
              src={article.image_url}
              alt={article.name}
            />
          </div>
          <div className="userAndInfos">
            <h3>{article.description}</h3>
          </div>
          <div className="generalTips">
            <div className="iconAndHeader">
              <img src={arrowIcon} alt="arrow icon" />
              <h4>General Tips</h4>
            </div>
            <div>
              {article.tips.split("- Travel Tip").map((tip, index) =>
                index === 0 ? null : (
                  <div key={index} className="daysAndContents">
                    <div className="iconAndDays">
                      <img src={arrowIcon} alt="arrow icon" />
                      <h4>Tip {index}</h4>
                    </div>
                    <div className="textContent">
                      {/* <h5>The Grewat Wall</h5> */}
                      <p>{tip}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </>
      ) : (
        <h3>Loading..</h3>
      )}
    </div>
  );
}

export default ArticlePage;
