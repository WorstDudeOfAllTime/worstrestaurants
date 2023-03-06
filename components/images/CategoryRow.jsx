import CategoryChoice from '../CategoryChoice';
import styles from './../../styles/CategoryRow.module.css';
import pizza from './../images/icons8-salami-pizza-50.png';
import sushi from './../images/icons8-sushi-50.png';
import guacamole from './../images/icons8-guacamole-50.png';
import burger from './../images/icons8-hamburger-50.png';
import pasta from './../images/icons8-spaghetti-50.png';
import eggs from './../images/icons8-sunny-side-up-eggs-50.png';
import salad from './../images/icons8-salad-50.png';
import chinese from './../images/icons8-noodles-50.png';
import seafood from './../images/icons8-seafood-50.png';
const categories = [
  { name: 'sushi', image: sushi },
  { name: 'guacamole', image: guacamole },
  { name: 'pizza', image: pizza },
  { name: 'american', image: burger },
  { name: 'italian', image: pasta },
  { name: 'seafood', image: seafood },
  { name: 'breakfast', image: eggs },
  { name: 'healthy', image: salad },
  { name: 'chinese', image: chinese },
];

const CategoryRow = () => {
  return (
    <div className={`flexCent ${styles.categoryRow}`}>
      {categories.map((foodType) => {
        return (
          <CategoryChoice image={foodType.image} category={foodType.name} />
        );
      })}
    </div>
  );
};

export default CategoryRow;
