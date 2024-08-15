import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { useTelegramColorScheme } from './context/TelegramColorSchemeContext'
import Home from './pages/Home'
import PaymentPage from './pages/PaymentPage'
import ReviewsPage from './pages/ReviewsPage'
import Tariffs from './pages/Tariffs'
import './styles/App.scss'

function App() {
	const { isDarkMode } = useTelegramColorScheme()

	if (isDarkMode) {
		document.body.style.backgroundColor = '#000'
	} else {
		document.body.style.backgroundColor = '#fff'
	}

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/tariffs' element={<Tariffs />} />
				<Route path='/reviews' element={<ReviewsPage />} />
				<Route path='/payment' element={<PaymentPage />} />
			</Routes>
			<div className='element-left'></div>
			<div className='element-right'></div>
		</>
	)
}

export default App
