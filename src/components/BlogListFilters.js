import React from 'react';
import { Link } from 'react-router-dom';

export const BlogListFilters = () => {
    return (
        <div>
            <p>This is blog list filters section</p>
            <input type="text" />
            <select>
                <option value="byTitle">By title</option>
                <option value="byDate">By date</option>
            </select>
            <Link to="/create">Add Blog</Link>
        </div>
    );
};