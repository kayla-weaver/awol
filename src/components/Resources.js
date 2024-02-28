import React from 'react'
import { useTranslation } from "react-i18next";

const Resources = () => {
  const { t } = useTranslation();
  return(
<h2>{t("resources_js")}</h2>
  );
};
  export default Resources;