import Container from '../Container/Container'
import { FaCircleUser } from 'react-icons/fa6'
import { AiOutlineGlobal } from 'react-icons/ai'

export const Header = () => {
	return (
		<header className='py-[20px]'>
			<Container>
				<div className='flex items-center justify-between relative z-10'>
					<div className='flex items-center gap-[10px] px-[10px] py-[5px] blur-effect'>
						<FaCircleUser className='w-[30px] h-[30px]' />
						<div className='flex flex-col'>
							<span className='text-[11px] text-slate-400'>Привет</span>
							<span className='text-[16px] font-semibold'>Abdullox</span>
						</div>
					</div>
					<a
						href='/'
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
