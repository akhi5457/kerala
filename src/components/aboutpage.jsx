import Button from 'react-bootstrap/Button';
import React from 'react'
import{useNavigate} from'react-router-dom'

export default function Aboutpage() {
    const nav=useNavigate()
  return (
    <div>
       About page
       <Button variant="danger" onClick={()=>nav('/')}>back</Button>
    </div>
  )
}
