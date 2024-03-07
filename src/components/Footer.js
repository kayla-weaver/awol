import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  const recipientEmail = "support@alwaysworthyoflove.com";

  const handleEmailLinkClick = () => {
    window.location.href = `mailto:${recipientEmail}`;
  };
    return (
        <div className="footer">
            <div className="bubbles">
                {Array.from({ length: 128 }).map((_, index) => (
                    <div
                        key={index}
                        className="bubble"
                        style={{
                            '--size': `${2 + Math.random() * 4}rem`,
                            '--distance': `${6 + Math.random() * 4}rem`,
                            '--position': `${-5 + Math.random() * 110}%`,
                            '--time': `${2 + Math.random() * 2}s`,
                            '--delay': `${-1 * (2 + Math.random() * 2)}s`
                        }}
                    />
                ))}
            </div>
            <div className="content">
            <div className="ComponentHeader">
      <p>
        <h3>{t("contact")}{' '}
        <span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleEmailLinkClick}>
          {t("click_here")}
        </span>
        </h3>
      </p>
      <ul className="nav">
        <li className="nav-item2">
          <Link to="/about">{t("about")}</Link>
        </li> 
        <li className="nav-item2">
          <Link to="/resources">{t("resources")}</Link>
        </li>
        <li className="nav-item2">
          <Link to="/donate">{t("donate")}</Link>
        </li>
        <li className="nav-item2">
          <Link to="/home">{t("home")}</Link>
        </li>
        <li className="nav-item2">
          <Link to="/events">{t("events")}</Link>
        </li>
      </ul>
      <p>© Made with ♥ by Kayla Weaver 2024 ©</p>
    </div>
              
            </div>
        </div>
    );
};

export default Footer;