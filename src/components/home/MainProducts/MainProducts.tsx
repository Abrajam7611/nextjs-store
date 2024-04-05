"use client";

export const MainProducts = ()=>{
    console.log( "variable de entorno",process.env.SHOPIFY_HOSTNAME)
    return (
        <section>
            <h1>MainProducts</h1>
        </section>
    )
}