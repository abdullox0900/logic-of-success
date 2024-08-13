import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PaymentPage from './pages/PaymentPage'
import Tariffs from './pages/Tariffs'
import './styles/App.scss'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/tariffs' element={<Tariffs />} />
				<Route path='/payment' element={<PaymentPage />} />
			</Routes>
			<div className='element-left'></div>
			<div className='element-right'></div>
		</>
	)
}

export default App
