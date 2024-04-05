import Image from 'next/image'
import styles from './Description.module.sass'


export const Description = () => {

    return (
        <section className={styles.Description}>
            <Image

            src="/images/description.jpeg"

            alt="products marketplace"

            width={500}

            height={300}
            />

            <div className={styles.Description__text}>
            <h2>Bring the future today</h2>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga officiis modi repellat obcaecati, reprehenderit delectus vitae. Vel assumenda dolore amet magnam officiis alias consequuntur eveniet, magni adipisci totam exercitationem aut!</p>
            </div>
        </section>
    )
}