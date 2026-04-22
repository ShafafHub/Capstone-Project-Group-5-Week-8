import "./../../styles/property.css";

const supportLinks = [
  "Help Center",
  "Get help with a safety issue",
  "AirCover",
  "Anti-discrimination",
  "Disability support",
  "Cancellation options",
  "Report neighborhood concern",
];

const hostingLinks = [
  "Airbnb your home",
  "AirCover for Hosts",
  "Hosting resources",
  "Community forum",
  "Hosting responsibly",
  "Join a free Hosting class",
];

const airbnbLinks = [
  "Newsroom",
  "New features",
  "Careers",
  "Investors",
  "Gift cards",
  "Airbnb.org emergency stays",
];

function FooterColumn({ title, links }) {
  return (
    <div className="property-footer__column">
      <h3 className="property-footer__column-title">{title}</h3>

      <ul className="property-footer__links">
        {links.map((link) => (
          <li key={link}>
            <a href="/" className="property-footer__link">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PropertyFooter() {
  return (
    <footer className="property-footer">
      <div className="property-footer__top">
        <FooterColumn title="Support" links={supportLinks} />
        <FooterColumn title="Hosting" links={hostingLinks} />
        <FooterColumn title="Airbnb" links={airbnbLinks} />
      </div>

      <div className="property-footer__bottom">
        <div className="property-footer__bottom-left">
          <span>© 2024 Airbnb, Inc.</span>
          <span className="property-footer__dot">·</span>
          <a href="/">Privacy</a>
          <span className="property-footer__dot">·</span>
          <a href="/">Terms</a>
          <span className="property-footer__dot">·</span>
          <a href="/">Sitemap</a>
        </div>

        <div className="property-footer__bottom-right">
          <button type="button" className="property-footer__action">
            <span>🌐</span>
            <span>English (CA)</span>
          </button>

          <button type="button" className="property-footer__action">
            <span>$ CAD</span>
          </button>

          <div className="property-footer__socials">
            <a href="/" aria-label="Facebook">f</a>
            <a href="/" aria-label="Twitter">𝕏</a>
            <a href="/" aria-label="Instagram">◎</a>
          </div>
        </div>
      </div>
    </footer>
  );
}