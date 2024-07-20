
import styles from './FormSubmit.module.css';
import Image from 'next/image';


const FormSubmit = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Formulário enviado com sucesso!</h1>
            <Image src='/Vector.png' alt='sucsses' height={120} width={100}/>
        </div>
    );
};

export default FormSubmit;