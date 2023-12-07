import React, {useState, useMemo} from 'react'
import {Row, Col} from 'antd'
import Label from '../Label'
import Select from '../Select'


type TOption = {
  value: string
  label: string
}

type TSearch = {
  label: {
    text: string
  }
  type: 'single' | 'multi'
  options?: TOption[]
}
const Search = (props: TSearch): JSX.Element => {
  const { label, options, type } = props

  return (
    <div className={'search-component'}>
      <Row gutter={[0, 8]}>
        <Col xs={24}>
          <Label textColor={'black-primary'}>{label.text}</Label>
        </Col>
        <Col xs={24}>
          <Select type={type} options={options}/>
        </Col>
      </Row>
    </div>
  )
}

export default Search
