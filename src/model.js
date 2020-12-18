import React from 'react'

export const Model = (props) => {
    const modelContent = props.modelContent ;
    return (
        <div className='alert alert-danger'>
            {modelContent}
        </div>
    )
}
