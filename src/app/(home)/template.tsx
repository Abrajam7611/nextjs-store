"use client"

import { Description } from 'app/components/home/Description';
import { Hero } from 'app/components/home/Hero';
import { useEffect } from 'react';

export default function HomeLayout({children}: {children:React.ReactNode}){
    useEffect(()=>{
        console.log('Envio de metricas')
    },[])
    return(
        <div>
            <Hero />
            <Description />
            {children}
        </div>
    )
}