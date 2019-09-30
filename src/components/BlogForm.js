import React from 'react';
import uuid from 'uuid';

export default class BlogForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.blog ? props.blog.title : '',
            body: props.blog ? props.blog.body : '',
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
                body: this.state.body
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
            <form className="form" onSubmit={this.onSubmit}>
                <div>
                    {!!this.state.error && <p className="form_error">{this.state.error}</p>}
                </div>
                <input
                    type="text"
                    placeholder="Post Title"
                    autoFocus
                    className="text-input"
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />
                <textarea
                    placeholder="Post Body"
                    className="textarea"
                    value={this.state.body}
                    onChange={this.onBodyChange}
                >
                </textarea>
                <div>
                    <button className="button">Save Post</button>
                </div>
            </form>
        )
    }
};