import {
	DollarOutlined,
	GlobalOutlined,
	PhoneOutlined,
	UploadOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Button, Form, Input, Select, Upload, message } from 'antd'
import axios from 'axios'
import { useState } from 'react'

const { Option } = Select

const PaymentPage = () => {
	const [form] = Form.useForm()
	const [loading, setLoading] = useState(false)

	const onFinish = async values => {
		setLoading(true)
		try {
			const formData = new FormData()
			for (const name in values) {
				if (name === 'image') {
					formData.append(name, values.image[0].originFileObj)
				} else {
					formData.append(name, values[name])
				}
			}

			// Замените URL на ваш реальный API endpoint
			const response = await axios.post(
				'https://api.example.com/register',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			)

			console.log('Ответ:', response.data)
			message.success('Данные успешно отправлены!')
			form.resetFields()
		} catch (err) {
			console.error('Ошибка:', err)
			message.error('Произошла ошибка. Пожалуйста, попробуйте еще раз.')
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
						<Option value='ru'>Русский</Option>
						<Option value='uz'>Узбекский</Option>
						<Option value='en'>Английский</Option>
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
						<Option value='basic'>Базовый</Option>
						<Option value='standard'>Стандартный</Option>
						<Option value='premium'>Премиум</Option>
					</Select>
				</Form.Item>

				<Form.Item
					name='image'
					label='Изображение'
					valuePropName='fileList'
					getValueFromEvent={e => {
						if (Array.isArray(e)) {
							return e
						}
						return e && e.fileList
					}}
				>
					<Upload
						name='image'
						listType='picture'
						maxCount={1}
						style={{ width: '100%', height: '55px' }}
						beforeUpload={() => false}
					>
						<Button icon={<UploadOutlined />}>Выберите изображение</Button>
					</Upload>
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
