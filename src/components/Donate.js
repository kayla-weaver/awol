import React from 'react'
import NewDonationForm from './NewDonationForm';
import db from '../firebase.js';
import { collection, addDoc } from "firebase/firestore";


const handleAddingNewDonation = async(newDonationData) =>{
  const collectionRef = collection(db, "donations");
  await addDoc(collectionRef, newDonationData);
  console.log("New donation added successfully!");
  // setFormVisableOnPage(false);
}

const Donate = () => {
  return(
    <div>
      <NewDonationForm onNewDonationCreation={handleAddingNewDonation} />
    </div>
  );
};
  export default Donate;