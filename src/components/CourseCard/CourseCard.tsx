import { useState } from 'react'
import { useTelegramColorScheme } from '../../context/TelegramColorSchemeContext'

const CourseCard = ({ course }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => setIsModalOpen(!isModalOpen)

    const { isDarkMode } = useTelegramColorScheme()

    return (
        <div>
            <div className={`${isDarkMode ? 'bg-[#1c1c1e] text-white' : 'bg-white text-black'} rounded-[25px] shadow-md p-6 max-w-sm mx-auto`}>
                <h2 className="text-xl font-bold mb-2 text-center">"{course?.name}"</h2>
                <p className="text-gray-600 mb-4 text-center">({course.type})</p>

                <div className="mb-4 text-center">
                    <span className="line-through text-gray-400 text-lg">{course.originalPrice} ₽</span>
                    <p className="text-3xl font-bold">{course.currentPrice} ₽</p>
                </div>

                <button
                    onClick={toggleModal}
                    className="w-full text-purple-600 font-semibold flex items-center justify-center hover:text-purple-700 transition-colors"
                >
                    Подробнее
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className={`${isDarkMode ? 'bg-[#1c1c1e] text-white' : 'bg-white text-black'} rounded-lg p-6 max-w-md w-full`}>
                        <h3 className="text-xl font-bold mb-4">Подробная информация</h3>
                        <ul className="space-y-2 mb-4">
                            {course.details.map((detail, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="w-5 h-5 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className={`${isDarkMode ? 'text-slate-300' : 'text-black'}`}>{detail}</span>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={toggleModal}
                            className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition-colors"
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CourseCard