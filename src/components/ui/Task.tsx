'use client'

import { useState } from 'react';
import { Button } from './Button';

type TaskProps = {
    title: string,
    description: string,
    imageSource?: string
    isTaskCompleted?: boolean
}

export function Task ( { title, description, imageSource, isTaskCompleted } : TaskProps ) {
    // useState para controlar a conclusão da task
    const [isCompleted, setCompleted] = useState(isTaskCompleted);

    const handleComplete = () => {
        setCompleted(!isCompleted);
    }

    return (
        <div 
            className={`${isCompleted ? 'w-80 h-96 bg-blue-600' : 'w-80 h-100 bg-blue-500'} rounded-lg  p-6 overflow-hidden flex flex-col 
             items-center`}>
            <h2 
                className="font-semibold text-2xl text-white truncate"
                style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}
            >
                { title }
            </h2>
            <p className="text-white mt-2 line-clamp-5 flex-5 pb-4">
                { description }
            </p>
            
            <img src={imageSource} alt={title} className={`${isCompleted ? 'w-20 h-15' : 'w-40 h-30'} pb-4`}/>
            
            <Button label="Complete" variant='secondary' onClick={handleComplete}></Button>
        </div>
    )
};