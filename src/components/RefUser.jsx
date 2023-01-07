import React, { forwardRef } from 'react'

const RefUser = (props,refupdate) => {
  return (
    <>
    <div>
      <input type="text" ref={refupdate}/>
    </div>
    </>
  )
}

export default forwardRef(RefUser);
