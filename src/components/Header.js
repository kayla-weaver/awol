import React from 'react';
import { useTranslation } from "react-i18next";
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Header = () => {
  const { t } = useTranslation();
  return (
    <Router>
    <ul className="nav">
      <li className="nav-item">
        <Link to="/about">{t("about")}</Link>
      </li>
      <li className="nav-item">
        <Link to="/resources">{t("resources")}</Link>
      </li>
      <li className="nav-item">
        <Link to="/donate">{t("donate")}</Link>
      </li>
      <li className="nav-item">
        <Link to="/home">{t("home")}</Link>
      </li>
      <li className="nav-item">
        <Link to="/events">{t("events")}</Link>
      </li>
    </ul>
    </Router>
  );
};

export default Header;



