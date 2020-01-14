import React from 'react';
import CreateBooks from './CreateBook';
import './booking.style.css'
import BooksTable from './BooksTable';



const Bookings = () => {
   
    return (
     <div className="books">
         <CreateBooks/>
         <BooksTable/>
     </div>
    )
};



export default Bookings;