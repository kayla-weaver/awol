import React from 'react'
import NewDonationForm from './NewDonationForm';
import db from '../firebase.js';
import { collection, addDoc } from "firebase/firestore";
import Contact from './Contact.js';


const handleAddingNewDonation = async(newDonationData) =>{
  const collectionRef = collection(db, "donations");
  await addDoc(collectionRef, newDonationData);
  console.log("New donation added successfully!");
}

const Donate = () => {
  return(
    <div>
      <Contact />
      <NewDonationForm onNewDonationCreation={handleAddingNewDonation} />
    </div>
  );
};
  export default Donate;