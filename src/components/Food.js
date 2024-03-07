import React from 'react'
import { useTranslation } from "react-i18next";

const Food = () => {
  const { t } = useTranslation();
  return(
<div className = "pageContent">
    <h1>{t("food")}</h1>
    <h2>{t("food_description")}</h2>
    <hr/>
    <h3><u>Clark County Food Bank</u></h3>
    <h4>{t("location")} 1910 West Fourth Plain</h4>
    <h4>{t("eligibility")}98660</h4>
    <h4>{t("phone_number")}(360)693-0939</h4>
    <hr />
    <h3><u>East Vancouver Community Church</u></h3>
    <h4>{t("location")} 12415 SE 7th Street</h4>
    <h4>{t("phone_number")}(360)256-2780</h4>
    <h4>{t("hours_of_opperation")}{t("east_vanc_hours")}</h4>
    <hr />
    <div style={{height:'400px'}}></div>

</div>
  );
};
  export default Food;