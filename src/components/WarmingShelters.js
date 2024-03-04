import React from 'react'
import { useTranslation } from "react-i18next";

const WarmingShelters = () => {
  const { t } = useTranslation();
  return(
<h2>{t("warming_shelters")}</h2>
  );
};
  export default WarmingShelters;