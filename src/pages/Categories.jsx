import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);
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

  return (
    <div>
      {/* <div className="container-sm body-container">
        <Heading title="Categories" handleShow={showCreateModal} />
        <CategoryList items={categories} onEdit={showEditModal} />
      </div>
      <DynamicModal
        content={modalContent}
        handleClose={modalClose}
        show={modalShow}
        title="Create category"
      /> */}
    </div>
  );
}
