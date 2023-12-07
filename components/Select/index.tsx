import React, {useMemo, useState} from 'react'
import {Col, Row, Select} from 'antd'

type TOption = {
  value: string
  label: string
}

type TSelect = {
  type: 'single' | 'multi'
  options?: TOption[]
}

const SelectComp = (props: TSelect): JSX.Element => {
  const { type, options } = props
  const [values, setValues] = useState<TOption[]>([])

  const handleChange = (value: string, option: TOption) => {
    // Handle single
    if (type === 'single') {
      const opt = options?.find((v: TOption) => v.value === option.value)?.label
      setValues([{
        label: opt || '',
        value: option.value
      }])
      return
    }
    // Handle multi
    const vals = [...values]
    const opt = options?.find((v: TOption) => v.value === option.value)?.label
    vals.push({
      label: opt || '',
      value: option.value
    })
    setValues(vals)
  }

  const valuesMemo = useMemo<any>(() => {
    if (type === 'single') {
      if (values && values.length > 0) {
        return values[0].value
      }
      return null
    }
    return null
  }, [type, values])

  const deleteValues = (index: number) => {
    const vals = [...values]
    vals.splice(index, 1)
    setValues(vals)
  }

  return (
    <Row gutter={[0, 8]}>
      <Col xs={24}>
        <Select
          value={valuesMemo}
          placeholder={'Placeholder'}
          onChange={handleChange}
        >
          {
            options &&
            options.map(opt =>
              <Select.Option key={opt.value} value={opt.value}>{opt.label}</Select.Option>
            )
          }
        </Select>
      </Col>
      <Col xs={24}>
        <Row gutter={[8, 8]}>
          {
            type !== 'single' && values.map((val, index) => {
              return (
                <Col xs={6} key={val.value}>
                  <div className={'badge'} onClick={() => deleteValues(index)}>
                    <span>{val.label}</span>
                    <div className={'btn-delete'}>
                      <img src={'/x-thin.svg'} alt={'alt'}/>
                    </div>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Col>
    </Row>
  )
}

export default SelectComp
