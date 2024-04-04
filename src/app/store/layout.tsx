import React from "react";

export default function Layout({children}: {children: React.ReactNode}) {
    return(
        <main>
            <nav>
                Navegación de las categorías
                {children}
            </nav>
        </main>
    )
}