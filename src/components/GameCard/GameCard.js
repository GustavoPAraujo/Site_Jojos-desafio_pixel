import Link from 'next/link';
import Image from 'next/image';

import styles from './GameCard.module.css';

const GameCard = ({ id, game, image }) => {
    return (
        <Link href={`/jogos/${game.slug.current}`} >
            <div className={styles.card}>
                <Image src={image} alt={game.title} className={styles.image} width={360} height={300} />
            </div>
        </Link>
    )
};

export default GameCard;