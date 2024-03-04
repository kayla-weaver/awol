import React from 'react'
import { useTranslation } from "react-i18next";

const Food = () => {
  const { t } = useTranslation();
  return(
<h2>{t("food")}</h2>
  );
};
  export default Food;