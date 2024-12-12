import { useState } from "react";
import { useRef } from "react"


function App() {
  const firstName = useRef('');
  const lastName = useRef('');
  const email = useRef('');
  const [user, setUser] = useState([]);

  function displayUserData(e) {
    e.preventDefault();
    // console.log(firstName.current.value);
    setUser({ firstName: firstName.current.value,
              lastName: lastName.current.value,
              email: email.current.value
    });
    firstName.current.value = '';
    lastName.current.value = '';
    email.current.value = '';
  }
  return (
    <>
      <form action="">
        <input type="text" ref={firstName} placeholder='Enter your firstName' />
        <br />
        <input type="text" ref={lastName} placeholder='Enter your lastName' />
        <br />
        <input type="email" ref={email} placeholder='Enter your email' />
        <br />
        <button onClick={displayUserData}>Submit</button>
      </form>
      <br />
      <p>Entered information:</p>
        <p>FirstName:</p>
        <p style={{fontWeight: 'bold'}}>{user.firstName}</p>
        <p>LastName:</p>
        <p style={{fontWeight: 'bold'}}>{user.lastName}</p>
        <p>Email:</p>
        <p style={{fontWeight: 'bold'}}>{user.email}</p>
    </>
  )
}

export default App
