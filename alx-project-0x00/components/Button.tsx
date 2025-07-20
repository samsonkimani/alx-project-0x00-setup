import React from "react";

interface CardButton{
    title: string
    styles?: string 
}

const Button:React.FC<CardButton> = ({title, styles}) => {
    return (
        <button className={`bg-blue-600 text-white px-4 py-2 ${styles}`}>{title}</button>
    )
}

export default Button