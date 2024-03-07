import React from 'react'
import { useTranslation } from "react-i18next";

const Treatment = () => {
  const { t } = useTranslation();
  const handleLinkClick = () => {
    window.location.href = `https://www.coda.org`;
  };
  return(
    <div className = "pageContent">
<h2>{t("treatment")}</h2>
<h3><u>Lifeline Connections Sobering Unit</u></h3>
    <h4>{t("about_lifeline")}</h4>
    <h4>{t("location")}1601 E Fourth Plain Boulevard Suite A212</h4>
    <h4>{t("phone_number")}(360)397-8246</h4>
    <h4>{t("hours_of_opperation")}{t("lifeline_hours")}</h4>
    <hr />
    <h3><u>CoDa: Co-Dependents Anonymous</u></h3>
    <h4>{t("about_coda")}</h4>
    <h4>{t("phone_number")}1(888)444-2359</h4>
    <h4>{t("website")}<span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleLinkClick}>www.coda.org</span></h4>
    <hr />
    <div style={{height:'400px'}}></div>
    </div>
  );
};
  export default Treatment;