import React from 'react';
import { Container, Typography, Box, Grid, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Box sx={{ backgroundColor: '#ffffff', pt: 4, pb: 12, borderBottom: '1px solid #e0e0e0' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#1a1a1a',
                mb: 2, // reduced margin-bottom from 4 to 2
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#666666',
                fontSize: '1.1rem',
                mb: 4, // keeping margin-bottom after subheading
              }}
            >
              Let's discuss your data analysis and business needs
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {/* Form Section */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 2,
                    backgroundColor: '#ffffff',
                    border: '15px solid #e0e0e0',
                  }}
                >
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Name"
                          variant="outlined"
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { borderColor: '#e0e0e0' },
                              '&:hover fieldset': { borderColor: '#1a1a1a' },
                              '&.Mui-focused fieldset': { borderColor: '#1a1a1a' },
                            },
                            '& .MuiInputLabel-root': {
                              color: '#666666',
                              '&.Mui-focused': { color: '#1a1a1a' },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Email"
                          variant="outlined"
                          type="email"
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { borderColor: '#e0e0e0' },
                              '&:hover fieldset': { borderColor: '#1a1a1a' },
                              '&.Mui-focused fieldset': { borderColor: '#1a1a1a' },
                            },
                            '& .MuiInputLabel-root': {
                              color: '#666666',
                              '&.Mui-focused': { color: '#1a1a1a' },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Subject"
                          variant="outlined"
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { borderColor: '#e0e0e0' },
                              '&:hover fieldset': { borderColor: '#1a1a1a' },
                              '&.Mui-focused fieldset': { borderColor: '#1a1a1a' },
                            },
                            '& .MuiInputLabel-root': {
                              color: '#666666',
                              '&.Mui-focused': { color: '#1a1a1a' },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          variant="outlined"
                          multiline
                          rows={6}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { borderColor: '#e0e0e0' },
                              '&:hover fieldset': { borderColor: '#1a1a1a' },
                              '&.Mui-focused fieldset': { borderColor: '#1a1a1a' },
                            },
                            '& .MuiInputLabel-root': {
                              color: '#666666',
                              '&.Mui-focused': { color: '#1a1a1a' },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="outlined"
                          size="large"
                          fullWidth
                          sx={{
                            color: '#1a1a1a',
                            borderColor: '#1a1a1a',
                            py: 1.5,
                            '&:hover': {
                              borderColor: '#1a1a1a',
                              backgroundColor: '#1a1a1a',
                              color: '#ffffff',
                            },
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </motion.div>
            </Grid>

            {/* Connect With Me + Address Section */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 2,
                    backgroundColor: '#ffffff',
                    border: '1px solid #e0e0e0',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                    gap: 4,
                  }}
                >
                  {/* Left Side - Social Handles */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h3"
                      gutterBottom
                      sx={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: '#1a1a1a',
                        mb: 3,
                      }}
                    >
                      Connect With Me
                    </Typography>

                    <Box sx={{ mt: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <EmailIcon sx={{ mr: 2, color: '#1a1a1a' }} />
                        <Typography sx={{ color: '#666666', fontSize: '1.1rem' }}>
                          apuravjain14@gmail.com
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <LinkedInIcon sx={{ mr: 2, color: '#1a1a1a' }} />
                        <Typography
                          component="a"
                          href="https://www.linkedin.com/in/apurav-jain-/"
                          target="_blank"
                          sx={{
                            color: '#666666',
                            fontSize: '1.1rem',
                            textDecoration: 'none',
                            '&:hover': { color: '#1a1a1a' },
                          }}
                        >
                          LinkedIn Profile
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <GitHubIcon sx={{ mr: 2, color: '#1a1a1a' }} />
                        <Typography
                          component="a"
                          href="https://github.com/apuravj"
                          target="_blank"
                          sx={{
                            color: '#666666',
                            fontSize: '1.1rem',
                            textDecoration: 'none',
                            '&:hover': { color: '#1a1a1a' },
                          }}
                        >
                          GitHub Profile
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <InstagramIcon sx={{ mr: 2, color: '#1a1a1a' }} />
                        <Typography
                          component="a"
                          href="https://www.instagram.com/a.p.u.r.a.v_jain/"
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: '#666666',
                            fontSize: '1.1rem',
                            textDecoration: 'none',
                            '&:hover': { color: '#1a1a1a' },
                          }}
                        >
                          Instagram Profile
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Right Side - Address */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h3"
                      gutterBottom
                      sx={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: '#1a1a1a',
                        mb: 3,
                      }}
                    >
                      Address
                    </Typography>
                    <Typography sx={{ color: '#666666', fontSize: '1.1rem', mb: 2 }}>
                      29/31, Nehar Road, 
                    </Typography>
                    <Typography sx={{ color: '#666666', fontSize: '1.1rem' }}>
                    Gangapur City, Rajasthan, India
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;


