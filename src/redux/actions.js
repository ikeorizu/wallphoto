import { database } from '../config/config';

const startAddingPost = post => {
    return dispatch => {
        return database
            .ref('posts')
            .update({ [post.id]: post })
            .then(() => {
                dispatch(addPhoto(post));
            })
            .catch(err => {
                console.log(err);
            });
    };
};

const startLoadingPost = () => {
    return dispatch => {
        return database
            .ref('posts')
            .once('value')
            .then(snapshot => {
                let posts = [];
                snapshot.forEach(snap => {
                    posts.push(snap.val());
                });
                dispatch(loadPosts(posts));
            });
    };
};

const startAddingComment = (comment, postId) => {
    return dispatch => {
        return database
            .ref(`comments/${postId}`)
            .push(comment)
            .then(() => {
                dispatch(addComment(comment, postId));
            })
            .catch(err => {
                console.log(err);
            });
    };
};

const startLoadingComments = (comment, postId) => {
    return dispatch => {
        return database
            .ref('comments')
            .once('value')
            .then(snapshot => {
                let comments = {};
                snapshot.forEach(snap => {
                    comments[snap.key] = Object.values(snap.val());
                });
                dispatch(loadComments(comments));
            });
    };
};

const startRemovingPost = (index, id) => {
    return dispatch => {
        return database
            .ref(`posts/${id}`)
            .remove()
            .then(() => {
                dispatch(removePhoto(index));
            });
    };
};

const removePhoto = index => {
    return {
        type: 'REMOVE_PHOTO',
        index
    };
};

const addPhoto = post => {
    return {
        type: 'ADD_PHOTO',
        post
    };
};

const addComment = (comment, postId) => {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    };
};

const loadPosts = photos => {
    return {
        type: 'LOAD_PHOTOS',
        photos
    };
};

const loadComments = comments => {
    return {
        type: 'LOAD_COMMENTS',
        comments
    };
};

export {
    removePhoto,
    addPhoto,
    addComment,
    loadPosts,
    loadComments,
    startAddingPost,
    startLoadingPost,
    startRemovingPost,
    startAddingComment,
    startLoadingComments
};
