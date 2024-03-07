import React from 'react'
import { useTranslation } from "react-i18next";

const Clothing = () => {
  const { t } = useTranslation();
  const handleLinkClick = () => {
    window.location.href = `https://www.givingcloset.org`;
  };
  const handleLinkClick2 = () => {
    window.location.href = `https://www.svdpvancouverusa.org`;
  };
  return(
    <div className = "pageContent">
    <h2>{t("clothing")}</h2>
    <hr/>
    <h3><u>The Giving Closet</u></h3>
    <h4>{t("about_giving_closet")}</h4>
    <h4>{t("location")} 2804A NE 65th ave</h4>
    <h4>{t("phone_number")}(360)993-4800</h4>
    <h4>{t("website")}<span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleLinkClick}> www.givingcloset.org </span></h4>
    <hr />
    <h3><u>St. Vincent de Paul-Vancouver</u></h3>
    <h4>{t("housing_solutions_info")}</h4>
    <h4>{t("location")}2456 NE Stapleton Rd</h4>
    <h4>{t("services")} {t("st_vincent_services")}</h4>
    <h4>{t("phone_number")}(360)694-5388</h4>
    <h4>{t("website")}<span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleLinkClick2}> www.svdpvancouverusa.org</span></h4>
    <hr />
    <div style={{height:'400px'}}></div>
    </div>
  );
};
  export default Clothing;