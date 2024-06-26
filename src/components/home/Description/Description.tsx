"use client"
import classNames from 'classnames/bind'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Description.module.sass'

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCACCAIIDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAMEAgEFBv/EABwQAQEBAQEBAQEBAAAAAAAAAAACAQMREiExQf/EABgBAQEBAQEAAAAAAAAAAAAAAAIDAQAE/8QAGREBAQEBAQEAAAAAAAAAAAAAAAECEQMS/9oADAMBAAIRAxEAPwD4QN+OeLx1Ydd8HisTsdkyWMMnCA2DoLjDoxLRRucMzHJwzJQ0pGfGdN+WdkCJom1FYTeKZGp6L028L16Mp1kDwEweObhvy5uPPK9FhXjnhm454rmhY5mGxjOYbGGnYZzxREl85UxP8T052JNyWok2YR0UpPyzUqvhioDhdR3Ke5XdJTdMPLEV4VuKOmEVi0osB3wF13D/ABncN3Gdx5pXp4TuOeGbjPiuaNjk4dGFzh/PFOp2Hc8V85/COWK+UsoU3nJ0yOcnzKVZ0r4YqVWyXcg7qHpKTrL0Oso+2NhPP64npX1S2pK4sAN63izcZ3G9Z1549JVM63TCuWV2T+ZE/wBUc1YnYq5Yt5Yj5LeTKlYq55+Hzn4Vz/iiQoOeF3h5dg5H1xF2z+r+qHt/rmx5/bP6ktZ2/wBR3v6UOFgBzVu6xWubrNanF+uVrG6K1j1TLjJ1Ry1LOn89UGxfx1bx15/HVvHWVKxfz0+d/EvOj50anTfWL0fRd0Ak9UHfVnXUPfXFEXZH0VdtR3rTjPocDXHfTNUX9M7TOKTTdUx9MbTn0UhSnTp/PUk0fzoiehypZyp5vKlnKhtTsejzo+aQ87PmxtTsVfRd0VtsXbA451pF2o7pSTtTmJuupL39P66mvSLrnoZDuO6X9ubZH2NpT5ZNG7Tn0V9D6dxXNUTR3Okk0bFDVov5Ur5287nSnnYWusejFnTaCLOmx6nYr+2Ksj7Zq2dTsa6Wm607dp+lHApfTU9aZ0oitOQej0M+hvHdQ/Q+ivXfVeI50Z9O5pWa1mjY9OKfOmxqedNjU69WVcUoikcafGpU+LIozKSzpuaAWH/TO0X65utiWo7dEXrVaVWqRHRd6Vut0XqsToDPoaPXmu4Aqnl1vAAr1ebcmwAlp68nwfACNUOkyQACtOaA2I6LoqwFco6JovQFYlXAATH/2Q=='


export const Description = () => {
    const [hasBorder, setBorder] = useState(false);
    const handleClick = () => setBorder(!hasBorder);
    const cx = classNames.bind(styles);
    const buttonStyles = cx('Description__button',{
        'Description__button--border':hasBorder,
})

    return (
        <section className={styles.Description}>
        <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
            
            <Image
        src="/images/description.jpeg"
        alt="products marketplace"
        fill
        placeholder='blur'
        blurDataURL={PLACEHOLDER_IMAGE}
        />
        </div>
        </button>
            <div className={styles.Description__text}>
            <h2>Bring the future today</h2>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga officiis modi repellat obcaecati, reprehenderit delectus vitae. Vel assumenda dolore amet magnam officiis alias consequuntur eveniet, magni adipisci totam exercitationem aut!</p>
        </div>
        </section>
    )
}