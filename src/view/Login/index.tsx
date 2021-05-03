
import { Form, Input, Button } from 'antd'
//注册及登录页面
export default () => {
    const onFinish = (values: { username: string, password: string }) => {
        console.log(values)
    }
    return (
        <div>
            <Form onFinish={onFinish}>
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
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}