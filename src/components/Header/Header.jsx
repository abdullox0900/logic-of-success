import { AiOutlineGlobal } from 'react-icons/ai'
import { FaCircleUser } from 'react-icons/fa6'
import { useTelegram } from '../../context/TelegramUserContext'
import Container from '../Container/Container'

export const Header = () => {
	const { user } = useTelegram()

	return (
		<header className='py-[20px]'>
			<Container>
				<div className='flex items-center justify-between relative z-10'>
					<div className='flex items-center gap-[10px] px-[10px] py-[5px] blur-effect'>
						<FaCircleUser className='w-[30px] h-[30px]' />
						<div className='flex flex-col'>
							<span className='text-[11px] text-slate-400'>Привет</span>
							<span className='text-[16px] font-semibold'>
								{user?.first_name ? user?.first_name : 'username'}
							</span>
						</div>
					</div>
					<a
						href='https://logschool.ru/'
						className='flex items-center gap-[10px] px-[10px] py-[5px] blur-effect'
					>
						<AiOutlineGlobal className='w-[30px] h-[30px]' />
						<div className='flex flex-col'>
							<span className='text-[11px] text-slate-400'>Наш сайт</span>
							<span className='text-[16px] font-semibold'>LogSchoolRu</span>
						</div>
					</a>
				</div>
			</Container>
		</header>
	)
}
