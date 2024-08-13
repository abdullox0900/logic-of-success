import { NavLink } from 'react-router-dom'

const Tariffs = () => {
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
