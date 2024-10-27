import React from 'react';
import './Blog.css';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: '10 Essential HTML Tips for Beginners"',
            author: 'Ogheneogaga',
            date: '21/11/2022',
            content: ' This post will provide a comprehensive guide for beginners looking to learn HTML. It will cover fundamental concepts, including the structure of an HTML document, common tags, and best practices for writing clean and semantic code. Each tip will be explained with examples, making it easy for readers to understand and apply the concepts in their own projects.',
        },
        {
            id: 2,
            title: 'How to Create a Responsive Web Design: A Step-by-Step Guide',
            author: 'ogheneogaga',
            date: '7/6/2016',
            content: 'This article will walk readers through the process of creating a responsive web design that adapts to various screen sizes and devices. It will cover key techniques such as using flexible grids, media queries, and responsive images. The guide will include practical examples and code snippets, enabling readers to implement responsive design principles in their own websites..',
        },
        {
            id: 3,
            title: 'The Future of Web Development: Trends to Watch in 2025',
            author: 'ogheneogaga',
            date: '1/8/2024',
            content: 'In this post, readers will explore emerging trends and technologies that are shaping the future of web development. Topics may include advancements in JavaScript frameworks, the rise of low-code/no-code platforms, the importance of accessibility, and the growing focus on performance optimization. The article will provide insights into how these trends can impact developers and businesses in the coming year..',
        },
        {
            id: 4,
            title: 'Interview with a UX Designer: Insights on User-Centered Design',
            author: 'ogheneogaga',
            date: '16/6/20',
            content:'This post will feature an interview with a professional UX designer, discussing their approach to user-centered design. The interview will cover topics such as the importance of user research, prototyping, and usability testing. Readers will gain valuable insights into the designers workflow, tools they use, and tips for aspiring UX professionals. This personal perspective will help demystify the UX design process and inspire readers to prioritize user experience in their projects...,'
        },

    ];

    return (
        <div className="blog-container">
            <h1>OUR BLOG</h1>
            <ul className="blog-posts">
                {blogPosts.map(post => (
                    <li key={post.id} className="blog-post">
                        <h2>{post.title}</h2>
                        <p>
                            By {post.author} on {post.date}
                        </p>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;