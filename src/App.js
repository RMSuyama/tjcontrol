import React, { useState, useEffect } from 'react';
import './App.css';
import Routes from "../src/components/routes/routes";
import app from './config/firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Login from './components/pages/login';

function App() {

    // const [clientes, setClientes] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const db = getFirestore(app);
    //         const clientesCollection = collection(db, 'clientes');
    //         const clientesSnapshot = await getDocs(clientesCollection);
    //         const clientesData = clientesSnapshot.docs.map(doc => ({
    //             id: doc.id,
    //             ...doc.data()
    //         }));
    //         setClientes(clientesData);
    //     };

    //     fetchData();
    // }, []);





  return (
    <div className="App">

      <Routes/>

    </div>
  );
}

export default App;
