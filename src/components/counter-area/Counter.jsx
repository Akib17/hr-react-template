import React from 'react';
import SingleCount from './SingleCount';

const Counter = () => {
    return (
        <div className="counter__area section-padding theme__bg1 fix">
            <div className="container">
                <div className="row justify-content-center">

                    <SingleCount title="Nodejs" description="Dynamically architect worldwide collaboration and idea-sharing before prospective." />
                    <SingleCount title="React" description="Dynamically architect worldwide collaboration and idea-sharing before prospective." />

                    <SingleCount title="HTML" description="Dynamically architect worldwide collaboration and idea-sharing before prospective." />
                    
                    <SingleCount title="CSS" description="Dynamically architect worldwide collaboration and idea-sharing before prospective." />

                </div>
            </div>
            <img src="assets/img/bg/counter__shape.png" alt="" className="counter__shap" />
        </div>
    );
};

export default Counter;