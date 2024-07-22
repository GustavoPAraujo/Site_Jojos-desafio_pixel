import Link from 'next/link';
import Image from 'next/image';

import styles from './GameCard.module.css';

const GameCard = ({ key, game, image, title }) => {
    return (
        <Link href={`/jogos/${game.slug}`} key={key}>
            <div className={styles.card}>
                <Image src={image} alt={title} className={styles.image} width={360} height={300} />
            </div>
        </Link>
    )
};

export default GameCard;