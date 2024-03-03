import React from 'react';
import { useTranslation } from "react-i18next";

function NewDonationForm(){
  const { t } = useTranslation();

  function handleNewDontationFormSubmission(event){
    event.preventDefault();
    console.log(event.target.names.value);
    console.log(event.target.email.value);
    console.log(event.target.donationItem.value);
  }


  return(
    <React.Fragment>
      <h3>{t("donation_item_header")}</h3>
      <form onSubmit={handleNewDontationFormSubmission}>
        <input
          type= 'text'
          name= 'name'
          placeholder= {t("name")} />
        <input
          type= 'text'
          name= 'email'
          placeholder= {t("email")} />
        <textarea
          name= 'donationItem'
          placeholder= {t("donation_item")} />
        <button type ='submit'>{t("submit")}</button>
      </form>
    </React.Fragment>
  )
}

export default NewDonationForm