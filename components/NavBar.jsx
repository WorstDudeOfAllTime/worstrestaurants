import styles from './../styles/NavBar.module.css';
import Image from 'next/image';
import logoImg from './images/wr-fork-and-knife.png';
import Button from './Button';
import pizza from './../components/images/icons8-salami-pizza-50.png';
import wine from './../components/images/icons8-food-and-wine-50.png';
import cart from './../components/images/icons8-shopping-cart-48.png';
import Link from 'next/link';
const NavBar = () => {
  return (
    <div className={`flexCent ${styles.navContainer}`}>
      <div className={` flexCent ${styles.imageSide}`}>
        <Link className={'flexCent'} href="/">
          <div className={`flexCent ${styles.forkContainer}`}>
            <Image src={logoImg} height={30} />
          </div>
          <h1>WORST RESTAURANTS</h1>
        </Link>
      </div>
      <div className={`flexCent ${styles.buttonSide}`}>
        <input
          placeholder="Whatcha eatin'?"
          className={styles.searchBar}
        ></input>
        <Button margin={20} clickFunc={() => {}} icon={pizza} text="sign up" />
        <Button margin={20} clickFunc={() => {}} icon={wine} text="sign in" />
        <Image className={styles.shoppingCart} src={cart} height={45} />
      </div>
    </div>
  );
};

export default NavBar;
