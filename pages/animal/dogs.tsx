import Image from 'next/image'

import styles from '../../styles/dogs.module.css'

function Demo() {


    return <div className={styles.dogs}> {/* test use style css module */}
        <h1>
            Hello Dog
            <Image src="/images/dog.png" alt="" height={100} width={100} />

        </h1>
    </div>

}

export default Demo;