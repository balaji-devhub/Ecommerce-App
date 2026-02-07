import React, { useState, useCallback, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Oval } from 'react-loader-spinner'

import { Container, Form, Title, Input, Button, LinkText } from '../LoginPage/authStyle'

const Loader = memo(() => <Oval height={20} width={20} color="#fff" strokeWidth={4} />)

const Register = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      setLoading(true)

      setTimeout(() => {
        setLoading(false)
        navigate('/user/login')
      }, 2000)
    },
    [navigate]
  )

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Register</Title>

        <Input type="text" placeholder="Full Name" required />
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />

        <Button type="submit">{loading ? <Loader /> : 'Register'}</Button>

        <LinkText onClick={() => navigate('/user/login')}>
          Already have an account? <span>Login</span>
        </LinkText>
      </Form>
    </Container>
  )
}

export default Register
