import useReview from '../../hooks/useReview';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews] = useReview([]);
    return (
        <div className='mx-20 my-10'>
            <div className='text-center py-6'>
                <h2 className='text-4xl text-center font-semibold'>Trusted By the Huge Reviews</h2>
                <p className='text-md my-3'>Product withmillion of users were made better with this car.</p>
            </div>
            <div className='grid grid-cols-3 gap-10'>
                {
                    reviews.map(review => <ReviewCard key={review.id} reviewItem={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;