import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const CreateArticle = () => {
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submit = () => {
    const newArticle = {
      title,
      imageUrl,
      categoryId: Number(categoryId),
      description,
      text,
    };

    axios
      .post(`http://localhost:8000/articles`, newArticle)
      .then((res) => {
        navigate("/articles");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="Article title"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          value={imageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
          type="text"
          placeholder="Image URL"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select
          value={categoryId}
          onChange={(e) => {
            setCategoryId(e.target.value);
          }}
          aria-label="Default select example"
        >
          <option>Choose Category</option>
          {categories.map((category, index) => {
            return (
              <option key={`option-${index}`} value={category.id}>
                {category.title}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          as="textarea"
          rows={3}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Text</Form.Label>
        <Form.Control
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          as="textarea"
          rows={10}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
