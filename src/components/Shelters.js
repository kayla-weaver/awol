import React from 'react'
import { useTranslation } from "react-i18next";

const Shelters = () => {
  const { t } = useTranslation();
  return(
    <div className = "pageContent">
<h2>{t("shelters")}</h2>
<h3><u>Lifeline Connections Sobering Unit</u></h3>
    <h4>{t("about_lifeline")}</h4>
    <h4>{t("location")}1601 E Fourth Plain Boulevard Suite A212</h4>
    <h4>{t("phone_number")}(360)397-8246</h4>
    <h4>{t("hours_of_opperation")}{t("lifeline_hours")}</h4>
    <hr />
    <h3><u>Share House: Shelter for Single Men</u></h3>
    <h4>{t("about_single_men")}</h4>
    <h4>{t("location")}1115 W 13th st</h4>
    <h4>{t("phone_number")}(360)695-7658</h4>
    <hr />
    <div style={{height:'400px'}}></div>
    </div>
  );
};
  export default Shelters;