import styles from "../Navigation/Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div>
        <img src="./src/assets/Customer-logo.png" alt="Brand-logo" className={styles.navIcon} />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation
