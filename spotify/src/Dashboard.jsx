import React from 'react'
import { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import UseAuth from './UseAuth'

const Dashboard = ({code}) => {
    const accessToken = UseAuth(code)
    const [search, setSearch] = useState("")
  return (
    <Container> 
        <Form.Control type='search' placeholder='Search Songs/ Artists' value={search} onChange= {e => setSearch(e.target.value)} / >
    </Container>
  )
}

export default Dashboard