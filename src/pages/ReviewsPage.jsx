import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTelegramColorScheme } from '../context/TelegramColorSchemeContext'
import { reviewsData } from '../data/reviewsData'

const ReviewCard = ({ review }) => {
	const { isDarkMode } = useTelegramColorScheme()

	return (
		<div
			className={`${
				isDarkMode ? 'bg-[#1c1c1e] text-white' : 'bg-white text-black'
			} shadow-lg rounded-[25px] p-6 mb-6 relative z-[10]`}
		>
			<div className='flex items-center mb-4'>
				<div className='w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4'>
					{review.name[0]}
				</div>
				<div>
					<h3
						className={`${
							isDarkMode ? 'text-white' : 'text-black'
						} font-bold text-lg`}
					>
						{review.name}
					</h3>
					<p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} `}>
						{review.grade}
					</p>
					{review.subject && (
						<p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} `}>
							{review.subject}
						</p>
					)}
				</div>
			</div>
			<p className={`${isDarkMode ? 'text-white' : 'text-gray-600'} `}>
				{review.text}
			</p>
		</div>
	)
}

const ReviewsPage = () => {
	const { isDarkMode } = useTelegramColorScheme()

	const navigate = useNavigate()

	useEffect(() => {
		const tg = window.Telegram.WebApp

		tg.BackButton.show()

		tg.BackButton.onClick(() => {
			navigate(-1)
		})

		return () => {
			tg.BackButton.hide()
		}
	}, [])

	return (
		<div className=' py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<h2
					className={`${
						isDarkMode ? 'text-white' : 'text-black'
					} relative z-[10] text-3xl font-extrabold text-center mb-12`}
				>
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
}

export default ReviewsPage
