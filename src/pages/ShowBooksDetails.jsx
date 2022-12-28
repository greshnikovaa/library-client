import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL


const ShowBookDetails = () => {
    const [book, setBook] = useState({})
    const bookId = useParams().id
    const navigation = useNavigate()

    useEffect(()=>{
      axios.get(API_URL+'api/books/' + bookId)
      .then((res)=>{
        console.log(res.data)
        setBook(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }, [bookId])

    const onDeleteClick = () => {
      axios.delete(API_URL+'api/books/' + bookId)
      .then((res) =>{
        console.log('книга удалена')
        navigation('/')
      })
      .catch((err)=>{
        console.log(err)
      })
    }

   let BookItem = <div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ book.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Author</td>
            <td>{ book.author }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>ISBN</td>
            <td>{ book.isbn }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Publisher</td>
            <td>{ book.publisher }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Published Date</td>
            <td>{ book.published_date }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{ book.description }</td>
          </tr>
        </tbody>
      </table>
    </div>

   return (
      <div className="ShowBookDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Book List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Book's Record</h1>
              <p className="lead text-center">
                  View Book's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { BookItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button onClick={onDeleteClick} type="button" className="btn btn-outline-danger btn-lg btn-block" >Delete Book</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit/${book._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Book
              </Link>
              <br />
            </div>

          </div>

        </div>
      </div>
   );
};
export default ShowBookDetails