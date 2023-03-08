import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPage} from "../../store/PagesSlice";


const Pagesinfo = () => {
    const navigate = useNavigate()
    const {id}=useParams()
    const {objectPage}=useSelector(state=>state.newReducer)
    const dispatch=useDispatch()

    useEffect(()=>{
        console.log(id)
        dispatch(getPage(id))
    },[])

    return (
        <div>
            <button onClick={()=>navigate(-1)}>back</button>
            <h1>{objectPage.title}</h1>
            <img src={objectPage.image}/>

        </div>
    );
};

export default Pagesinfo;