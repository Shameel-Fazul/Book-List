import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({book}) => { //Destructuring props.book
    //const { removeBook } = useContext(BookContext);
    const { dispatch } = useContext(BookContext);
    return (
        <li onClick={ (e) => dispatch({ type: 'REMOVE_BOOK', id: book.id }) }>  {/* <li> tag because this component is nested in a <ul> tag */}
            <div className="title">{ book.title }</div>
            <div className="author">{ book.author }</div>
        </li>
    );
}

export default BookDetails;
