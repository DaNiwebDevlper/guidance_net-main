import React from 'react'

const AddButton = ({ text, onClick }) => {
    return (
        <div className="h-[70px] bg-slate-100 w-full flex justify-end pr-5 items-center">
            <button className=' active:scale-95 transition-all flex justify-center items-center rounded-lg  bg-rose-500 text-slate-50 h-fit w-fit px-4 py-2 gap-2 uppercase' onClick={onClick}>{text}</button>
        </div>
    )
}

export default AddButton