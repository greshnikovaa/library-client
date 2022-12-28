import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import BookCard from '../components/BookCard'
import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL

const ShowBookList = () => {
  const[books, setBooks] = useState([])

  useEffect(()=>{
    axios.get(API_URL+'api/books')
    .then((res)=>{
      console.log(res.data)
      setBooks(res.data)
      
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

    return (
        <div>
            <div className="ShowBookList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Books List</h2>
          </div>

          <div className="col-md-11">
            <Link to="/create" className="btn btn-outline-warning float-right">
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>

        </div>

        <div className="list">
            {books.map(book =>
              <BookCard key={book._id} book={book} />
            )}
        </div>
      </div>
    </div>
        </div>
    );
};
export default ShowBookList