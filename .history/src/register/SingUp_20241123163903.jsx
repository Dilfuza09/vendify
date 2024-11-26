import React from 'react'

const SingUp = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name && email) {
      setSubmitted(true);
    } else {
      alert("Please fill in all fields.");
    }
  };
  return (
    <>

    </>
  )
}

export default SingUp