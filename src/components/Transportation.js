import React from 'react'
import { useTranslation } from "react-i18next";

const Transportation = () => {
  const { t } = useTranslation();
  return(
<h2>{t("transportation")}</h2>
  );
};
  export default Transportation;