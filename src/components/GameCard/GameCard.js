import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../../sanity';

import styles from './GameCard.module.css';

const GameCard = ({ game }) => {
    return (
        <Link href={`/jogos/${game.slug.current}`} >
            <div className={styles.card}>
                <Image src={urlFor(game.image).url()} alt={game.title} className={styles.image} width={360} height={300} />
            </div>
        </Link>
    )
};

export default GameCard;