import React from 'react';
import {Link, useNavigate} from "react-router-dom";


const Header = () => {
    const navigate = useNavigate()



    return (
        <div>
            <Link to={"/pagination"}><button>пагинация</button></Link>
            <Link to={"/"}><button>слайдер</button></Link>

        </div>
    );
};

export default Header;