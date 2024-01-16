import Image from 'next/image';
import React from 'react'

type add_feat = {
    indice: string;
    heading: string;
    about: string;
}

const AddFeat = (features: add_feat) => {
    return (
        <div className='gap-[1.5rem] flex flex-col'>
            <div className='p-4 w-[4rem] rounded-full bg-[#30AF5B] lg:p-8 lg:w-[6rem]'>
                <Image
                    src={features.indice}
                    height={80}
                    width={80}
                    alt='map'
                    className=''
                />
            </div>
            <h3 className='font-bold text-[1.3rem] lg:text-[2rem]'>{features.heading}</h3>
            <p className='text-gray-500 text-[16px] font-[400] lg:text-[17px]'>{features.about}</p>
        </div>
    )
}

export default AddFeat
