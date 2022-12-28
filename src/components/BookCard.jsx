import React from 'react'
import { Link } from 'react-router-dom';

const BookCard = ({book}) => {
   return (
      <div className="card-container">
            <img src="https://commapress.co.uk/uploads/images/content/_large/9781905583164.jpg" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show/${book._id}`}>
                        { book.title }
                    </Link>
                </h2>
                <h3>{book.author}</h3>
                <p>{book.description}</p>
            </div>
        </div>
   );
};
export default BookCard
