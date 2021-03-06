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

export const startEditBlog = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        database.ref(`users/${uid}/blogs/${id}`).update(updates).then(() => {
            dispatch(editBlog(id, updates));
        });
    };
};

export const removeBlog = ({ id } = {}) => ({
    type: 'REMOVE_BLOG',
    id
});

export const startRemoveBlog = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        database.ref(`users/${uid}/blogs/${id}`).remove().then(() => {
            dispatch(removeBlog({ id }));
        });
    };
};

export const setBlogs = (blogs) => ({
    type: 'SET_BLOGS',
    blogs
});

export const startSetBlogs = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/blogs`).once('value').then((snapshot) => {
            const blogs = [];

            snapshot.forEach((childSnapshot) => {
                blogs.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setBlogs(blogs));
        });
    };
};