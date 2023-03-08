import React from 'react';
import './PaginationComp.css'

const PaginationComp = ({cardsPerPage, totalCards, paginate}) => {

    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <div className='pag'>
            <ul className="pugFunc">
                {
                    pageNumber.map(num => (
                        <a key={num}>
                            <li onClick={() => paginate(num)}>
                                {num}
                            </li>
                        </a>
                    ))
                }
            </ul>
        </div>
   );
};

export default PaginationComp;