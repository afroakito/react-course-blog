import React from 'react';
import { Link } from 'react-router-dom';

const BlogListItem = ({ title, body, id }) => (
    <Link to={`/edit/${id}`}>
        <div>
            <h3>{title}</h3>
            <h4>{body}</h4>
        </div>
    </Link>
);

export default BlogListItem;