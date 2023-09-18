import Image from 'next/image'
import React from 'react'
import Logoimage from "../../asset/Logodfd.png"

function Logo(props: any) {
    const { renderDefault, title } = props
    return (
        <div className='flex items-center space-x-1'>
            <Image src={Logoimage} alt="logo" width={100} height={100} className='h-10 w-fit rounded-full' />
        </div>
    )
}

export default Logo