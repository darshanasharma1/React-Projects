import React from 'react';
import { useParams } from 'react-router-dom';

function User(){
    const {userid} = useParams()
        return (
            <div className='bg-gray-400 w-full h-full p-4 py-9 text-white text-center text-2xl'>User:{userid} </div>
        );

}
 


export default User;