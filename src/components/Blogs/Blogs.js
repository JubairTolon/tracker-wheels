import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog-container'>
            <h2 style={{ color: 'limegreen' }}>What is Context Api?</h2>
            <p style={{ color: 'white' }}>
                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. it's make easer the way to share props without shareing via parents components. And this work is done by the <strong>Provideer</strong>
            </p>
            <h2 style={{ color: 'limegreen' }}>What is Semantic  Tag?</h2>
            <p style={{ color: 'white' }}>
                Semantic tag or element is  it clearly communicated to both the developer and the browser. These elements clearly define its content. <br />
                he following HTML tags can be used to break your page into identified parts: header, footer, nav, section, article.
                <h3>Why Do You Need To Use?</h3> <br />
                <li>The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages.</li>
                <li>The pages made with semantic elements are much easier to read.</li>
                <li>It has greater accessibility. It offers a better user experience.</li>
            </p>
            <h2 style={{ color: 'limegreen' }}>Inline Vs Inline Block</h2>
            <p style={{ color: 'white' }}>
                <h1>display: inline</h1>
                here width and height are not respected, and the padding top and bottom are present, but overlap over the lines above and under. Don't tale any height and width.
                <h1>display: inline-block</h1>
                It's set the elements side by side horizontaly and also take height and width.
                <h1>display: block</h1>
                Here the elements are set horizontaly one by one and take given height and width.



            </p>

        </div>
    );
};

export default Blogs;