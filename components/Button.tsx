import React from 'react'
import Image from 'next/image'

type Buttons = {
    text: string,
    img?: any,
    imgClass?: any,
    design: string,
};
const Button = (buttons: Buttons) => {
    return (
        <button className={`flex gap-4 items-center justify-center rounded-full ${buttons.design}`}>
            <Image
                src={buttons.img}
                height={25}
                width={25}
                alt='any'
                className={buttons.imgClass}
            />
            <p className='font-bold'>{buttons.text}</p></button>
    )
}

export default Button
