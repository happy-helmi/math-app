import Link from 'next/link';
import styles from '../styles/global.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/quiz">Quiz</Link></li>
        <li><Link href="/rechnen">Rechnen</Link></li>
        <li><Link href="/dragdrop">Drag & Drop</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
