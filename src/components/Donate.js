import React from 'react'
import { useTranslation } from "react-i18next";
import { v4 } from 'uuid';
import NewDonationForm from './NewDonationForm';

const donation = {};
donation.id = v4()

const Donate = () => {
  const { t } = useTranslation();
  return(
    <div>
      <NewDonationForm />
    </div>
  );
};
  export default Donate;