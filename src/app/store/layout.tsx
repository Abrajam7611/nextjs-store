import React from "react";

export default function Layouy({children}: {children: React.ReactNode}) {
    return(
        <main>
            <nav>
                Navegación de las categorías
                {children}
            </nav>
        </main>
    )
}