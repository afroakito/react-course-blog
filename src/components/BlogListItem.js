import React from 'react';
import { Link } from 'react-router-dom';

const BlogListItem = ({ title, body, id }) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{title}</h3>
        </div>
    </Link>
);

export default BlogListItem;