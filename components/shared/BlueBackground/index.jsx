import styles from './Background.module.css'


const BlueBackground = ({children}) => {
  return (
    <div className = {styles.main}>
      {children}
    </div>
  )
}

export default BlueBackground