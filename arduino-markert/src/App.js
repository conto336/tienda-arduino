import { useEffect } from "react";

import Main from "./components/Main";


function App() {

  useEffect(
    () => {

      fetch('http://192.168.100.100/sanctum/csrf-cookie', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(response => {
        if (response.status === 204) {
          console.log('CSRF ok');
        }
      })
    }, [])


  return (

    <Main />

  );
}

export default App;
