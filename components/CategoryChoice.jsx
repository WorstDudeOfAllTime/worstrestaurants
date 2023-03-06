import styles from './../styles/CategoryChoice.module.css'
import Image from 'next/image'
const CategoryChoice = ({image, category}) => {
  return (
    <div className={`flexCentCol ${styles.categoryContainer}`}>
      <Image className={styles.categoryImage} src={image} height= {45}></Image>
      <h3>{category}</h3>
    </div>
  )
}

export default CategoryChoice