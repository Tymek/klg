import React from 'react'

const Container: React.FC<{ className?: string, fullWidth?: boolean }> = ({ children, fullWidth, ...props }) => (
  <div {...props} className={
    `mx-auto max-w-hd hd:px-4${fullWidth ? '' : ' px-4 sm:px-6 md:px-10'}${
      props.className ? ` ${props.className}` : '' 
    }`}>
    {children}
  </div>
)

export default Container
