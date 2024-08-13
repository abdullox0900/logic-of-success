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
						<Option value='ru'>Русский язык</Option>
						<Option value='en'>Английский язык</Option>
						<Option value='math'>Математика</Option>
						<Option value='socialStudies'>Обществознание</Option>
						<Option value='physics'>Физика</Option>
						<Option value='chemistry'>Химия</Option>
						<Option value='biology'>Биология</Option>
						<Option value='literature'>Литература</Option>
						<Option value='informatics'>Информатика</Option>
						<Option value='geography'>География</Option>
						<Option value='history'>История</Option>
						<Option value='chinese'>Китайский язык</Option>
						<Option value='german'>Немецкий язык</Option>
						<Option value='french'>Французский язык</Option>
						<Option value='spanish'>Испанский язык</Option>
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
						<Option value='basic'>ОГЭ-Эффективный</Option>
						<Option value='standard'>ЕГЭ-Интенсив</Option>
						<Option value='premium'>VIP тариф`</Option>
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
