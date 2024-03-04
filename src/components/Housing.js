import React from 'react'
import { useTranslation } from "react-i18next";

const Housing = () => {
  const { t } = useTranslation();
  return(
<h2>{t("housing")}</h2>
  );
};
  export default Housing;