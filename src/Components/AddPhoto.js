import React, { Component, Fragment } from 'react';

class AddPhoto extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();

        const imageLink = e.target.elements.link.value;
        const imageDesc = e.target.elements.description.value;

        const post = {
            id: Math.floor(Date.now() / 1000),
            description: imageDesc,
            imageLink: imageLink
        };

        if (imageDesc && imageLink) {
            this.props.startAddingPost(post);
            this.props.onHistory.push('/');
        }
    }
    render() {
        return (
            <Fragment>
                <div className='form'>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' placeholder='Link' name='link' />
                        <input type='text' caption='description' name='description' />
                        <button className='button'>Post</button>
                    </form>
                </div>
            </Fragment>
        );
    }
}

export default AddPhoto;
