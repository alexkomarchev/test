import React, {useEffect, useState} from 'react';
import "./pagination.css"
import Cards from "../../components/cards/Cards";
import PaginationComp from "../../components/PuginationComp/PaginationComp";

const Pagination = () => {

    const [array, setArray] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage] = useState(5)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((resp) => resp.json())
            .then((data) => {
                setArray(data)
            })
    }, [])

    const lastCardIndex = currentPage * cardsPerPage
    const firstCardIndex = lastCardIndex - cardsPerPage
    const currentCard = array.slice(firstCardIndex, lastCardIndex)

    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
    }

    return (
        <div className='pagination_page'>
            <h1>Pagination</h1>
            <div className='pagination'>
                {currentCard.map(obj => <Cards items={obj}/>)}
            </div>
            <PaginationComp cardsPerPage={cardsPerPage} totalCards={array.length} paginate={paginate}/>
        </div>
    );
};

export default Pagination;
