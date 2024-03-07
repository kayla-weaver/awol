import React from 'react'
import { useTranslation } from "react-i18next";

const WarmingShelters = () => {
  const { t } = useTranslation();
  const handleLinkClick = () => {
    window.location.href = `https://www.givingcloset.or`;
  };
  return(
    <div className = "pageContent">
    <h1>{t("warming_shelters")}</h1>
    <h2>{t("warming_description")}</h2>
    <hr/>
    <h3><u>The Housing Solutions Center</u></h3>
    <h4>{t("housing_solutions_info")}</h4>
    <h4>{t("location")} 1309 Franklin Street</h4>
    <h4>{t("eligibility")} {t("hsc_el")}</h4>
    <h4>{t("phone_number")}(360)695-9677</h4>
    <hr />
    <h3><u>Living Hope, Live Love Center</u></h3>
    <h4>{t("location")} 2711 NE Andresen Rd</h4>
    <h4>{t("services")}{t("lhllc")}</h4>
    <h4>{t("phone_number")}(360)944-3905</h4>
    <h4>{t("hours_of_opperation")}{t("hoolhllc")}</h4>
    <h4>{t("website")}<span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleLinkClick}>livinghopechurch.com</span></h4>
    <hr />
    <h3><u>Overflow Shelter of Immanuel Lutheran Church</u></h3>
    <h4>{t("location")} 8310 Macarthur Boulevard</h4>
    <h4>{t("services")}{t("osoilc")}</h4>
    <h4>{t("phone_number")}(360)694-3661</h4>
    <h4>{t("eligibility")}{t("immanuel_luthren_elig")}</h4>
    <hr />
    <h3><u>River City Church</u></h3>
    <h4>{t("location")} 2400 E 4th Plain Boulevard</h4>
    <h4>{t("eligibility")} {t("riv_city_elig")}</h4>
    <h4>{t("phone_number")}(360)695-9677</h4>
    <h4>{t("hours_of_opperation")}{t("riv_city_hours")}</h4>
    <hr />
    <h3><u>St Andrew Lutheran Church</u></h3>
    <h4>{t("location")} 5607 NE Gher Road</h4>
    <h4>{t("phone_number")}(360)892-7160</h4>
    <hr />
    <div style={{height:'400px'}}></div>
    </div>
  );
};
  export default WarmingShelters;