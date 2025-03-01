import Header from './Header';
import Footer from './Footer';
import '../styles/global.css';

export default function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
