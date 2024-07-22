import Link from 'next/link';
import Image from 'next/image';

const GameCard = ({ key, game, image, title }) => {
    return (
        <Link href={`/jogos/${game.slug}`} key={key}>
            <div className={styles.card}>
                <Image src={image} alt={title} width={300} height={225} />
            </div>
        </Link>
    )
};

export default GameCard;