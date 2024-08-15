import React from 'react'
import { reviewsData } from '../data/reviewsData'

const ReviewCard = ({ review }) => (
	<div className='bg-white shadow-lg rounded-[25px] p-6 mb-6 relative z-[10]'>
		<div className='flex items-center mb-4'>
			<div className='w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4'>
				{review.name[0]}
			</div>
			<div>
				<h3 className='font-bold text-lg'>{review.name}</h3>
				<p className='text-gray-600'>{review.grade}</p>
				{review.subject && <p className='text-gray-600'>{review.subject}</p>}
			</div>
		</div>
		<p className='text-gray-700'>{review.text}</p>
	</div>
)

const ReviewsPage = () => (
	<div className='bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
		<div className='max-w-7xl mx-auto'>
			<h2 className='text-3xl font-extrabold text-gray-900 text-center mb-12'>
				Отзывы наших учеников
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{reviewsData.map(review => (
					<ReviewCard key={review.id} review={review} />
				))}
			</div>
		</div>
	</div>
)

export default ReviewsPage
