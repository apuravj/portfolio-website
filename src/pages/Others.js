import React from 'react';
import { Container, Typography, Box, Grid, Divider } from '@mui/material';
import { motion } from 'framer-motion';

const Others = () => {
  const items = [
    {
      title: 'Academic Excellence Distinction',
      description: 'Ranked among the top 10% of students on the Dean’s List at my university, recognizing outstanding academic performance across all semesters.',
      date: 'February 2025',
    },
    {
      title: 'Finalist, Smart India Hackathon, 2024',
      description: 'Selected as a finalist in the Smart India Hackathon, building a browser-based face authentication platform for UIDAI with liveness detection.',
      date: 'November 2024',
    },
    {
      title: 'Gold Medalist, International Math Olympiad',
      description: (
        <>
          Won the gold medal in the International Math Olympiad, demonstrating analytical thinking and advanced problem-solving skills in mathematics.
          <br />
          Achieved International Rank: 4819, All India Rank: 332, and State Rank: 14.
        </>
      ),
      date: 'July 2018',
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Typography variant="h2" gutterBottom sx={{ fontSize: '1.8rem', fontWeight: 700, color: '#1a1a1a', mb: 2 }}>
            Others
          </Typography>
          <Typography variant="body1" sx={{ color: '#666666', fontSize: '1rem', mb: 4 }}>
            Achievements, Certifications, Events, and more
          </Typography>
        </motion.div>

        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Box
                  sx={{ 
                    backgroundColor: '#ffffff',
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    p: 3,
                    height: '100%',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 3px 10px rgba(0, 0, 0, 0.08)'
                    }
                  }}
                >
                  <Typography variant="h3" gutterBottom sx={{ fontSize: '1.3rem', fontWeight: 600, color: '#1a1a1a', mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: '#1a1a1a', fontSize: '0.95rem', mb: 1 }}>
                    {item.date}
                  </Typography>
                  <Divider sx={{ my: 2, borderColor: '#e0e0e0' }} />
                  <Typography sx={{ color: '#666666', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    {item.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Others;

