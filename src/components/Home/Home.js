import img from '../../images/electriccar.jpg';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import useReview from '../../hooks/useReview';
import ReviewCard from '../ReviewCard/ReviewCard';

const Home = () => {
    let [reviews, setReviews] = useReview([]);
    if (reviews.length > 3) {
        reviews = reviews.slice(reviews.length - 3);
        setReviews(reviews);
    };

    // const seeReviews = () => {
    //     const navigate = useNavigate();
    //     navigate('/reviews');
    // }

    return (
        <div>
            <div className='flex justify-between items-center ml-20'>
                <div className="hero-box w-1/2 mr-8">
                    <h1 className='text-6xl font-bold'>Say Hello to The Best <br /> Car Review Platform</h1>
                    <p className='text-xl my-4'>For finding the best features and functionality electric car, you can visit this electric car features platform. Here We are with the best funtionality with affordable prices.</p>
                    <button className='bg-blue-500 p-4 rounded text-lg my-4 flex justify-between items-center duration-500 hover:bg-blue-700'>
                        <span>Buy now</span>
                        <ShoppingCartIcon className='w-6 h-6 ml-4' /> </button>
                </div>
                <div className="hero-img w-1/2">
                    <img className='rounded-bl-3xl h-50' src={img} alt="" />
                </div>
            </div>
            <div className='mx-20 my-10'>
                <div className='text-center py-6'>
                    <h2 className='text-4xl text-center font-semibold'>Trusted By the Largest Product</h2>
                    <p className='text-md my-3'>Product withmillion of users were made better with this car.</p>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        reviews.map(review => <ReviewCard reviewItem={review} key={review.id} />)
                    }
                </div>
                <div className='py-20'>
                    <button className='mx-auto block bg-blue-500 py-4 px-6 rounded-lg duration-700 hover:bg-blue-700'>See All Reviews</button>
                </div>
            </div>
        </div>
    );
};

export default Home;