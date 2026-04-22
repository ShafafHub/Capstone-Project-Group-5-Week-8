import "./../../styles/home.css";

export default function HomeFooter() {
  return (
    <footer className="home-footer">
      <div className="home-footer__left">
        <span>© 2024 Airbnb, Inc.</span>
        <span className="footer-dot">·</span>
        <a href="/">Privacy</a>
        <span className="footer-dot">·</span>
        <a href="/">Terms</a>
        <span className="footer-dot">·</span>
        <a href="/">Sitemap</a>
      </div>

      <div className="home-footer__right">
        <button type="button" className="home-footer__action">
          <span className="home-footer__icon">🌐</span>
          <span>English (CA)</span>
        </button>

        <button type="button" className="home-footer__action">
          <span>$ CAD</span>
        </button>

        <button type="button" className="home-footer__action">
          <span>Support & resources</span>
          <span className="home-footer__chevron">⌄</span>
        </button>
      </div>
    </footer>
  );
}