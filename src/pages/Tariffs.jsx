import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CourseCard from '../components/CourseCard/CourseCard'
import { useTelegramColorScheme } from '../context/TelegramColorSchemeContext'
import { coursesData } from '../data/courses'

const Tariffs = () => {
	const navigate = useNavigate()

	const { isDarkMode } = useTelegramColorScheme()

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
		<div className='flex flex-col justify-center items-center relative z-[5] py-12'>
			<h2
				className={`${
					isDarkMode ? 'text-white' : 'text-black'
				} text-3xl font-extrabold text-center mb-6`}
			>
				Тарифы обучения
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
				{coursesData.map(course => (
					<CourseCard key={course.id} course={course} />
				))}
			</div>
		</div>
	)
}

export default Tariffs
