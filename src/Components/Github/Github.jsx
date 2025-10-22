import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()

    return (
        <div className='bg-gray-600 text-white text-center text-2xl p-4'>
        Github followers: {data.followers}
        <div className='flex justify-center mt-4'>
            <img className='w-40' src={data.avatar_url} alt='Git picture' />
        </div>
    </div>
    );
}

export default Github

export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/darshanasharma48')
   return response.json()
}


