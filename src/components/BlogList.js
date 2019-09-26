import React from 'react';
import { connect } from 'react-redux';
import BlogListItem from './BlogListItem';

export const BlogList = (props) => {
    console.log(props.blogs);
    return (
        <div>
            <p>This is blog list section</p>
            {
                props.blogs.map((blog) => {
                    return <BlogListItem key={blog.id} {...blog} />;
                })
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    };
};

export default connect(mapStateToProps)(BlogList);