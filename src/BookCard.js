import React from "react";
import "./BookCard.css";

const BookCard = ({ book, addToBookshelf }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author_name && book.author_name.join(", ")}</p>
      <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
    </div>
  );
};

export default BookCard;
