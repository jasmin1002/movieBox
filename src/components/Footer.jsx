function Footer() {
  return (
    <footer className="footer">
      <ul className="social-presence">
        <li className="social-icon">
          <img src="/facebook.png" alt="facebook icon" className="facebook" />
        </li>
        <li className="social-icon">
          <img
            src="/instagram.png"
            alt="instagram icon"
            className="instagram"
          />
        </li>
        <li className="social-icon">
          <img src="/twitter.png" alt="twitter icon" className="twitter" />
        </li>
        <li className="social-icon">
          <img src="/youtube.png" alt="youtube icon" className="youtube" />
        </li>
      </ul>
      <ul className="company-protocol">
        <li className="condition-of-use">Conditions of use</li>
        <li className="ppolicy">Privacy & policy</li>
        <li className="proom">Press room</li>
      </ul>
      <p className="copyright">&copy; 2021 MovieBox by Olalekan Waznme</p>
    </footer>
  );
}

export default Footer;
