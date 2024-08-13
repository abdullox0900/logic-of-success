import {
	DollarOutlined,
	GlobalOutlined,
	PhoneOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Button, Form, Input, notification, Select } from 'antd'
import axios from 'axios'
import { useState } from 'react'

const { Option } = Select

const PaymentPage = () => {
	const [form] = Form.useForm()
	const [loading, setLoading] = useState(false)

	const onFinish = async values => {
		setLoading(true)
		console.log({
			name: values.name,
			phone: values.phoneNumber,
			tariff: values.tariff,
			lang: values.language,
		})

		try {
			const response = await axios.post(
				'http://localhost:3000/send-to-telegram',
				{
					name: values.name,
					phone: values.phoneNumber,
					tariff: values.tariff,
					lang: values.language,
				}
			)

			console.log('Ответ:', response.data)
			notification.success({
				message: 'Успех',
				description: 'Ваши данные успешно отправлены в Telegram!',
				duration: 5,
			})
			form.resetFields()
		} catch (err) {
			console.error('Ошибка:', err)
			notification.error({
				message: 'Ошибка',
				description:
					'Произошла ошибка при отправке данных. Пожалуйста, попробуйте еще раз.',
				duration: 5,
			})
		} finally {
			setLoading(false)
		}
	}

	return (
		<div>
			<h4 className='text-center my-[30px] text-[28px] font-semibold'>
				Оплата
			</h4>
			<Form
				form={form}
				name='payment'
				onFinish={onFinish}
				layout='vertical'
				className='relative z-[10] bg-white px-[10px] py-[30px] rounded-[25px]'
			>
				<Form.Item
					name='name'
					label='Имя'
					rules={[{ required: true, message: 'Пожалуйста, введите ваше имя!' }]}
				>
					<Input
						className='h-[55px]'
						prefix={<UserOutlined />}
						placeholder='Ваше имя'
					/>
				</Form.Item>

				<Form.Item
					name='phoneNumber'
					label='Номер телефона'
					rules={[
						{ required: true, message: 'Пожалуйста, введите номер телефона!' },
						{
							pattern: /^\+[1-9]\d{1,14}$/,
							message: 'Неправильный формат номера телефона!',
						},
					]}
				>
					<Input
						className='h-[55px]'
						prefix={<PhoneOutlined />}
						placeholder='+7 999 123 45 67'
					/>
				</Form.Item>

				<Form.Item
					name='language'
					label='Язык'
					rules={[{ required: true, message: 'Пожалуйста, выберите язык!' }]}
				>
					<Select
						className='h-[55px]'
						placeholder='Выберите язык'
						prefix={<GlobalOutlined />}
					>
						<Option value='Русский язык'>Русский язык</Option>
						<Option value='Английский язык'>Английский язык</Option>
						<Option value='Математика'>Математика</Option>
						<Option value='Обществознание'>Обществознание</Option>
						<Option value='Физика'>Физика</Option>
						<Option value='Химия'>Химия</Option>
						<Option value='Биология'>Биология</Option>
						<Option value='Литература'>Литература</Option>
						<Option value='Информатика'>Информатика</Option>
						<Option value='География'>География</Option>
						<Option value='История'>История</Option>
						<Option value='Китайский язык'>Китайский язык</Option>
						<Option value='Немецкий язык'>Немецкий язык</Option>
						<Option value='Французский язык'>Французский язык</Option>
						<Option value='Испанский язык'>Испанский язык</Option>
					</Select>
				</Form.Item>

				<Form.Item
					name='tariff'
					label='Тариф'
					rules={[{ required: true, message: 'Пожалуйста, выберите тариф!' }]}
				>
					<Select
						className='h-[55px]'
						placeholder='Выберите тариф'
						prefix={<DollarOutlined />}
					>
						<Option value='ОГЭ-Эффективный'>ОГЭ-Эффективный</Option>
						<Option value='ЕГЭ-Интенсив'>ЕГЭ-Интенсив</Option>
						<Option value='VIP тариф'>VIP тариф</Option>
					</Select>
				</Form.Item>

				<Form.Item>
					<Button
						type='primary'
						className='h-[55px] w-full'
						htmlType='submit'
						loading={loading}
					>
						Отправить
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default PaymentPage
