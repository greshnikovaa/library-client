import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL


const CreateBook = () => {
  const [newBook, setNewBook] = useState({
    title: '',
    isbn: '',
    author: '',
    description: '',
    publisher_data: '',
    publisher: ''
  })

  const onChange = (e)=>{
    setNewBook({...newBook, [e.target.name]: e.target.value})
  }

  const onSubmit = () =>{
    console.log(newBook)
    axios.post(API_URL+'api/books/', newBook)
    .then(res=>{
      console.log("книга добавлена")
    })
    .catch(err =>{
      console.log(err)
    })
  }

   return (
<div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Book List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Book</h1>
              <p className="lead text-center">
                  Create new book
              </p>

              <div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the Book'
                    name='title'
                    className='form-control'
                    onChange={onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='ISBN'
                    name='isbn'
                    className='form-control'
                    onChange={onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Author'
                    name='author'
                    className='form-control'
                    onChange={onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Describe this book'
                    name='description'
                    className='form-control'
                    onChange={onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='published_date'
                    name='published_date'
                    className='form-control'
                    onChange={onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Publisher of this Book'
                    name='publisher'
                    className='form-control'
                    onChange={onChange}
                  />
                </div>

                <button
                className="btn btn-outline-warning btn-block mt-4"
                onClick={onSubmit}>
                    создать новую книгу
                </button>
              </div>
          </div>
          </div>
        </div>
      </div>
   );
};
export default CreateBook