import { ChatAlt2Icon } from '@heroicons/react/solid';
import './ReviewCard.css';

const ReviewCard = ({ reviewItem }) => {
    const { review, img, name, rating } = reviewItem;
    return (
        <div className="review-card border-t-4 border-blue-600 shadow-lg p-6 relative">
            <div>
                <p><ChatAlt2Icon className='w-10 h-10 text-center my-4' /></p>
                <p>{review} </p>
                <p className="text-xl font-medium">Rating: {rating}</p>
            </div>
            <div className="flex items-center absolute bottom-8">
                <img className="w-20 h-20 border-2 rounded-full" src={img} alt="" />
                <div className='ml-6'>
                    <p className="text-xl font-semibold">{name}</p>
                    <p>Honourable Customer</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;