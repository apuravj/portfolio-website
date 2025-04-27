import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BarChartIcon from '@mui/icons-material/BarChart';
import BuildIcon from '@mui/icons-material/Build';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DataArrayIcon from '@mui/icons-material/DataArray';
import CloudIcon from '@mui/icons-material/Cloud';
import BoltIcon from '@mui/icons-material/Bolt';

const Skills = () => {
  const skillsData = [
    {
      category: 'Languages',
      icon: <CodeIcon sx={{ fontSize: 36 }} />,
      color: '#2196f3',
      skills: ['Java', 'Python', 'R', 'JavaScript'],
      description: 'Strong proficiency in multiple programming languages for development and analysis tasks.'
    },
    {
      category: 'Frameworks',
      icon: <BuildIcon sx={{ fontSize: 36 }} />,
      color: '#9c27b0',
      skills: ['HTML', 'CSS'],
      description: 'Expertise in building responsive user interfaces and designing front-end components.'
    },
    {
      category: 'Tools & Platforms',
      icon: <CloudIcon sx={{ fontSize: 36 }} />,
      color: '#4caf50',
      skills: ['MySQL', 'AWS', 'PowerBI', 'Tableau', 'Excel', 'TensorFlow'],
      description: 'Proficient in various tools and cloud platforms for data management, analysis, and model deployment.'
    },
    {
      category: 'Technologies',
      icon: <DataArrayIcon sx={{ fontSize: 36 }} />,
      color: '#ff9800',
      skills: ['Machine Learning', 'Predictive Analysis', 'A/B Testing', 'Linux', 'Quantitative Analysis', 'Big Data', 'GitHub'],
      description: 'Hands-on experience with cutting-edge technologies for data science, analytics, and software development.'
    },
    {
      category: 'Other Skills',
      icon: <PsychologyIcon sx={{ fontSize: 36 }} />,
      color: '#f44336',
      skills: ['Statistical Analysis', 'KPI Monitoring', 'Pattern Recognition', 'Emotional Intelligence', 'Project Management', 'Problem-Solving', 'Team Coordination'],
      description: 'Strong interpersonal and analytical skills essential for leadership, collaboration, and problem-solving in dynamic environments.'
    }
  ];

  const certifications = [
    'Introduction to Machine Learning | NPTEL',
    'Data Analysis with Tableau | Tableau',
    'Supervised Machine Learning: Regression and Classification | Stanford Online',
    'Excel Skills for Data Analytics and Visualization | Macquarie University',
    'Business Analysis Fundamentals | Microsoft'
  ];

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      {/* Skills Section */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#1a1a1a',
              mb: 4,
              textAlign: 'center'
            }}
          >
            Skills & Expertise
          </Typography>

          <Grid container spacing={3}>
            {skillsData.map((category, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ height: '100%' }}
                >
                  <Paper
                    elevation={1}
                    sx={{
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      border: '1px solid #e0e0e0',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 30px -10px rgba(0,0,0,0.1)',
                        borderColor: category.color
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: category.color }}>
                      {category.icon}
                      <Typography
                        variant="h3"
                        sx={{
                          ml: 1.5,
                          fontSize: '1.3rem',
                          fontWeight: 600,
                          color: '#1a1a1a'
                        }}
                      >
                        {category.category}
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        color: '#666666',
                        mb: 2,
                        fontSize: '0.95rem',
                        lineHeight: 1.5
                      }}
                    >
                      {category.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {category.skills.map((skill, skillIndex) => (
                        <Box
                          key={skillIndex}
                          sx={{
                            bgcolor: `${category.color}15`,
                            color: category.color,
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 2,
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5
                          }}
                        >
                          <BoltIcon sx={{ fontSize: 14 }} />
                          {skill}
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Certifications Section */}
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#1a1a1a',
              mb: 4,
              textAlign: 'center'
            }}
          >
            Certifications
          </Typography>

          <Grid container spacing={3}>
            {certifications.map((cert, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ height: '100%' }}
                >
                  <Paper
                    elevation={1}
                    sx={{
                      p: 3,
                      height: '100%',
                      borderRadius: 3,
                      border: '1px solid #e0e0e0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 30px -10px rgba(0,0,0,0.1)',
                        borderColor: '#2196f3'
                      }
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#1a1a1a',
                        fontSize: '1rem',
                        fontWeight: 500,
                        lineHeight: 1.4
                      }}
                    >
                      {cert}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;


