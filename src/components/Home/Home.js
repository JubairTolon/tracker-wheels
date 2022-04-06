import './Home.css'
import img from '../../images/cycle.png'
import User from '../User/User';
import { useNavigate } from 'react-router-dom';
import useDatas from '../../hooks/useDatas';


const Home = () => {
    const [users] = useDatas();

    const navigate = useNavigate();
    const hannleShowAllReviewBtn = () => {
        const path = `/reviews`;
        navigate(path);
    }

    const newUsers = users.filter(user => users.indexOf(user) < 3);

    return (
        <div>
            <div className='home-container'>
                <div className="text-container">
                    <h1 style={{ color: 'white' }}>Won Your <span style={{ color: 'rgb(57, 177, 57)' }}>Track</span></h1>
                    <h3 style={{ color: 'white' }}>Benefits Of Cycling </h3>
                    <p>Cycling can help to protect you from serious diseases such as stroke, heart attack, some cancers, depression, diabetes, obesity and arthritis. Riding a bike is healthy, fun and a low-impact form of exercise for all ages. Cycling is easy to fit into your daily routine by riding to the shops, park, school or work.</p>
                    <button className='demo-btn'>Live Demo</button>
                </div>
                <div className="img-cotainer">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className='review-container'>
                <h1 style={{ color: 'white' }}>Customers Reviews ({users.length})</h1>

                <div className='user-card'>
                    {
                        newUsers.map(user => <User
                            key={user._id}
                            user={user}
                        ></User>)
                    }
                </div>
                <button className='review-btn' onClick={() => hannleShowAllReviewBtn()}>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;