import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookSearchPage from "./BookSearch";
import BookshelfPage from "./Bookshelf";
import "./App.css";

const App = () => {
  return (
    <Router basename="/intern-work">
      <div className="app">
        <Routes>
          <Route path="/" element={<BookSearchPage />} />
          <Route path="/bookshelf" element={<BookshelfPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
