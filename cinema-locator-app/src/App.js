// import { useState } from 'react';
import './App.css';
import SearchBtn from './components/SearchTabs/SearchBtn';
import Navbar from './components/NavTabs/Navbar';

fetch('https://api-gate2.movieglu.com/filmLiveSearch/?query=max&n=6', {
  method: 'GET',
  headers: {
    "client": "NONE_103",
    "x-api-key": "	HdSe1JCKF28zruiMLi0KU8RIq8CS0GW65D6zztYb",
    "authorization": "	Basic Tk9ORV8xMDNfWFg6dXpJYnpWeTNpNEM4=",
    "territory": "XX",
    "api-version": "v200",
    "geolocation": "-22.0;14.0",
    "device-datetime": "2020-09-14T08:30:17.360Z"
  },
})
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));





function App() {

  // const [cinema, setCinema] =useState({name:'', location:''})

  return (
    <div>
      <Navbar/>
     <SearchBtn/>
        
    </div>
  );
}

export default App;
