import React, { useState } from 'react'
import { Row, Col, Input } from 'antd'
import Label from "../Label"
import classNames from "classnames"

type TTextArea = {
  label: {
    text: string
  }
  disabled?: boolean
  defaultValue?: string
  onChange?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

const Textarea = (props: TTextArea): JSX.Element => {
  const { label, disabled, defaultValue, onChange, onBlur } = props
  const [textLength, setTextLength] = useState<number>(0)
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const onChangeText = (e: React.FocusEvent<HTMLInputElement>) => {
    setTextLength(e.target.value.length)
    setIsError(e.target.value === 'Typing')
    props.onChange && props.onChange(e)
  }

  return (
    <div className={classNames({
      'text-area-component': true,
      'focus': isFocus,
      'disabled': !!disabled,
      'error': isError
    })}>
      <Row gutter={[0, 8]}>
       <Col xs={24}>
         <Label textColor={disabled ? 'white-quaternary' : 'black-primary'}>{label.text}</Label>
       </Col>
        <Col xs={24}>
          <Input.TextArea
            className={'text-area'}
            maxLength={100}
            placeholder={'Placeholder'}
            style={{ resize: 'none' }}
            disabled={disabled}
            defaultValue={defaultValue}
            onChange={onChangeText}
            onFocus={() => setIsFocus(true)}
            onBlur={(e) => {
              setIsFocus(false)
              props.onBlur && props.onBlur(e)
            }}
            on
          />
        </Col>
        <Col xs={24}>
          <div className={'description-line'}>
            {
              isError ? (
                <div className={'error'}>
                  <img src={'/warning-fill.svg'}/>
                  <span className={'error-text'}>Error nè</span>
                </div>
                )
                : (
                  <span className={'description-text'}>Description</span>
                )
            }
            <span className={'description-text'}>{textLength}/100</span>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Textarea
