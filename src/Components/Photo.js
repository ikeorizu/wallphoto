import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Photo(props) {
    const post = props.post;
    console.log(post);

    return (
        <figure className='figure'>
            <Link to={`/single/${post.id}`}>
                <img className='photo' src={post.imageLink} alt={post.description} />
            </Link>

            <div className='pad-10'>
                <figcaption>
                    <p>{post.description}</p>
                </figcaption>
                <div className='button-container'>
                    <button
                        className='remove-button'
                        onClick={() => {
                            props.startRemovingPost(props.index, post.id);
                            props.history.push('/');
                        }}>
                        Remove
                    </button>
                    <Link className='button' to={`/single/${post.id}`}>
                        <div className='comment-count'>
                            <i className='speech-bubble'></i>
                            {props.comments[post.id] ? props.comments[post.id].length : 0}
                        </div>
                    </Link>
                </div>
            </div>
        </figure>
    );
}

Photo.propTypes = {
    post: PropTypes.object.isRequired
};

export default Photo;
