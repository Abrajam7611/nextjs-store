"use client"

import { useEffect } from "react";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({error, reset}: ErrorProps){
    useEffect(() => {
        console.log(error)
    }, [])

    return (
        <div style={{
            padding: '10 rem',
        }}>
            <h1>:c</h1>
            <p> Valio el sitio... </p>
            <button onClick={reset}> Intentar de nuevo</button>
        </div>
    )
}