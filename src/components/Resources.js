import React from 'react'
import { useTranslation } from "react-i18next";
import ResourceNavBar from './ResourceNavBar';

const Resources = () => {
  const { t } = useTranslation();
  return(
    <div>
  <h2>
    {t("resources_js")}
  </h2> 
    <ResourceNavBar />
  </div>
  );
};
  export default Resources;