import React from 'react'
import { useTranslation } from "react-i18next";

const Treatment = () => {
  const { t } = useTranslation();
  return(
<h2>{t("treatment")}</h2>
  );
};
  export default Treatment;