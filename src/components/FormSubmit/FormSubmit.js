
import styles from './FormSubmit.module.css';

const FormSubmit = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Formulário enviado com sucesso!</h1>
            <img src='/Vertor.png' alt='sucsses'/>
        </div>
    );
};

export default FormSubmit;