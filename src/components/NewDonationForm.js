import React from 'react';
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";


function NewDonationForm(props){
  const { t } = useTranslation();

  function handleNewDontationFormSubmission(event){
    event.preventDefault();
    props.onNewDonationCreation({
    name: event.target.name.value,
    email: event.target.email.value,
    donationItem: event.target.donationItem.value,
  });
}


  return(
    <React.Fragment>
      <h6>{t("donation_item_header")}</h6>
      <form onSubmit={handleNewDontationFormSubmission}>
        <input
          type= 'text'
          name= 'name'
          placeholder= {t("name")} />
        <input
          type= 'text'
          name= 'email'
          placeholder= {t("email")} />
        <input
          type= 'text'
          name= 'donationItem'
          placeholder= {t("donation_item")} />
        <button type ='submit'>{t("submit")}</button>
      </form>
    </React.Fragment>
  );
}

NewDonationForm.propTypes= {
  onNewDonationCreation: PropTypes.func
}

export default NewDonationForm