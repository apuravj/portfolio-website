import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      title: 'Introduction to Data Analysis with Python',
      date: 'April 20, 2025',
      excerpt: 'Learn how to use Python libraries like Pandas and NumPy for effective data analysis.',
      image: '/assets/python-data-analysis.jpg',
      readTime: '5 min read'
    },
    {
      title: 'Machine Learning Model Evaluation Metrics',
      date: 'April 18, 2025',
      excerpt: 'Understanding different metrics to evaluate your machine learning models.',
      image: '/assets/ml-metrics.jpg',
      readTime: '7 min read'
    },
    {
      title: 'Data Visualization Best Practices',
      date: 'April 15, 2025',
      excerpt: 'Tips and techniques for creating effective data visualizations.',
      image: '/assets/data-viz.jpg',
      readTime: '6 min read'
    }
  ];

  return (
    <Container>
      <Box py={8}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" gutterBottom sx={{ color: 'primary.main' }}>
            Blog
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Insights and tutorials about data analysis and machine learning
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {posts.map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'background.paper',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.3s ease-in-out'
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.image}
                    alt={post.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                      {post.date} · {post.readTime}
                    </Typography>
                    <Typography color="text.secondary">
                      {post.excerpt}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Blog;
