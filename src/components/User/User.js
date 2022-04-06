import React from 'react';
import './User.css'

const User = (props) => {
    const { name, reviewText, img, rating } = props.user;


    return (
        <div className='user-info'>
            <img style={{ width: '60px', margin: '0' }} src={img} alt="" />
            <h4 style={{ margin: '4px' }}>{name}</h4>
            <p><small>{reviewText}</small></p>
            <h3>{rating}</h3>
        </div>
    );
};

export default User;