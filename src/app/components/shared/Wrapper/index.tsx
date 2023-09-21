import React, {FC} from 'react'

const Wrapper: FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className='max-w-[90%] mx-auto px-2 md:px-6'>
        {children}
    </div>
  )
}

export default Wrapper