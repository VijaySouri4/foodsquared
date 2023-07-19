import React, { useState, useRef, useEffect, createRef } from 'react'

export const useLogin = () => {
  const [newusers, setUsers] = useState([])

  const fetchData = () => {
    fetch('http://172.31.130.16:3000/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'yoyo@yomail.com',
        password: 'hehehe'
      })
    })
      .then((response) => response.json())
      .then((jsonResponse) => setUsers(jsonResponse))
      .catch((error) => console.log(error))
  }
  useEffect(() => {
    fetchData()
    console.log(`users are : ${newusers}`)
  }, [])
  return [newusers]
}
