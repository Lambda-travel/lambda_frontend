// import HomeNav from "../../components/HomeNav/HomeNav";
import elliseIcon from "../../assets/ellipse 1.svg";
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
      setArticle(res.data[0]);
    });
  };

  useEffect(() => {
    getTotalPlaceCount();
  }, []);

  return (
    <div>
      {article ? (
        <>
          <div className="ImageAndNav">
            {/* <div className="navCover">
              <HomeNav new_style_home="new_header_home" />
            </div> */}
            <h3>{article.name}</h3>
            <img
              className="backImg"
              src={article.image_url}
              alt={article.name}
            />
          </div>
          <div className="userAndInfos">
            <div className="userAvatarAndName">
              <img src={elliseIcon} alt="" />
              <p>Marc</p>
            </div>
            <p>{article.description}</p>
          </div>
          <div className="generalTips">
            <div className="iconAndHeader">
              <img src={arrowIcon} alt="arrow icon" />
              <h4>General Tips</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a dui
              etvelit rhoncus commodo. Donec vestibulum condimentum leo ac
              mattis.
            </p>
          </div>
          <div className="daysAndContents">
            <div className="iconAndDays">
              <img src={arrowIcon} alt="arrow icon" />
              <h4>Day 1</h4>
            </div>
            <div className="textContent">
              {/* <h5>The Grewat Wall</h5> */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                dui et velit rhoncus commodo. Donec vestibulum condimentum leo
                ac mattis.
              </p>
              <p>
                <span>View Details</span>
              </p>
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
