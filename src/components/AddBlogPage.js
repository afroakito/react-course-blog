import React from 'react';
import { connect } from 'react-redux';
import BlogForm from './BlogForm';
import { addBlog } from '../actions/blogs';

export class AddBlogPage extends React.Component {
    onSubmit = (blog) => {
        this.props.addBlog(blog);
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

const mapDispatchToProps = (dispatch) => ({
    addBlog: (blog) => dispatch(addBlog(blog))
});

export default connect(undefined, mapDispatchToProps)(AddBlogPage);