export const addBlog = (blog) => ({
    type: 'ADD_BLOG',
    blog,
});

export const editBlog = (id, updates) => ({
    type: 'EDIT_BLOG',
    id,
    updates
});