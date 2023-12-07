import React from 'react'
import {Col, Row} from 'antd'
import Label from "../Label";
import lodash from 'lodash'
import Select from '../Select'

type TOption = {
  label: string
  value: string
}

type TInputType = {
  options?: TOption[]
  size?: {
    xs?: number | object
    sm?: number | object
    md?: number | object
    lg?: number | object
    xl?: number | object
    xxl?: number | object
  }
}

interface TTextField {
  label: {
    text: string
  }
  inputTypes: TInputType | TInputType[]
}
const TextField = (props: TTextField): JSX.Element => {
  const { label, inputTypes } = props

  const renderInputs = (inputTypes: TInputType | TInputType[]): JSX.Element => {
    if (!lodash.isArray(inputTypes)) {
      return (
        <Select type={'single'} options={inputTypes.options}/>
      )
    }

    return (
      <Row
        gutter={{
          xs: 16,
          sm: 24,
          lg: 32
        }}>
        {
          inputTypes.map((input, index) => {
            return (
              <Col key={index} {...input.size}>
                <Select type={'single'} options={input.options}/>
              </Col>
            )
          })
        }
      </Row>
    )
  }

  return (
    <Row gutter={[0, 8]}>
      <Col xs={24}>
        <Label textColor={'black-primary'}>{label.text}</Label>
      </Col>
      <Col xs={24}>
        {renderInputs(inputTypes)}
      </Col>
    </Row>
  )
}

export default TextField
