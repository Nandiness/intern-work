import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const BookSearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    const query = e.target.value;
    setQuery(query);
    if (query.length > 2) {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
      );
      setResults(response.data.docs);
    } else {
      setResults([]);
    }
  };

  const addToBookshelf = (book) => {
    let bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    if (!bookshelf.some((b) => b.key === book.key)) {
      bookshelf.push(book);
      localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
      alert("ADDED INTO THE PERSONAL BOOKSHELF.");
    }
  };

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Book Search"),
    React.createElement("input", {
      type: "text",
      value: query,
      onChange: handleSearch,
      placeholder: "Search for a book",
    }),
    React.createElement(
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
          React.createElement("th", null, "eBooks Count"),
          React.createElement("th", null, "Action")
        )
      ),
      React.createElement(
        "tbody",
        null,
        results.map((book) =>
          React.createElement(BookRow, {
            key: book.key,
            book: book,
            addToBookshelf: addToBookshelf,
          })
        )
      )
    ),
    <Link to="/bookshelf">Go to Bookshelf</Link>
  );
};

const BookRow = ({ book, addToBookshelf }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const publishedInfo = book.publish_date
    ? book.publish_date.join(", ")
    : "Unknown";
  const truncatedInfo =
    publishedInfo.length > 20
      ? publishedInfo.slice(0, 20) + "..."
      : publishedInfo;

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
    ),

    React.createElement(
      "td",
      { "data-label": "Action" },
      React.createElement(
        "button",
        { onClick: () => addToBookshelf(book) },

        "Add to Bookshelf"
      )
    )
  );
};

export default BookSearchPage;
