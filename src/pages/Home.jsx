import { NavLink } from 'react-router-dom'
import ImgMoney from '../assets/img/dollar-money.png'
import ImgIsometric from '../assets/img/isometric.png'
import ImgWorking from '../assets/img/working.png'
import Container from '../components/Container/Container'
// import Footer from '../components/Footer/Footer'
import { useTelegramColorScheme } from '../context/TelegramColorSchemeContext'

const Home = () => {
	const { isDarkMode } = useTelegramColorScheme()

	return (
		<div>
			<Container>
				<h1
					className={`${
						isDarkMode ? 'text-white' : 'text-black'
					} pt-[50px] pb-[30px] text-[30px] relative z-[10] text-center font-semibold`}
				>
					Добро пожаловать в Логику Успеха! 🙂
				</h1>

				<div className='flex gap-[10px] items-center relative z-[10] text-start'>
					<div className='flex flex-col gap-[10px] w-[60%]'>
						<NavLink
							to='/tariffs'
							className={`${
								isDarkMode ? 'bg-[#1c1c1e] text-white' : 'bg-white text-black'
							} flex relative overflow-hidden items-center p-[20px] h-[100px] text-[18px] rounded-[15px]`}
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
							to='/reviews'
							className={`${
								isDarkMode ? 'bg-[#1c1c1e] text-white' : 'bg-white text-black'
							} flex items-center relative overflow-hidden p-[20px] w-full h-[100px] text-[18px] rounded-[15px]`}
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
						to='/payment'
						className={`${
							isDarkMode ? 'bg-[#1c1c1e] text-white' : 'bg-white text-black'
						} flex w-[40%] items-center relative overflow-hidden justify-center money p-[20px] h-[210px] text-[18px] rounded-[15px]`}
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
			{/* <Footer /> */}
		</div>
	)
}

export default Home
