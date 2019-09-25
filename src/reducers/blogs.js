const blogsReducerDefaultState = [];

export default (state = blogsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_BLOG':
            return [
                ...state,
                action.blog,
            ];
        case 'EDIT_BLOG':
            return state.map((blog) => {
                if (blog.id === action.id) {
                    return {
                        ...blog,
                        ...action.updates
                    };
                } else {
                    return blog;
                }
            });
        default:
            return state;
    }
};

// blog object image
// blog = {
//     title: '',
//     body: ''
// }