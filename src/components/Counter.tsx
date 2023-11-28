import "./counter.scss"
import styles from "./counter.module.css"

export default function Counter() {

    return (
        <div className="container">
            <h1 className={styles.header}>Counter</h1>
        </div>
    )
}