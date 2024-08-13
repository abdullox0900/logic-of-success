import { NavLink } from 'react-router-dom'
import Container from '../components/Container/Container'
import { Header } from '../components/Header/Header'
import ImgMoney from '../assets/img/dollar-money.png'
import ImgWorking from '../assets/img/working.png'
import ImgIsometric from '../assets/img/isometric.png'
import Footer from '../components/Footer/Footer'

const Home = () => {
	return (
		<div>
			<Header />
			<Container>
				<h1 className='pt-[50px] pb-[30px] text-[30px] relative z-[10] text-center font-semibold'>
					Добро пожаловать в Логику Успеха! 🙂
				</h1>

				<div className='flex gap-[10px] items-center relative z-[10] text-start'>
					<div className='flex flex-col gap-[10px] w-[60%]'>
						<NavLink
							to='/tariffs'
							className='flex relative overflow-hidden items-center p-[20px] h-[100px] bg-white text-black text-[18px] rounded-[15px]'
						>
							<span className='font-bold w-[150px]'>
								Ознакомление с тарифами
							</span>
							<img
								className='absolute right-[-15%] w-[120px]'
								src={ImgWorking}
								alt=''
							/>
						</NavLink>
						<NavLink
							to='/tariffs'
							className='flex items-center relative overflow-hidden p-[20px] w-full h-[100px] bg-white text-black text-[18px] rounded-[15px]'
						>
							<span className='font-bold w-[150px]'>Отзывы</span>
							<img
								className='absolute right-[-15%] w-[120px]'
								src={ImgIsometric}
								alt=''
							/>
						</NavLink>
					</div>
					<NavLink
						to='/'
						className='flex w-[40%] items-center relative overflow-hidden justify-center money p-[20px] h-[210px] bg-white text-black text-[18px] rounded-[15px]'
					>
						<span className='absolute top-[20%] left-[10%] text-[24px] font-bold w-[100px] text-green-500 leading-[20px]'>
							Оплата <br />
							<span className='text-[14px] text-gray-500 font-thin'>
								за тариф
							</span>
						</span>
						<img className='absolute right-[-50%]' src={ImgMoney} alt='' />
					</NavLink>
				</div>
			</Container>
			<Footer />
		</div>
	)
}

export default Home
