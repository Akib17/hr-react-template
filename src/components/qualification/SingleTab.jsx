import React from 'react';

const SingleTab = ({ link, title, active }) => {
    return (
        <li className="nav-item">
            <a className={active ? "nav-link active" : "nav-link"} id="home-tab" data-toggle="tab" href={link} role="tab" aria-controls="home" aria-selected="true">{title}</a>
        </li>
    );
};

export default SingleTab;