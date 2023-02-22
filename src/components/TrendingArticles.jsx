import React from "react";
import '../styles/App.scss';


const TrendingArticles = () => {
    return (
<div className="trending-articles article-components-container">
<h2 >Trending Articles</h2>
<div className="items-container">

    <div className="item">
        <h3>Article Title</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Officia rerum esse accusantium amet dolorum aliquam voluptatem quas, 
            nobis maxime praesentium tenetur repudiandae quod. Atque praesentium asperiores totam sapiente incidunt aperiam.</p>
    </div>

    <div className="item">
    <h3>Article Title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, accusantium, voluptatem est quis cupiditate libero ad tenetur nam rerum, odit necessitatibus non. 
            Odit dignissimos esse voluptatum vero incidunt dolores iste.</p>
    </div>
    
</div>
</div>
    )}

export default TrendingArticles;