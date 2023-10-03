import React, { useState } from 'react';
import './Pagination.css'

export default function Pagination({ page, setPage, max }) {

    const [input, setInput] = useState(1);

    const nextPage = () => {
        setInput(parseInt(input) + 1)
        setPage(parseInt(page) + 1)
    };

    const previousPage = () => {
        setInput(parseInt(input) - 1);
        setPage(parseInt(page)- 1)
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            setPage(parseInt(e.target.value))

            if (parseInt(e.target.value < 1) ||
                parseInt(e.target.value) > Math.ceil(max) ||
                isNaN(parseInt(e.target.value))
            ) {
                setPage(1)
                setInput(1)
            } else {
                setPage(parseInt(e.target.value))
            }
        }
    }

    const onChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className='pagination'>
            <button disabled={page === 1 || page < 1} className='btn' onClick={previousPage}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="btn-prev">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <input className='input-pagination' onChange={(e) => onChange(e)} onKeyDown={(e) => onKeyDown(e)} name='page' autoComplete='off' type='text' value={input} />
            <p className='pg'>of 4</p>
            <button disabled={page === Math.ceil(max) || page > Math.ceil(max)} className='btn' onClick={nextPage}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="btn-next">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    )
}
