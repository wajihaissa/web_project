import React, { useState } from 'react';
import '../Styles/WriteBlog.css';  // Import the CSS file

export const WriteBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleImageURLChange = (event) => {
    setImageURL(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      title,
      content,
      category,
      imageURL,
    });
    // Implement the form submission logic here
  };

  return (
    <div className="write-blog">
      <h2>Write a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </label>
        <br />
        <label>
          Content:
          <textarea
            value={content}
            onChange={handleContentChange}
            required
          />
        </label>
        <br />
        <label>
          Category:
          <select value={category} onChange={handleCategoryChange} required>
            <option value="">Select a category</option>
            <option value="art">Art</option>
            <option value="science">Science</option>
            <option value="technology">Technology</option>
            <option value="design">Design</option>
            <option value="public-opinion">Public Opinion</option>
          </select>
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            value={imageURL}
            onChange={handleImageURLChange}
            required
          />
        </label>
        <br />
        {imageURL && <img src={imageURL} alt="Preview" className="image-preview" />}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};