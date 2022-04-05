import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Reviews = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('user.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    return (
        <div>
            <div className='review-container'>
                <h1 style={{ color: 'white' }}>Customers Reviews ({users.length})</h1>
                <div className='user-card'>
                    {
                        users.map(user => <User
                            key={user._id}
                            user={user}
                        ></User>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;