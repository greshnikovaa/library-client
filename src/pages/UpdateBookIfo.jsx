import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL


const UpdateBookIfo = () => {
const [book, setBook] = useState({})
const bookId = useParams().id

const onChange = (e) =>{
  setBook({...book, [e.target.name]: e.target.value})
}
const onSubmit = () =>{
  axios.put(API_URL+'api/books/' + bookId, book)
  .then((res)=>{
    console.log("Данные книги изменены")
  })
  .catch((err)=>{
    console.log(err)
  })
}

useEffect(()=>{
  axios.get(API_URL+'api/books/' + bookId)
  .then((res)=>{
    setBook(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
}, [bookId])

   return (
      <div className="UpdateBookInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show BooK List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Book</h1>
              <p className="lead text-center">
                  Update Book's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <div>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title of the Book'
                name='title'
                className='form-control'
                onChange={onChange}
                value={book.title}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="isbn">ISBN</label>
              <input
                type='text'
                placeholder='ISBN'
                name='isbn'
                className='form-control'
                onChange={onChange}
                value={book.isbn}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="author">Author</label>
              <input
                type='text'
                placeholder='Author'
                name='author'
                className='form-control'
                onChange={onChange}
                value={book.author}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Describe this book'
                name='description'
                className='form-control'
                onChange={onChange}
                value={book.description}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="published_date">Published Date</label>
              <input
                type='date'
                placeholder='published_date'
                name='published_date'
                className='form-control'
                onChange={onChange}
                value={book.published_date}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="publisher">Publisher</label>
              <input
                type='text'
                placeholder='Publisher of this Book'
                name='publisher'
                className='form-control'
                onChange={onChange}
                value={book.published}
              />
            </div>

            <button 
            onClick={onSubmit}
            className="btn btn-outline-info btn-lg btn-block">Update Book</button>
            </div>
          </div>

        </div>
      </div>
   );
};
export default UpdateBookIfo