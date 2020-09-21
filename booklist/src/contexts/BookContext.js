import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books, dispatch] = useReducer(bookReducer, [], () => { // "[] : Second Argument" is the value for the books variable. In thise case, it's blank.
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
        // The third argument is for the default value. In this case, it's a function.
        // Get the data from the local storage and return data to the "books" variable.
    }); 
                                                           

    useEffect(() => { // 'useEffect' hook will run everytime the app initializes or data in "books" changes.
        localStorage.setItem('books', JSON.stringify(books));
        // The value property in the local storage requires the data type to be a String.
        // ^ Since we can't add a JavaScript object to the value property
        // ^ We use "JSON.stringify" to make the object into a string.
    },[books]);

    // const [books, setBooks] = useState([
    //     { title: 'name of the wind', author: 'patrick rothfuss', id: 1},
    //     { title: 'the final empire', author: 'brandon sanderson', id: 2}
    // ]);

    // const addBook = (title, author) => {
    //     setBooks([...books, { title: title, author: author, id: uuid() }]);
    // };

    // const removeBook = (id) => {
    //     setBooks(books.filter((book) => book.id !== id ));
    // };

    return (
        <BookContext.Provider value={ {books, dispatch} }>
            { props.children }
        </BookContext.Provider>
    );
}

export default BookContextProvider;
