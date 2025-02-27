"use client";

import Image from 'next/image';
import { CustomButtonProps } from '@/types';


const CustomButton = ({title,containerStyles,handleClick,btnType, textStyles, rigthIcon, isDisabled}: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>
              {title} 
            </span>
            {rigthIcon && (
            <div className='relative w-6 h-6'>
              <Image src={rigthIcon} 
              alt="right Icon"
              fill
              className="object-contain"
              />
            </div>  
            )}
    </button>
  )
}

export default CustomButton