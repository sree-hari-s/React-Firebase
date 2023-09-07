import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Article from "./Article";
import CreateArea from "./CreateArea";

function App() {
  const [articles, setArticles] = useState([]);

  function addArticle(newArticle) {
    setArticles(prevArticles => {
      return [...prevArticles, newArticle];
    });
  }

  function deleteArticle(id) {
    setArticles(prevArticles => {
      return prevArticles.filter((articleItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addArticle} />
      {articles.map((articleItem, index) => {
        return (
          <Article
            key={index}
            id={index}
            title={articleItem.title}
            content={articleItem.content}
            onDelete={deleteArticle}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
