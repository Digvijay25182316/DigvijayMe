import Image from 'next/image'
import React from 'react'

function Logo(props: any) {
    const { renderDefault, title } = props
    return (
        <div className='flex items-center space-x-1'>
            <Image src={"https://res.cloudinary.com/dko1ffxgt/image/upload/v1694706987/LogoNectar_tp0epb.png"} alt="logo" width={100} height={100} className='h-10 w-10 rounded-full' />
            <>{renderDefault(props)}</>
        </div>
    )
}

export default Logo