import React from 'react';
import { Link } from 'react-router-dom';

export const BlogListFilters = () => {
    return (
        <div className="content-container">
            <div className="header__filters">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            type="text"
                            placeholder="Search blogs"
                            className="text-input"
                        />
                    </div>
                    <div className="input-group__item">
                        <select className="select">
                            <option value="byTitle">By title</option>
                            <option value="byDate">By date</option>
                        </select>
                    </div>
                </div>
                <Link className="button" to="/create">Add Blog</Link>
            </div>
        </div>
    );
};