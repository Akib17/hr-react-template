import React from 'react';

const SingleBrand = ({ image }) => {
    return (
        <div class="single__logo">
            <div class="single__logo__table">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default SingleBrand;