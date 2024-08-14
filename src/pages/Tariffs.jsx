import { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

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
		<div className='h-screen flex flex-col justify-center items-center relative z-10'>
			<div className='text-[25px] mb-[20px]'>В скором времени</div>
			<NavLink
				to={'/'}
				className={'text-[16px] p-[10px] bg-white rounded-[15px]'}
			>
				Home
			</NavLink>
		</div>
	)
}

export default Tariffs
