import Link from "next/link";
import styles from "common/style/Nav.module.css"
export default function Nav(){
    return(
        <nav className={styles.nav}>
        <ul>
        <li className={styles.li}><Link href='/'>Home</Link></li>
        <li className={styles.li}><Link href='/board/board-list'>Board</Link></li>
        <li className={styles.li}><Link href='/game/game-list'>Game</Link></li>
        <li className={styles.li}><Link href='/common/basic-link'>Basic</Link></li>
        </ul>
        </nav>
    );
}