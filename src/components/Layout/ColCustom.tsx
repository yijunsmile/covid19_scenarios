import React from 'react'

import { Col } from 'reactstrap'
import type { ColProps as ReactstrapColProps } from 'reactstrap/lib/Col'

export interface ColProps extends Omit<ReactstrapColProps, 'ref'> {
  readonly xxl?: number
}

function ColCustom({ xxl, children, ...restProps }: ColProps) {
  return (
    <Col widths={['xs', 'sm', 'md', 'lg', 'xl', 'xxl']} {...restProps}>
      {children}
    </Col>
  )
}

export { ColCustom }