import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";

import Aux from "../../hoc/Auxi";
import "./Books.css";
import BooksList from "./BooksList";


function Books() {
  const [books, setBooks] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  console.log(books);
  useEffect(() => {
    const fechBooks = async () => {
      const response = await axios.get(
        "https://books-json-server.herokuapp.com/books"
      );
      setBooks(response.data);
    };
    fechBooks()
  }, []);

  const booksPerPage = 10;
  const pagesVisted = pageNumber * booksPerPage;

  const currentBooks = books.slice(pagesVisted, pagesVisted + booksPerPage);

  const pageCount = Math.ceil(books.length / booksPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  let allBooks = <p>Books can't be loading</p>;
  if (currentBooks) {
    allBooks = currentBooks.map((bookDitails, i) => {
      return <BooksList bookDitails={bookDitails} key ={i} />;
    });
  }

  return (
    <Aux>
      {allBooks}
      <ReactPaginate
        previousLabel="<<"
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </Aux>
  );
}



export default Books;
