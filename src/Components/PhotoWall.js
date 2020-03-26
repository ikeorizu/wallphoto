import React, { Fragment } from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PhotoWall(props) {
    return (
        <Fragment>
            <Link to='/add-photo' className='addIcon' />>
            <div className='photo-grid'>
                {props.posts
                    .sort(function(x, y) {
                        return y.id - x.id;
                    })
                    .map((post, index) => {
                        return <Photo key={index} post={post} {...props} index={index} />;
                    })}
            </div>
        </Fragment>
    );
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired
};

export default PhotoWall;
