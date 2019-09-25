import React from 'react';
import uuid from 'uuid';

export default class BlogForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.blog ? props.blog.title : '',
            body: props.blog ? props.blog.body : '',
            id: props.blog ? props.blog.id : uuid(),
            error: ''
        };
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.title || !this.state.body) {
            const error = 'Please provide title and body.';
            this.setState(() => ({ error }));
        } else {
            this.setState(() => ({ error: '' }));

            this.props.onSubmit({
                title: this.state.title,
                body: this.state.body,
                id: this.state.id
            });
        };
    };
    onTitleChange = (e) => {
        const title = e.target.value;

        this.setState(() => ({ title }));
    };
    onBodyChange = (e) => {
        const body = e.target.value;

        this.setState(() => ({ body }));
    };
    render () {
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    {!!this.state.error && <p>{this.state.error}</p>}
                </div>
                <input type="text" value={this.state.title} onChange={this.onTitleChange} placeholder="Post Title" />
                <textarea value={this.state.body} onChange={this.onBodyChange} placeholder="Post Body"></textarea>
                <button>Save Post</button>
            </form>
        )
    }
};