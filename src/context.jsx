import { useState, createContext, useEffect, useCallback } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

export const userContext = createContext();

export const UserProvider = (props) => {
  const [retrieved, setRetrived] = useState([]);

  //   firebase database config
  const config = {
    apiKey: "AIzaSyDn5WV4Fyq7K89ajxL4FEfy8PfQJBlgsCc",
    authDomain: "artsy-3d86c.firebaseapp.com",
    projectId: "artsy-3d86c",
    storageBucket: "artsy-3d86c.appspot.com",
    messagingSenderId: "217613921861",
    appId: "1:217613921861:web:7d4e6672589850d5fb7d2c",
  };

  const app = initializeApp(config);
  const db = getDatabase();

  const fetchData = useCallback(() => {
    const orderRef = ref(db, `Orders`);
    //   get the data from the database

    onValue(orderRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        records.push({ key: childKey, data: childData });
      })

      setRetrived(records)
    });
  })

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <userContext.Provider value={{retrieved }}>
      {props.children}
    </userContext.Provider>
  );
};
