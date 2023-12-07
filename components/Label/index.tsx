import React from 'react'
import classNames from "classnames";

type TLabel = {
  textColor?: string
  children: React.ReactNode
}

const Label = (props: TLabel): JSX.Element => {
  const { textColor } = props

  const textColorClassName = textColor ?? 'black-primary'
  return (
    <span
      className={classNames({
        [`${textColorClassName}`]: true,
        'label': true
      })}
    >
      {props.children}
    </span>
  )
}

export default Label
