import React from 'react'

const Container: React.FC<{ className?: string }> = ({ children, ...props }) => (
  <div {...props} className={
    `mx-auto px-4 max-w-5xl py-4 sm:px-6 md:px-10${
      props.className ? ` ${props.className}` : '' 
    }`}>
    {children}
  </div>
)

export default Container
