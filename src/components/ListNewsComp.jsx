import React, { Component } from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import NewsServise from '../services/NewsServise';

const INSTRUCTOR = 'Admin'

class ListNewsComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            news: []
        }
        this.addNews = this.addNews.bind(this);
        this.editNews = this.editNews.bind(this);
        this.deleteNews = this.deleteNews.bind(this);
        this.refreshNews = this.refreshNews.bind(this)
    }

    componentDidMount() {
        //NewsServise.getNews().then((res) => {
        //this.setState({ news: res.data });
        //});
        this.refreshNews();
    }

    refreshNews() {
        NewsServise.retrieveAllNews(INSTRUCTOR)
            .then(
                response => {
                    this.setState({ news: response.data })
                }
            )
    }


    addNews() {
        this.props.history.push('/add-news/_add');
    }

    editNews(id) {
        this.props.history.push(`/add-news/${id}`);
    }

    deleteNews(id) {
        NewsServise.deleteNews(id).then((res) => {
            this.setState({ news: this.state.news.filter(news => news.id !== id) });
        });
    }

    viewNews(id) {
        this.props.history.push(`/view-news/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">News List</h2>
                <button className="btn btn-primary" onClick={this.addNews} style={{ marginBottom: "20px" }}>Add News</button>
                <div className="row"></div>
                <table className="table table-stridpad table-bordered">
                    <thead>
                        <tr>
                            <th>News Author</th>
                            <th>News Headline</th>
                            <th>News Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.news.map(
                                news =>
                                    <tr key={news.id}>
                                        <td> {news.author}</td>
                                        <td>{news.headline}</td>
                                        <td>{news.description}</td>
                                        <td>
                                            <button onClick={() => this.editNews(news.id)} className="btn btn-info" >
                                                Update
                                            </button>
                                            <button onClick={() => this.deleteNews(news.id)} className="btn btn-danger" style={{ marginLeft: "10px" }} >
                                                Delete
                                            </button>
                                            <button onClick={() => this.viewNews(news.id)} className="btn btn-info" style={{ marginLeft: "10px" }} >
                                                View
                                            </button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListNewsComp;