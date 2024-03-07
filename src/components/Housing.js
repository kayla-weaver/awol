import React from 'react'
import { useTranslation } from "react-i18next";

const Housing = () => {
  const { t } = useTranslation();
  return(
<div className = "pageContent">
    <h2>{t("housing")}</h2>
    <hr/>
    <h3><u>Lifeline Connections Sobering Unit</u></h3>
    <h4>{t("about_lifeline")}</h4>
    <h4>{t("location")}1601 E Fourth Plain Boulevard Suite A212</h4>
    <h4>{t("phone_number")}(360)397-8246</h4>
    <h4>{t("hours_of_opperation")}{t("lifeline_hours")}</h4>
    <hr />
    <h3><u>CLEAR Hotline</u></h3>
    <h4>{t("about_clear")}</h4>
    <h4>{t("phone_number")}1(877)211-9274</h4>
    <hr />
    <div style={{height:'400px'}}></div>
    </div>
  );
};
  export default Housing;