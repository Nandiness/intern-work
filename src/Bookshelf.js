import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookshelf(storedBookshelf);
  }, []);

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "My Bookshelf"),
    bookshelf.length === 0
      ? React.createElement("p", null, "No books in your bookshelf.")
      : React.createElement(
          "table",
          null,
          React.createElement(
            "thead",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement("th", null, "Title"),
              React.createElement("th", null, "Author"),
              React.createElement("th", null, "Published Year"),
              React.createElement("th", null, "eBooks Count")
            )
          ),
          React.createElement(
            "tbody",
            null,
            bookshelf.map((book) =>
              React.createElement(BookRow, { key: book.key, book: book })
            )
          )
        ),
    <button className="direct">
      <Link to="/">Go to BookSearch</Link>
    </button>
  );
};

const BookRow = ({ book }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return React.createElement(
    "tr",
    null,
    React.createElement("td", { "data-label": "Title" }, book.title),
    React.createElement(
      "td",
      { "data-label": "Author" },
      book.author_name ? book.author_name.join(", ") : "Unknown"
    ),
    React.createElement(
      "td",
      { "data-label": "Published Year" },
      book.first_publish_year
    ),
    React.createElement(
      "td",
      { "data-label": "eBooks Count" },
      book.ebook_count_i
    )
  );
};

export default BookshelfPage;
