import React, { createContext, useState, useRef, useEffect} from 'react'

import { io } from 'socket.io-client'

import Peer from 'simple-peer'

const socket = io ('http://localhost:3001')

const ContextProvider = ( {children}) => {
    useEffect(() => {

    })

    const answerCall = () => {

    }

    const callUser = () => {

    }

    const leaveCall =() => {

    }
}

