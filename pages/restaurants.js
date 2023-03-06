import styles from './../styles/Restaurants.module.css';
import { Crimson_Pro } from 'next/font/google';
import CategoryRow from '@/components/images/CategoryRow';
import NavBar from '@/components/NavBar';
const crimson = Crimson_Pro({ subsets: ['latin'] });
const Restaurants = () => {
  return (
    <div
      className={`flexCent ${crimson.className}
    ${styles.siteContainer}`}
    >
      <div className={`flexCentCol ${styles.contentContainer}`}>
        <NavBar />
        <CategoryRow />
        <div style={{ height: '80%' }}></div>
      </div>
    </div>
  );
};

export default Restaurants;
