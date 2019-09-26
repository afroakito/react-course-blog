import uuid from 'uuid';
import database from '../firebase/firebase';

export const addBlog = (blog) => ({
    type: 'ADD_BLOG',
    blog
});

export const startAddBlog = (blogData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            title = '',
            body = ''
        } = blogData;
        const blog = { title, body };

        database.ref(`users/${uid}/blogs`).push(blog).then((ref) => {
            dispatch(addBlog({
                id: ref.key,
                ...blog
            }));
        });
    };
};

export const editBlog = (id, updates) => ({
    type: 'EDIT_BLOG',
    id,
    updates
});

export const removeBlog = ({ id }) => ({
    type: 'REMOVE_BLOG',
    id
});