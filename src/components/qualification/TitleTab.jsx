import React from 'react';
import SingleTab from './SingleTab';

const TitleTab = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="tabs2">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <SingleTab link="#home" title="Experience" active />
                        <SingleTab link="#profile" title="Education" />                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TitleTab;