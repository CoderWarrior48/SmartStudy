import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const router = useRouter();

  return (
    <div>
      <ul className={styles.navUl}>
        <li
          className={
            router.pathname == '/' ? styles.navLiActive : styles.navLi
          }
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={
            router.pathname == '/create' ? styles.navLiActive : styles.navLi
          }
        >
          <Link href="/create">Create</Link>
        </li>
        <li
          className={
            router.pathname == '/learn' ? styles.navLiActive : styles.navLi
          }
        >
          <Link href="./learn">Learn</Link>
        </li>
        <li
          className={
            router.pathname == '/study' ? styles.navLiActive : styles.navLi
          }
        >
          <Link href="./study">Study</Link>
        </li>
        <li
          className={
            router.pathname == '/test' ? styles.navLiActive : styles.navLi
          }
        >
          <Link href="./test">Test</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
