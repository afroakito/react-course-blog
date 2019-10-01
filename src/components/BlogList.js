import React from 'react';
import { connect } from 'react-redux';
import BlogListItem from './BlogListItem';
import selectBlogs from '../selectors/blogs';

export const BlogList = (props) => {
    return (
        <div className="content-container">
            <div className="list-header">
                <div>Blog Post</div>
            </div>
            <div className="list-body">
                {
                    props.blogs.map((blog) => {
                        return <BlogListItem key={blog.id} {...blog} />;
                    })
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        blogs: selectBlogs(state.blogs, state.filters)
    };
};

export default connect(mapStateToProps)(BlogList);