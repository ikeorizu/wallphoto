import React, { Component } from 'react';
import Title from './Title';
import Photowall from './PhotoWall';
import AddPhoto from './AddPhoto';
import Single from './Single';
import { Route } from 'react-router-dom';

class Main extends Component {
    constructor() {
        super();

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.props.startLoadingPost().then(() => {
            this.setState({ loading: false });
        });
        this.props.startLoadingComments();
    }

    render() {
        return (
            <div>
                <Title title='Photowall' />
                <Route exact path='/' render={() => <Photowall {...this.props} />} />
                <Route path='/add-photo' render={({ history }) => <AddPhoto {...this.props} onHistory={history} />} />
                <Route
                    path='/single/:id'
                    loading={this.state.loading}
                    render={params => <Single {...this.props} {...params} />}
                />
            </div>
        );
    }
}

export default Main;
