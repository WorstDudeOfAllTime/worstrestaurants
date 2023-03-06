import Image from 'next/image';
import styles from './../styles/Button.module.css';
import { Crimson_Pro } from 'next/font/google';
const crimson = Crimson_Pro({ subsets: ['latin'] });
const Button = ({ clickFunc, icon, text, margin }) => {
  return (
    <button
      style={{ margin: ` 0px ${margin}px` }}
      onClick={() => {
        clickFunc(true);
      }}
      className={`flexCent ${crimson.className} ${styles.buttonStyle}`}
    >
      <Image className={styles.icon} src={icon} height={30} width={30} />
      <h3>{text}</h3>
    </button>
  );
};

export default Button;
