import styles from "../Button/Button.module.css";

const Button = ({text, icon, isOutlined, ...copy}) => {
  return (
    <button {...copy} className={isOutlined ? styles.outlined_btn : styles.primary_btn}>
      {icon}
       {text}
    </button>
  )
}

export default Button
