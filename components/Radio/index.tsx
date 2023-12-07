import React from 'react'
import { Row, Col, Radio, Space } from 'antd'
import Label from "../Label";

type TRadioOption = {
  label: string
  value: string
}

type TRadio = {
  label: {
    text: string
  }
  direction?: 'horizontal' | 'vertical'
  options: TRadioOption[]
}

const RadioCus = (props: TRadio): JSX.Element => {
  const { label, options } = props
  return (
    <div className={'radio-pane'}>
      <Row gutter={[0, 8]}>
        <Col xs={24}>
          <Label textColor={'black-primary'}>{label.text}</Label>
        </Col>
        <Col xs={24}>
          <Radio.Group className={'radio-component'}>
            <Space size={8} direction={props.direction || 'vertical'}>
              {
                options.map(opt => {
                  return (
                    <Radio value={opt.value}>{opt.label}</Radio>
                  )
                })
              }
            </Space>
          </Radio.Group>
        </Col>
      </Row>
    </div>
  )
}

export default RadioCus
