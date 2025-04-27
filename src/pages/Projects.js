import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Box, Button, Chip, Stack, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const projects = [
    {
      title: 'Employee Attrition Risk Analysis',
      description: 'Developed a machine learning model to predict employee attrition risk using historical HR data. Implemented feature engineering and Random Forest algorithm to identify key factors contributing to employee turnover.',
      image: '/assets/Employee.png',
      tags: ['R Language', 'dplyr', 'ggplot2', 'caret', 'randomForest' , 'XGBoost'],
      highlights: [
        'Built a predictive model to analyze employee attrition risk using machine learning.',
        'Provided data-driven recommendations to improve employee retention strategies.',
        'Identified key factors influencing attrition through exploratory data analysis (EDA) and statistical insights.'
      ],
      github: 'https://github.com/apuravj/AttritionRiskModel',
      demo: '#'
    },
    {
      title: 'Personal Loan Default Prediction',
      description: 'Built an advanced machine learning model to assess loan default probability. Used gradient boosting and ensemble methods to improve prediction accuracy and reduce false positives.',
      image: '/assets/loan.png',
      tags: ['Python', 'Scikit-learn', 'XGBoost', 'Matplotlib', 'Seaborn'],
      highlights: [
        'Built a machine learning model to analyze and predict employee attrition, achieving 97% accuracy.',
        'Performed Data preprocessing, feature engineering, and handling class imbalance for accuracy.',
        'Evaluated model performance using ROC, precision-recall, and F1-score for balanced classification.'
      ],
      github: 'https://github.com/apuravj/Personal-Loan-Default-Prediction',
      demo: '#'
    },
    {
      title: 'Face Liveness Detection Model',
      description: 'Implemented deep learning-based face liveness detection system to prevent spoofing attacks. Used transfer learning and custom CNN architecture for robust performance.',
      image: '/assets/face.png',
      tags: ['Python', 'YOLO', 'OpenCV', 'TensorFlow', 'ONNX' , 'Tensor.js', 'Flask'],
      highlights: [
        'Developed a face authentication model with face liveness detection for UIDAI, ensuring secure identity verification.',
        'Implemented YOLO-based face detection and applied data preprocessing for robust model training.',
        'Optimized ML models with ONNX/Tensor.js for real-time (≤500ms) detection within a 5MB size limit.'
      ],
      github: 'https://github.com/apuravj/Face-Liveness-Detection-Model',
      demo: '#'
    },
    {
      title: 'Heart Failure Survival Analysis Dashboard',
      description: 'This project focuses on analyzing survival outcomes in heart failure patients using a clinical dataset of 299 individuals. Leveraging Tableau, I designed an interactive dashboard that uncovers critical insights into patient mortality based on age, gender, medical conditions, and key biomarkers like serum creatinine and ejection fraction.',
      image: '/assets/survival.png',
      tags: ['Tableau', 'Statistical Modeling', 'Data Visualization'],
      highlights: [
        'Designed an interactive Tableau dashboard to analyze heart failure survival using clinical data.',
        'Visualized survival trends by demographics and biomarkers through charts, histograms, and box plots.',
        'Highlighted key risk factors affecting patient mortality to support data – driven clinical decisions.'
      ],
      github: 'https://github.com/apuravj/Heart-Failure-Survival-Analysis-Dashboard',
      demo: '#'
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Box py={12}>
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
                mb: 4
              }}
            >
              Featured Projects
            </Typography>
            <Typography 
              variant="body1"
              sx={{ 
                color: '#666666', 
                fontSize: '1.1rem',
                mb: 6
              }}
            >
              A showcase of my data analysis and machine learning projects, demonstrating expertise in statistical modeling and predictive analytics.
            </Typography>
          </motion.div>

          <Grid container spacing={6}>
            {projects.map((project, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper 
                    elevation={0}
                    sx={{ 
                      display: 'flex', 
                      flexDirection: { xs: 'column', md: 'row' },
                      backgroundColor: '#ffffff',
                      border: '1px solid #e0e0e0',
                      overflow: 'hidden'
                    }}
                  >
                    <Box 
                    sx={{ 
                      width: { xs: '100%', md: '40%' }, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      backgroundColor: '#fafafa'
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ 
                        width: '100%',
                        height: 'auto',
                        maxHeight: '400px',
                        objectFit: 'contain',
                        p: 2
                      }}
                      image={project.image}
                      alt={project.title}
                    />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', md: '60%' } }}>
                      <Box sx={{ p: 4 }}>
                        <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: 600, color: '#1a1a1a', mb: 2 }}>
                          {project.title}
                        </Typography>
                        <Typography sx={{ color: '#666666', fontSize: '1.1rem', mb: 4 }}>
                          {project.description}
                        </Typography>
                        
                        <Stack direction="row" spacing={1} sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}>
                          {project.tags.map((tag, tagIndex) => (
                            <Chip 
                              key={tagIndex} 
                              label={tag} 
                              variant="outlined"
                              size="small"
                              sx={{ 
                                borderColor: '#1a1a1a',
                                color: '#1a1a1a',
                                '&:hover': { borderColor: '#333333' }
                              }}
                            />
                          ))}
                        </Stack>

                        <Typography variant="h6" gutterBottom sx={{ fontSize: '1.1rem', fontWeight: 600, color: '#1a1a1a', mb: 2 }}>
                          Key Highlights
                        </Typography>
                        <ul style={{ paddingLeft: '20px', margin: '0 0 4rem 0' }}>
                          {project.highlights.map((highlight, highlightIndex) => (
                            <Typography 
                              key={highlightIndex} 
                              component="li" 
                              sx={{ 
                                color: '#666666',
                                fontSize: '1rem',
                                mb: 1
                              }}
                            >
                              {highlight}
                            </Typography>
                          ))}
                        </ul>

                        <Box sx={{ display: 'flex', gap: 2 }}>
                          <Button
                            variant="outlined"
                            startIcon={<GitHubIcon />}
                            href={project.github}
                            target="_blank"
                            sx={{ 
                              borderColor: '#1a1a1a',
                              color: '#1a1a1a',
                              px: 3,
                              py: 1,
                              '&:hover': { 
                                borderColor: '#333333',
                                bgcolor: 'transparent',
                                color: '#333333'
                              }
                            }}
                          >
                            GitHub
                          </Button>
                          <Button
                            variant="outlined"
                            startIcon={<LaunchIcon />}
                            href={project.demo}
                            target="_blank"
                            sx={{ 
                              borderColor: '#1a1a1a',
                              color: '#1a1a1a',
                              px: 3,
                              py: 1,
                              '&:hover': { 
                                borderColor: '#333333',
                                bgcolor: 'transparent',
                                color: '#333333'
                              }
                            }}
                          >
                            Live Demo
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
