import React from 'react'

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const userData = { email, password, name };
    localStorage.setItem('user', JSON.stringify(userData));
    alert('Registration successful! You can now sign in.');
    navigate('/');
  };

  return (
    <div>Register</div>
  )
}

export default Register