import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CourseCard from '../components/CourseCard/CourseCard'
import { coursesData } from '../data/courses'

const Tariffs = () => {
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
		<div className='flex flex-col justify-center items-center relative z-[5]'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
				{coursesData.map(course => (
					<CourseCard key={course.id} course={course} />
				))}
			</div>
		</div>
	)
}

export default Tariffs
