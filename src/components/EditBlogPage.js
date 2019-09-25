import React from 'react';
import { connect } from 'react-redux';
import BlogForm from './BlogForm';
import { editBlog } from '../actions/blogs';

export class EditBlogPage extends React.Component {
    onSubmit = (blog) => {
        this.props.editBlog(blog.id, blog);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <p>This is edit blog page</p>
                <BlogForm blog={this.props.blog} onSubmit={this.onSubmit} />
                <button>Remove Post</button>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => {
    return {
        blog: state.blogs.find((blog) => blog.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editBlog: (id, updates) => dispatch(editBlog(id, updates))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBlogPage);