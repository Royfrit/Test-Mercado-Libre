import styles from './Button.module.scss';

const Button = ({text}) => {
    return (
        <button className={styles.wrapButton}>
            {text}
        </button>
    )
}

export default Button