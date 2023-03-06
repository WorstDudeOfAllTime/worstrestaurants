import styles from './../styles/FPDisplayCard.module.css'
import Image from 'next/image';
const FPDisplayCard = ({ displayImage, header, tagline }) => {
  return (
    <div className={`flexCentCol ${styles.displayCard}`}>
      <Image src={displayImage} width={70} height={70} />
      <h2>{header}</h2>
      <h4>{tagline}</h4>
    </div>
  );
};

export default FPDisplayCard;
