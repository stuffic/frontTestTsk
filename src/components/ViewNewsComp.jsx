import React, { Component } from 'react';
import NewsServise from '../services/NewsServise';

class ViewNewsComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            news: {}
        }

    }

    componentDidMount() {
        NewsServise.getNewsById(this.state.id).then(res => {
            this.setState({ news: res.data });
        })
    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h2 className="text-center">View News Details</h2>
                    <div className="card-body">
                        <div className="row">
                            <label> News Author:</label>
                            <div>{this.state.news.author}</div>
                        </div>
                        <div className="row">
                            <label> News Headline:</label>
                            <div>{this.state.news.headline}</div>
                        </div>
                        <div className="row">
                            <label>News Description:</label>
                            <div>{this.state.news.description}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewNewsComp;