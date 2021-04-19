import React, { createContext, useState, useRef, useEffect} from 'react'

import { io } from 'socket.io-client'

import Peer from 'simple-peer'

const socket = io ('http://localhost:3001')

const ContextProvider = ( {children}) => {
    const [stream, setStream] = useState(null)

    const myVideo = useRef()

    useEffect(() => {
        navigator.medisDevices.getUserMedia({ video: true,  audio: true})
            .then((currentStream) => {
                setStream(currentStream)

                myVideo.current.srcObject =currentStream
            })
    })

    const answerCall = () => {

    }

    const callUser = () => {

    }

    const leaveCall =() => {

    }
}

