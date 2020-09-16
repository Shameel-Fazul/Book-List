import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({book}) => { //Destructuring props.book
    const { removeBook } = useContext(BookContext);
    return (
        <li onClick={ (e) => removeBook(book.id) }>  {/* <li> tag because this component is nested in a <ul> tag */}
            <div className="title">{ book.title }</div>
            <div className="author">{ book.author }</div>
        </li>
    );
}

export default BookDetails;
