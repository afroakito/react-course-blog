import React from 'react';
import { connect } from 'react-redux';
import BlogForm from './BlogForm';
import { startEditBlog, startRemoveBlog } from '../actions/blogs';

export class EditBlogPage extends React.Component {
    onSubmit = (blog) => {
        this.props.startEditBlog(this.props.blog.id, blog);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.startRemoveBlog({ id: this.props.blog.id });
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit blog</h1>
                    </div>
                </div>
                <div className="content-container">
                    <BlogForm blog={this.props.blog} onSubmit={this.onSubmit} />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove Post</button>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => {
    console.log(state.blogs);
    return {
        blog: state.blogs.find((blog) => blog.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startEditBlog: (id, updates) => dispatch(startEditBlog(id, updates)),
        startRemoveBlog: ({ id }) => dispatch(startRemoveBlog({ id }))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBlogPage);