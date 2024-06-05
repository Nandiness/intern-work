import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookSearchPage from "./BookSearch";
import BookshelfPage from "./Bookshelf";
import "./App.css";

const App = () => {
  return React.createElement(
    Router,
    null,
    React.createElement(
      "div",
      { className: "app" },
      React.createElement(
        Routes,
        null,
        React.createElement(Route, {
          path: "/",
          element: React.createElement(BookSearchPage),
        }),
        React.createElement(Route, {
          path: "/bookshelf",
          element: React.createElement(BookshelfPage),
        })
      )
    )
  );
};

export default App;
