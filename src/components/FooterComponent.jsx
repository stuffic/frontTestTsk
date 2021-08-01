import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            news: []

        }
    }


    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">All Rights Reserved 2021 Valeeva Diana</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;