// Get visible blogs

export default (blogs, { text }) => {
    return blogs.filter((blog) => {
        const textMatch = blog.title.toLowerCase().includes(text.toLowerCase());

        return textMatch;
    });
};