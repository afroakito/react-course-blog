import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

export class BlogListFilters extends React.Component {
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    };
    render() {
        return (
            <div className="content-container">
                <div className="header__filters">
                    <div className="input-group">
                        <div className="input-group__item">
                            <input
                                type="text"
                                placeholder="Search blogs"
                                className="text-input"
                                value={this.props.filters.text}
                                onChange={this.onTextChange}
    
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
    }
    
};

const mapStateToProps = (state) => ({
    filters: state.filters,
    blogs: state.blogs
});

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (text) => dispatch(setTextFilter(text))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogListFilters);