import React from 'react';
import { connect } from 'react-redux';
import BlogListItem from './BlogListItem';

export const BlogList = (props) => {
    console.log(props.blogs);
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
        blogs: state.blogs
    };
};

export default connect(mapStateToProps)(BlogList);