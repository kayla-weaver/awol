import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const ResourceNavBar = () => {
  const { t } = useTranslation();
  return (
      <ul className="nav">
        <li className="nav-item">
          <Link to="/housing">{t("housing")}</Link>
        </li> 
        <li className="nav-item">
          <Link to="/treatment">{t("treatment")}</Link>
        </li>
        <li className="nav-item">
          <Link to="/food">{t("food")}</Link>
        </li>
        <li className="nav-item">
          <Link to="/shelters">{t("shelters")}</Link>
        </li>
        <li className="nav-item">
          <Link to="/warming_shelters">{t("warming_shelters")}</Link>
        </li>
        <li className="nav-item">
          <Link to="/transportation">{t("transportation")}</Link>
        </li>
        <li className="nav-item">
          <Link to="/clothing">{t("clothing")}</Link>
        </li>
        <li className="nav-item">
        </li>
      </ul>
  );
};

export default ResourceNavBar;

