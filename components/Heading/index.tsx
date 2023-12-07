import React from 'react'
import classNames from "classnames";

type THeading = {
  className?: string
  level: number
  textClassName?: string
  children: React.ReactNode
}
const Heading = (props: THeading): JSX.Element => {
  const { level, className, textClassName } = props;

  const renderByLevel = (level: number): JSX.Element => {
    switch (level) {
      case 0:
        return (
          <div className={classNames({
            'heading': true,
            [`heading-${level}`]: true,
            [`${className}`]: !!className
          })}>
            <h1 className={textClassName ?? 'black-primary'}>{props.children}</h1>
          </div>
        )
      default:
        return <React.Fragment />
    }
  }

  return renderByLevel(level)
}

export default Heading
