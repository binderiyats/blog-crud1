import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CreateArticle } from "../component/Article/CreateArticle";
import { Button } from "react-bootstrap";
import { DynamicModal } from "../component/DynamicModal";

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  return (
    <div className="col-4">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={article.imageUrl}
          className="card-img-top"
          alt={article.title}
        />
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.description}</p>
          <div className="d-flex justify-content-between">
            <Link to={`/articles/${article.id}`} className="btn btn-primary">
              Read more
            </Link>
            <div className="d-flex gap-1">
              <Button
                onClick={() => {
                  navigate(`/articles/edit/${article.id}`);
                }}
                variant="success"
                size="sm"
              >
                Edit
              </Button>
              <Button onClick={() => {}} variant="danger" size="sm">
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  // const modalClose = () => {
  //   setModalShow(false);
  // };
  // const submitArticle = (article) => {
  //   setArticles([...articles, article]);
  //   modalClose();
  // };
  // const showAddModal = () => {
  //   setModalTitle("Create Article");
  //   setModalContent(<CreateArticle submitArticle={submitArticle} />);
  //   setModalShow(true);
  // };

  useEffect(() => {
    let dataUrl = `http://localhost:8000/articles`;

    if (categoryId)
      dataUrl = `http://localhost:8000/articles/categories/${categoryId}`;

    axios
      .get(dataUrl)
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryId]);

  return (
    <div className="row">
      <div className="d-flex justify-content-end mb-3">
        <Button onClick={() => navigate("/articles/create")}>Create</Button>
      </div>
      {articles.map((article, index) => {
        return <ArticleCard key={`article-${index}`} article={article} />;
      })}

      {/* <DynamicModal
        title={modalTitle}
        content={modalContent}
        handleClose={modalClose}
        show={modalShow}
      /> */}
    </div>
  );
}
