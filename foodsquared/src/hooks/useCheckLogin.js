import React, { useState, useRef, useEffect, createRef } from 'react'

export const useCheckLogin = (check) => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  const checkLogin = () => {
    console.log(check)
    if (check) {
      setIsSignedIn(false)
    } else {
      setIsSignedIn(true)
    }
  }

  useEffect(() => {
    checkLogin()
    console.log(isSignedIn)
  }, [])
  return [isSignedIn]
}
