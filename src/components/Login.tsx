import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuth } from '../store/slices/authSlice';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (provider: string) => {
    // Simulating OAuth login
    console.log(`Logging in with ${provider}`);
    // In a real app, you would redirect to the OAuth provider here
    // For now, we'll just simulate a successful login
    dispatch(setAuth({ user: { id: '1', name: 'John Doe', email: 'john@example.com' } }));
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Sign in to Social Media Manager
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: '#3b5998' }}
            startIcon={<Facebook />}
            onClick={() => handleLogin('Facebook')}
          >
            Sign in with Facebook
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: '#1DA1F2' }}
            startIcon={<Twitter />}
            onClick={() => handleLogin('Twitter')}
          >
            Sign in with Twitter
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: '#0077B5' }}
            startIcon={<Linkedin />}
            onClick={() => handleLogin('LinkedIn')}
          >
            Sign in with LinkedIn
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;