import React, { useState } from "react";

function CreateArea(props) {
  const [article, setArticle] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setArticle(prevArticle => {
      return {
        ...prevArticle,
        [name]: value
      };
    });
  }

  function submitArticle(event) {
    props.onAdd(article);
    setArticle({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={article.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={article.content}
          placeholder="Write an article..."
          rows="3"
        />
        <button onClick={submitArticle}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
