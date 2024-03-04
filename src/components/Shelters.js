import React from 'react'
import { useTranslation } from "react-i18next";

const Shelters = () => {
  const { t } = useTranslation();
  return(
<h2>{t("shelters")}</h2>
  );
};
  export default Shelters;