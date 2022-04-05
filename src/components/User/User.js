import React from 'react';
import './User.css'

const User = (props) => {
    const { name, reviewText, img, rating } = props.user;
    return (
        <div>
            <div className='user-info'>
                <img style={{ width: '60px', margin: '0' }} src={img} alt="" />
                <h4 style={{ margin: '4px' }}>{name}</h4>
                <p><small>{reviewText}</small></p>
                <p><small><strong>Rating: </strong> {rating}</small></p>
            </div>
        </div>
    );
};

export default User;