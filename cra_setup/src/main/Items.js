import React from 'react';
import './Items.css';

const Items = () => {
    const itemsList = [
        { id: 1, name: 'MOBILE APP DEVELOPMENT', description: 'We design and build custom mobile apps for iOS, Android, and hybrid platforms. Our apps are user-friendly, secure, and tailored to your business needs, offering seamless performance and enhancing customer engagement.' },
        { id: 2, name: 'CUSTOM WEBSITE DESIGN', description: 'We build custom, responsive websites that reflect your brand and deliver a great user experience, ensuring functionality and performance on any device.' },
        { id: 3, name: 'UX & UI DESIGN', description: 'We specialize in creating intuitive, visually engaging designs that enhance user experience. From wireframes to final interfaces, we ensure your website or app is easy to navigate and visually appealing across all devices' },
        { id: 4, name: 'WEB DESIGN FOR BEGINNERS', description:'it is an entry-level course that teaches you how to create and design websites from the ground up. You’ll learn the basics of HTML for structure, CSS for styling, and key design principles to make your sites attractive and user-friendly. This course is ideal for beginners with no prior experience, providing hands-on projects to help you build functional, responsive websites. It’s the perfect first step into the world of web design.' },
        { id: 5, name: 'RESPONSIVE WEB DEVELOPMENT', description: 'Dive into creating websites that adapt to different devices and screen sizes using responsive design techniques.' },
        { id: 6, name: 'JAVASCRIPT FOR BEGINNERS', description: '• Introduction to JavaScript to add interactive elements to your web pages, enhancing user experience.' },
        
       
    ]

    return (
        <div className="items-container">
            <h1>OUR COURSES</h1>
            <ul className="items-list">
                {itemsList.map(item => (
                    <li key={item.id} className="item">
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Items;