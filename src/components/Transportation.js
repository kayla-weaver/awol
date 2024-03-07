import React from 'react'
import { useTranslation } from "react-i18next";

const Transportation = () => {
  const { t } = useTranslation();
  const handleLinkClick = () => {
    window.location.href = `https://mail.c-tran.com/fares/heroes-pass`;
  };
  return(
<div className = "pageContent">
    <h2>{t("transportation")}</h2>
    <hr/>
    <h3><u>Veterans Bus Pass</u></h3>
    <h4>{t("website")}<span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleLinkClick}>www.c-tran.com</span></h4>
    <div style={{height:'400px'}}></div>
    </div>
  );
};
  export default Transportation;