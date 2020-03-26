import React from 'react';
import { Link } from 'react-router-dom';

function Title(props) {
    return (
        <h1>
            <Link to='/'> {props.title} </Link>
        </h1>
    );
}

export default Title;
