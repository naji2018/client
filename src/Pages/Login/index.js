import React from "react";
import { Button, Form, Input } from "antd";

function Login() {
  return (
    <div className="h-screen  flex justify-center items-center">
      <div className="bg-white p-5 rounded w-[450px]">
        <h1 className="text-primary text-2xl">
          Insert-<span className="text-gray-400 text-2xl">LOGIN</span>
        </h1>

        <Form layout="vertical">
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" placeholder="Password" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block className="mt-2">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
