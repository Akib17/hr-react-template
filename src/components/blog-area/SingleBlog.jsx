import React from 'react';

const SingleBlog = ({title, author, job, description}) => {
    return (
        <div className="single__blog">
            <img src="assets/img/blog/blog11.jpg" alt="" />
            <div className="blog__content">
                <h4><a href="single.html">{title }</a></h4>
                <div className="author-details">
                    <ul>
                        <li><a href="#"> <i className="fas fa-user-alt"></i> {author} </a></li>
                        <li><a href="#"> <i className="fas fa-folder-open"></i> {job} </a>
                        </li>
                    </ul>
                </div>
                <p> {description} </p>
                <div className="space-30"></div>
                <a href="#" className="readmore__btn ">read more </a>

            </div>
        </div>
    );
};

export default SingleBlog;