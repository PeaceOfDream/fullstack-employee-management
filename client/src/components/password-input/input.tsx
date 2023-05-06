import { Form, Input } from 'antd'
import { NamePath } from 'antd/es/form/interface';
import React from 'react'

type Props= {
	name: string
	placeholder: string
	dependencies?: NamePath[]
}

export const PasswordInput = ({ name, placeholder, dependencies }:Props) => {
  return (
    <Form.Item
	 name={name}
	 dependencies={dependencies}
	 hasFeedback
	 rules={[{required: true}]}
	 >
      <Input.Password placeholder={placeholder} size='large' />
    </Form.Item>
  );
};
