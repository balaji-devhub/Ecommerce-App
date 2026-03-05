import React, { useState, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Oval } from 'react-loader-spinner'
import { Container, Form, Title, Input, Button, LinkText, ErrorText } from '../LoginPage/authStyle'
import axios from 'axios'

const Loader = memo(() => <Oval height={20} width={20} color="#fff" strokeWidth={4} />)

const VITE_API_URL = import.meta.env.VITE_API_URL

const Register = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const validateFields = () => {
    if (!name.trim() && !email.trim() && !password.trim()) {
      return 'All fields are required'
    }
    if (!name.trim()) return 'Name cannot be empty'
    if (!email.trim()) return 'Email cannot be empty'
    if (!password.trim()) return 'Password cannot be empty'
    return ''
  }

  const handleSubmit = async event => {
    event.preventDefault()

    const validationError = validateFields()
    if (validationError) {
      setError(validationError)
      return
    }

    try {
      setLoading(true)
      setError('')

      const response = await axios.post(`${VITE_API_URL}/user/new-user/`, {
        name,
        email,
        password
      })

      console.log(response.data)

      // Optional: redirect after success
      navigate('/user/login')
      await user.save()
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Register</Title>

        <Input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {error && <ErrorText>{error}</ErrorText>}

        <Button type="submit" disabled={loading}>
          {loading ? <Loader /> : 'Register'}
        </Button>

        <LinkText onClick={() => navigate('/user/login')}>
          Already have an account? <span>Login</span>
        </LinkText>
      </Form>
    </Container>
  )
}

export default Register
