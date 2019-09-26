import React from 'react';
import { connect } from 'react-redux';
import BlogForm from './BlogForm';
import { startAddBlog } from '../actions/blogs';

export class AddBlogPage extends React.Component {
    onSubmit = (blog) => {
        this.props.startAddBlog(blog);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <p>This is add blog page</p>
                <BlogForm onSubmit={this.onSubmit} />
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        startAddBlog: (blog) => dispatch(startAddBlog(blog))
    }
};

export default connect(undefined, mapDispatchToProps)(AddBlogPage);