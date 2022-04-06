import useDatas from '../../hooks/useDatas';
import User from '../User/User';

const Reviews = () => {
    const [users] = useDatas();
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