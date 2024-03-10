import React from 'react'
import { useTranslation } from "react-i18next";


const About = () => {
  const {t}= useTranslation()
  return(
    <div className='pageContent'>
      <h2>{t("about_js")}</h2>
      <div style={{height:'400px'}}>
      </div>
    </div>

  )
};

export default About;