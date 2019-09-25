import React from 'react';
import BlogList from './BlogList';
import { BlogListFilters } from './BlogListFilters';

const BlogDashboardPage = () => (
  <div>
    <p>Dashboard page content</p>
    <BlogListFilters />
    <BlogList />
  </div>
);

export default BlogDashboardPage;
