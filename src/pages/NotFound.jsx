import React from 'react'

const NotFound = () => {
  return (
    <>
  <div style={{
      textAlign: 'center',
      padding: '100px 0',
      backgroundColor: '#f7f7f7',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1 style={{ fontSize: '5em', color: '#333' }}>404</h1>
      <h2 style={{ color: '#666' }}>Voy! Sahifa topilmadi.
      </h2>
      <p style={{ color: '#888' }}>Kechirasiz, siz qidirayotgan sahifa mavjud emas. URL manzilini tekshirib ko'ring yoki bosh sahifaga qayting.</p>
      <a href="/" style={{
        textDecoration: 'none',
        color: '#007BFF',
        fontSize: '1.2em',
      }}>Uyga qaytish</a>
    </div>
    </>
  )
}

export default NotFound