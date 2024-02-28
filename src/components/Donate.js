import React from 'react'
import { useTranslation } from "react-i18next";

const Donate = () => {
  const { t } = useTranslation();
  return(
<h2>{t("donate_js")}</h2>
  );
};
  export default Donate;