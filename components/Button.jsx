import Image from 'next/image';
import styles from './../styles/Button.module.css';
const Button = ({ clickFunc, icon, text }) => {
  return (
    <button
      onClick={() => {
        clickFunc(true);
      }}
      className={`flexCent ${styles.buttonStyle}`}
    >
      <Image className={styles.icon} src={icon} height={30} width={30} />
      {text}
    </button>
  );
};

export default Button;
