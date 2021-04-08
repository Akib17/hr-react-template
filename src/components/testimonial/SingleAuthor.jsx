import React from 'react';

const SingleAuthor = ({image}) => {
    return (
        <div className="single__carousel__author">
            <img src={image} alt="" />
        </div>
    );
};

export default SingleAuthor;