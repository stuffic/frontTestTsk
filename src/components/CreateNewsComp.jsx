import React, { Component } from 'react';
import NewsServise from '../services/NewsServise';

class CreateNewsComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            author: "",
            headline: "",
            description: ""
        }

        this.changeAuthorHandler = this.changeAuthorHandler.bind(this);
        this.changeHeadlineHandler = this.changeHeadlineHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveOrUpdateNews = this.saveOrUpdateNews.bind(this);
    }

    componentDidMount() {

        if (this.state.id === '_add') {
            return
        }
        else {
            NewsServise.getNewsById(this.state.id).then((res) => {
                let news = res.data;
                this.setState({
                    author: news.author,
                    headline: news.headline,
                    description: news.description
                });
            });
        }

    }

    saveOrUpdateNews = (e) => {
        e.preventDefault();

        let news = { author: this.state.author, headline: this.state.headline, description: this.state.description };
        console.log('news => ' + JSON.stringify(news));


        if (this.state.id === '_add') {
            NewsServise.createNews(news).then(res => {
                this.props.history.push('/news');
            });
        }
        else {
            NewsServise.updateNews(news, this.state.id).then(res => {
                this.props.history.push('/news');
            });
        }
    }

    changeAuthorHandler = (event) => {
        this.setState({ author: event.target.value });
    }

    changeHeadlineHandler = (event) => {
        this.setState({ headline: event.target.value });
    }

    changeDescriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    }

    cancel() {
        this.props.history.push('/news');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-container">Add News</h3>
        } else {
            return <h3 className="text-container">Update News</h3>
        }
    }

    render() {
        return (
            <div>
                <h1>News Form</h1>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form >
                                    <div className="form-group">
                                        <label>Author:</label>
                                        <input placeholder="Author" name="author" className="form-control" value={this.state.author} onChange={this.changeAuthorHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Headline:</label>
                                        <input placeholder="Headline" name="headline" className="form-control" value={this.state.headline} onChange={this.changeHeadlineHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <input type="text" placeholder="Description" name="description" className="form-control" value={this.state.description} onChange={this.changeDescriptionHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateNews}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateNewsComp