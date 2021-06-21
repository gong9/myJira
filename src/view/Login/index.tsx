/* eslint-disable import/no-anonymous-default-export */

import { Form, Input, Button } from 'antd'
import './index.css'

/**
 * login page
 */

export default () => {
    const onFinish = (values: { username: string, password: string }) => {
        console.log(values)
    }
    return (
        <div className='login'>
            <Form onFinish={onFinish} className='login-form'>
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className='login-submit'>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}