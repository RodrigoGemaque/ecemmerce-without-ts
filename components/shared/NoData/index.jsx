import styles from './styles.module.css';


const NoData =
  ({ message = 'Não há dados cadastrados ou encontrados =(' }) => {
    return (
      <div className={styles.admin_panel}>
        {message}
      </div>
    )
  }

export default NoData