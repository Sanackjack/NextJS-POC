import React from 'react'

type Props = {
   msg:String
}

//referance : https://www.youtube.com/watch?v=qvdnTfyv7y8

export default function Testprop({msg}: Props) {
  return (
    <div>

        <p> Testprop ={msg}</p>

    </div>
  )
}