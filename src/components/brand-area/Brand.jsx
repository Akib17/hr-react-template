import React from 'react';
import Brand1 from '../../assets/img/logo/brand1.png'
import Brand2 from '../../assets/img/logo/brand2.png'
import Brand3 from '../../assets/img/logo/brand4.png'
import SingleBrand from './SingleBrand';

const Brand = () => {
    return (
        <div class="logo__area padding6060 fix">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="logos owl-carousel">

                            <SingleBrand image={Brand1} />
                            <SingleBrand image={Brand2} />
                            <SingleBrand image={Brand3} />
                            <SingleBrand image={Brand2} />
                            <SingleBrand image={Brand1} />
                            <SingleBrand image={Brand3} />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;