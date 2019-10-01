import React from 'react';
import BlogList from './BlogList';
import BlogListFilters from './BlogListFilters';

const BlogDashboardPage = () => (
  <div>
    <BlogListFilters />
    <BlogList />
  </div>
);

export default BlogDashboardPage;
