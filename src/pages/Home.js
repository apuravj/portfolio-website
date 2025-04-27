import React from 'react';
import { Container, Typography, Box, Grid, Button, Paper, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import DataScienceIcon from '@mui/icons-material/Analytics';
import AIIcon from '@mui/icons-material/Psychology';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {
  const skills = [
    {
      title: 'Data Analysis',
      icon: <DataScienceIcon sx={{ fontSize: 40 }} />,
      description: 'Statistical analysis, data cleaning, and visualization using Python and R.'
    },
    {
      title: 'Machine Learning',
      icon: <AIIcon sx={{ fontSize: 40 }} />,
      description: 'Predictive models and implement ML algorithms for real-world problems.'
    },
    {
      title: 'Business Intelligence',
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      description: 'Creating interactive dashboards and reports using Tableau and Power BI.'
    },
    {
      title: 'Statistical Modeling',
      icon: <CloudIcon sx={{ fontSize: 40 }} />,
      description: 'Applying advanced statistical methods for data-driven decision - making.'
    }
  ];

  const featuredProjects = [
    {
      title: 'Employee Attrition Risk Analysis',
      description: 'Developed a machine learning model to predict employee attrition risk using historical HR data. Implemented feature engineering and Random Forest algorithm to identify key factors contributing to employee turnover.',
      github: 'https://github.com/apuravj/AttritionRiskModel',
      demo: 'https://demo.com'
    },
    {
      title: 'Personal Loan Default Prediction',
      description: 'Built an advanced machine learning model to assess loan default probability. Used gradient boosting and ensemble methods to improve prediction accuracy and reduce false positives.',
      github: 'https://github.com/apuravj/Personal-Loan-Default-Prediction',
      demo: 'https://demo.com'
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#f5f5f5' }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          position: 'relative',
          py: { xs: 6, md: 8 },
          borderBottom: '1px solid #e0e0e0'
        }}
      >
        <Container maxWidth="lg">
          <Grid 
            container 
            spacing={{ xs: 4, md: 8 }} 
            alignItems="center" 
            justifyContent="space-between"
          >
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ maxWidth: '600px' }}
              >
                <Typography 
                  component="h1"
                  sx={{ 
                    fontSize: { xs: '2.25rem', md: '3rem', lg: '3.5rem' },
                    fontWeight: 700,
                    color: '#1a1a1a',
                    mb: { xs: 2, md: 3 },
                    lineHeight: 1.2
                  }}
                >
                  Hi, I'm Apurav Jain
                </Typography>
                <Typography 
                  variant="h2" 
                  sx={{ 
                    mb: 3,
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    color: '#666666',
                    fontWeight: 500,
                    lineHeight: 1.5
                  }}
                >
                  Data Analyst | Aspiring Business Analyst | Aspiring Consultant
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/contact"
                    sx={{
                      bgcolor: '#1a1a1a',
                      color: '#ffffff',
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        bgcolor: '#333333'
                      }
                    }}
                  >
                    Get in Touch
                  </Button>
                  <Button
                    variant="outlined"
                    component={Link}
                    to="/projects"
                    sx={{
                      borderColor: '#1a1a1a',
                      color: '#1a1a1a',
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        borderColor: '#333333',
                        bgcolor: 'transparent'
                      }
                    }}
                  >
                    View Projects
                  </Button>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton
                    href="https://github.com/apuravj"
                    target="_blank"
                    sx={{ color: '#1a1a1a' }}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    href="https://www.linkedin.com/in/apurav-jain-/"
                    target="_blank"
                    sx={{ color: '#1a1a1a' }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </motion.div>
            </Grid>
            <Grid 
              item 
              xs={12} 
              md={5}
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end' },
                order: { xs: -1, md: 2 },
                mt: { xs: 0, md: -8 },
                position: 'relative',
                zIndex: 1
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Box
                  component="img"
                  src="/assets/apurav_jain_profile2.jpg"
                  alt="Apurav Jain"
                  sx={{
                    width: { xs: '240px', sm: '280px', md: '320px', lg: '360px' },
                    height: { xs: '240px', sm: '280px', md: '320px', lg: '360px' },
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid #1a1a1a',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                    }
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ backgroundColor: '#ffffff', py: 12, borderBottom: '1px solid #e0e0e0' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom sx={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', mb: 4 }}>
            Transforming Complex Data into Actionable Insights
          </Typography>
          <Typography variant="body1" sx={{ color: '#666666', fontSize: '1.1rem', mb: 6 }}>
            Data Analyst & Scientist specializing in statistical analysis, machine learning, and business intelligence solutions.
          </Typography>

          <Paper elevation={0} sx={{ p: 4, border: '1px solid #e0e0e0', mb: 6 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: 600, color: '#1a1a1a', mb: 3 }}>
              Background
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: '#666666', fontSize: '1.1rem' }}>
              As a Data Analyst with expertise in machine learning and business intelligence, I specialize in transforming complex data into actionable insights. My experience spans statistical analysis, predictive modeling, and creating interactive dashboards that drive business decisions.
            </Typography>
          </Paper>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              component={Link}
              to="/about"
              variant="outlined"
              sx={{
                borderColor: '#1a1a1a',
                color: '#1a1a1a',
                px: 4,
                py: 1.5,
                '&:hover': {
                  borderColor: '#333333',
                  bgcolor: 'transparent'
                }
              }}
            >
              Learn More About Me
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box sx={{ backgroundColor: '#ffffff', py: 12, borderBottom: '1px solid #e0e0e0' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom sx={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', mb: 4 }}>
            Areas of Expertise
          </Typography>
          <Typography variant="body1" sx={{ color: '#666666', fontSize: '1.1rem', mb: 6 }}>
            Specialized in turning data into insights through advanced analytics and visualization
          </Typography>

          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      borderRadius: 2,
                      border: '1px solid #e0e0e0',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      '&:hover': {
                        boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
                      }
                    }}
                  >
                    {skill.icon}
                    <Typography variant="h4" sx={{ fontSize: '1.25rem', fontWeight: 600, mt: 3, color: '#1a1a1a' }}>
                      {skill.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666666', mt: 1 }}>
                      {skill.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Projects Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 12 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom sx={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', mb: 4 }}>
            Featured Projects
          </Typography>

          <Grid container spacing={4}>
            {featuredProjects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      borderRadius: 2,
                      border: '1px solid #e0e0e0',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      '&:hover': {
                        boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
                      }
                    }}
                  >
                    <Typography variant="h4" sx={{ fontSize: '1.25rem', fontWeight: 600, color: '#1a1a1a' }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666666', mt: 2 }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                      <Button
                        variant="outlined"
                        href={project.github}
                        target="_blank"
                        sx={{
                          borderColor: '#1a1a1a',
                          color: '#1a1a1a',
                          '&:hover': {
                            borderColor: '#333333',
                            bgcolor: 'transparent'
                          }
                        }}
                      >
                        GitHub Repo
                      </Button>
                      <Button
                        variant="contained"
                        href={project.demo}
                        target="_blank"
                        sx={{
                          ml: 2,
                          bgcolor: '#1a1a1a',
                          color: '#ffffff',
                          '&:hover': {
                            bgcolor: '#333333'
                          }
                        }}
                      >
                        Live Demo
                        
                      </Button>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;

