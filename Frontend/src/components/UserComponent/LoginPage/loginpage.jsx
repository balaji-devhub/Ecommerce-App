import { useState, memo } from 'react'
import { Oval } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import { Container, Form, Input, Button, Title, LinkText, ErrorText } from './authStyle'
import axios from 'axios'
import Cookies from 'js-cookie'

const Loader = memo(() => <Oval height={20} width={20} color="#fff" strokeWidth={4} />)

const Login = () => {
  const API_URL = import.meta.env.VITE_API_URL
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const loginSuccess = token => {
    Cookies.set('jwt_token', token, { expires: 7 })
    navigate('/')
  }

  const validateFields = () => {
    if (!email.trim() && !password.trim()) {
      return 'Email and Password cannot be empty'
    }
    if (!email.trim()) {
      return 'Email cannot be empty'
    }
    if (!password.trim()) {
      return 'Password cannot be empty'
    }
    return ''
  }

  const handleLogin = async () => {
    const validationError = validateFields()

    if (validationError) {
      setError(validationError)
      return
    }

    try {
      setLoading(true)
      setError('')

      const response = await axios.post(`${API_URL}/user/login/`, {
        email,
        password
      })

      if (response.status === 200) {
        loginSuccess(response.data.jwt_token)
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <Form>
        <Title>Login</Title>

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

        <Button type="button" onClick={handleLogin} disabled={loading}>
          {loading ? <Loader /> : 'Login'}
        </Button>

        <LinkText onClick={() => navigate('/user/register')}>
          Don’t have an account? <strong>Register</strong>
        </LinkText>
      </Form>
    </Container>
  )
}

export default Login
