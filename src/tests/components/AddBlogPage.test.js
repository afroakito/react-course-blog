import React from 'react';
import { shallow } from 'enzyme';
import { AddBlogPage } from '../../components/AddBlogPage';
import blogs from '../fixtures/blogs';

test('should render AddBlogPage correctly', () => {
    const wrapper = shallow(<AddBlogPage />);
    expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit', () => {
    const startAddBlog = jest.fn();
    const history = { push: jest.fn() };

    const wrapper = shallow(<AddBlogPage startAddBlog={startAddBlog} history={history} />);
    wrapper.find('BlogForm').prop('onSubmit')(blogs[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddBlog).toHaveBeenLastCalledWith(blogs[1]);
});