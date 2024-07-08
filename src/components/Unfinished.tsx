"use client";

import React from 'react';
import { Construction } from 'lucide-react';

export default function Unfinished() {
    return (
        <div className="flex flex-col justify-start items-center">
            <Construction size={64} className='mt-20'/>
            <h2>Esta página está em construção...</h2>
        </div>
    );
}