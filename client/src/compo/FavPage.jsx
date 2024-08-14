import React from 'react';
import { Star } from 'lucide-react';
import {Card} from './Card';
import { Link } from 'react-router-dom';

export const FavPage = () => {
  return (
    <>
        <div className="w-screen h-auto flex flex-col items-center border-2 border-black">
            <div className="mt-4 h-20 flex font-serif  border-black">
                <Star className='mt-9 text-yellow-700 mr-1' size={29}/>
                <div className="mt-8 text-4xl text-yellow-600 font-bold underline">F@vour!tes </div>
                <Link to="/" className="absolute right-64 top-28 mt-1 font-semibold text-lg  px-4 py-0.5  rounded-lg text-white bg-gray-600  active:px-2 active:mr-1 active:py-0 active:mb-0.5">Back</Link>
            </div>
            <div className="w-4/5 h-auto  border-black">
                <div className="grid grid-cols-3 gap-4 ml-20 mt-4 rounded-xl">
                    <Card />
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    </>
  )
}
