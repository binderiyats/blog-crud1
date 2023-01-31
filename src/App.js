// import { useState } from "react";
// import "./App.css";
// import { Planet } from "./Planet";
// import Blog from "./Blog";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";
import Articles from "./pages/Articles";
import SingleArticle from "./pages/SingleArticle";
import Categories from "./pages/Categories";
import { CreateArticle } from "./component/Article/CreateArticle";
import EditArticle from "./component/Article/EditArticle";

function App() {
  return (
    <diV className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<SingleArticle />} />
        <Route path="/articles/cat/:categoryId" element={<Articles />} />
        <Route path="/articles/create" element={<CreateArticle />} />
        <Route path="/articles/edit/:id" element={<EditArticle />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </diV>
  );
}

export default App;
