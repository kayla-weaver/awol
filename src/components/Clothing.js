import React from 'react'
import { useTranslation } from "react-i18next";

const Clothing = () => {
  const { t } = useTranslation();
  return(
<h2>{t("clothing")}</h2>
  );
};
  export default Clothing;