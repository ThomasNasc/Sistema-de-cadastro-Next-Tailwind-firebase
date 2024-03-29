import React from 'react';

function Titulo(props) {
    return (
        <div className='flex flex-col justify-center text-2xl'>
            <h1 className='px-6 py-2'>{props.children}</h1>
            <hr className='border-2 border-purple-500'/>
        </div>
    );
}

export default Titulo;