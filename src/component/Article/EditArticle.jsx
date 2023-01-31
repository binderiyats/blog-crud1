import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function EditArticle() {
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [categoryId, setCategoryId] = useState();
  const [description, setDescription] = useState();
  const [text, setText] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/articles`).then((res) => {
      setCategories(res.data);
    });
  }, []);

  const submit = () => {
    const editedArticle = {
      title,
      imageUrl,
      categoryId: Number(id),
      description,
      text,
    };
    axios
      .patch(`http://localhost:8000/articles/${article.id}`, editedArticle)
      .then((res) => {
        updateArticle(res.data);
      })
      .catch((err) => console.log(err));
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
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Article title"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          type="text"
          placeholder="Image URL"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option hidden value="">
            Choose category
          </option>
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
          onChange={(e) => setDescription(e.target.value)}
          as="textarea"
          rows={3}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Text</Form.Label>
        <Form.Control
          value={text}
          onChange={(e) => setText(e.target.value)}
          as="textarea"
          rows={10}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
