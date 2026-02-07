import React, { useState, useCallback, memo } from 'react'
import { Oval } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

import { Container, Form, Input, Button, Title, LinkText } from './authStyle'

const Loader = memo(() => <Oval height={20} width={20} color="#fff" strokeWidth={4} />)

const Login = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = useCallback(e => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>

        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />

        <Button type="submit">{loading ? <Loader /> : 'Login'}</Button>

        <LinkText onClick={() => navigate('/user/register')}>
          Don’t have an account? <strong>Register</strong>
        </LinkText>
      </Form>
    </Container>
  )
}

export default Login
