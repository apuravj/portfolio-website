import React from 'react';
import { Container, Typography, Box, Grid, Paper, Avatar, Link } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import TimelineIcon from '@mui/icons-material/Timeline';
import AssessmentIcon from '@mui/icons-material/Assessment';
import VerifiedIcon from '@mui/icons-material/Verified'; // For Certifications
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
  
// Data Arrays
const hobbies = [
  { name: 'Sports', icon: <SportsSoccerIcon />, description: 'Football and Cricket enthusiast' },
  { name: 'Cooking', icon: <RestaurantIcon />, description: 'Cooking' },
  { name: 'Exploring', icon: <TravelExploreIcon />, description: 'Traveling and Exploring new places' },
  { name: 'Problem Solving', icon: <PsychologyIcon />, description: 'Solving complex problems and finding solutions' }
];

const skills = [
  { name: 'Data Analysis', icon: <AnalyticsIcon />, description: 'Expert in statistical analysis, data cleaning, and visualization using Python, R, and SQL.' },
  { name: 'Machine Learning', icon: <CodeIcon />, description: 'Building predictive models and implementing ML algorithms for real-world problems.' },
  { name: 'Big Data', icon: <StorageIcon />, description: 'Experience with big data technologies like Hadoop, Spark, and cloud platforms.' },
  { name: 'Data Visualization', icon: <TimelineIcon />, description: 'Creating interactive dashboards and reports using Tableau and Power BI.' },
  { name: 'Business Intelligence', icon: <AssessmentIcon />, description: 'Transforming raw data into actionable business insights.' },
  { name: 'Continuous Learning', icon: <SchoolIcon />, description: 'Constantly updating skills through certifications and courses.' }
];

const certifications = [
  {
    name: 'Cloud Computing using AWS',
    issuer: 'IIT Kanpur - MeitY',
    date: '2024',
    link: 'https://verify.eicta.digitalcredentials.in/ad0c6b48-df02-470a-a053-8ceea8e384c1'
  },
  {
    name: 'Introduction to Machine Learning',
    issuer: 'NPTEL',
    date: '2023',
    link: 'https://drive.google.com/file/d/1jqZBXD0vqQ7InTpDc1VR06fH-Qbb6niZ/view?usp=drive_link'
  }
];

const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Lovely Professional University',
    year: '2022-2026',
    description: 'Specialized in Data Science and Machine Learning',
    gpa: '7.0'
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'DS Science Academy',
    year: '2021-2022',
    description: 'PCMB',
    gpa: '74%'
  }
];

const workExperience = [
  {
    position: 'Cloud Architect',
    company: 'E & ICT Academy IIT Kanpur - MeitY',
    duration: 'July 2024 - August 2024',
    description: [
      'Created a cloud-based network using AWS VPC: Designed and set up an AWS Virtual Private Cloud (VPC) with two distinct subnets, one for the DMZ (public) network and the other for the private network, ensuring network segmentation for security and optimized traffic flow.',
      'Deployed a public EC2 web server in the DMZ subnet: Launched a web server on an EC2 instance within the DMZ subnet, making it publicly accessible via the internet, enabling users to interact with the server while maintaining control over internal services.',
      'Set up a private RDS database with restricted access: Deployed an RDS database in the private subnet, ensuring it remains inaccessible from the public network. Configured a NAT Gateway for secure, indirect access to the RDS instance, restricting database access to authorized sources only.'
    ]
  },
  {
    position: 'FreeLancer Data Analyst',
    company: 'Times of India',
    duration: 'Jan 2024 - May 2024',
    description: [
      'Project Overview: Worked on analyzing and managing large datasets, ensuring accurate data entry and processing for various business units. Focused on performing comprehensive data cleaning and validation to ensure data accuracy and consistency. Conducted trend analysis to uncover actionable insights, supporting decision-making and strategic planning for the organization.',
      'Key Responsibilities: Utilized advanced techniques in data cleaning, transformation, and validation to prepare data for further analysis. Applied statistical methods and trend analysis to provide insights that guided business strategies. Managed data workflows to ensure smooth and timely report generation.',
      'Tech Stack Used: Excel for data manipulation and basic analysis tasks; Python (Pandas, NumPy) for handling large datasets, performing complex data transformations, and conducting detailed trend analysis.'
    ]
  }
];

// Main Component
const About = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Profile Section */}
      <Box sx={{ backgroundColor: '#ffffff', py: 8, borderBottom: '1px solid #e0e0e0' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '32px' }}
          >
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Avatar
                alt="Apurav Jain"
                src="/assets/apurav_jain_profile2.jpg"
                sx={{ width: 200, height: 200, borderRadius: '50%', transition: 'transform 0.3s ease-in-out' }}
              />
            </motion.div>

            <Box>
              <Typography variant="h2" gutterBottom sx={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', mb: 2 }}>
                Hi, I’m Apurav Jain
              </Typography>
              <Typography variant="body1" sx={{ color: '#666666', fontSize: '1.1rem' }}>
                I'm currently pursuing a Bachelor of Technology in Computer Science and Engineering from Lovely Professional University, expected to graduate in July 2026. I love transforming complex datasets into actionable business insights and have worked across cloud platforms, machine learning pipelines, and real-time systems.
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Education Section */}
      <Container maxWidth="lg">
        {/* Education */}
        <Section title="Education">
          <Grid container spacing={4}>
            {education.map((edu, index) => (
              <ItemCard key={index} icon={<SchoolIcon />} title={edu.degree} subtitle={edu.institution} period={edu.year} description={edu.description} extra={`GPA: ${edu.gpa}`} />
            ))}
          </Grid>
        </Section>

        {/* Work Experience */}
        <Section title="Work Experience">
          <Grid container spacing={4}>
            {workExperience.map((work, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper elevation={0} sx={cardStyle}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <WorkIcon sx={{ mr: 2, color: 'primary.main', fontSize: 32 }} />
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      {work.position}
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" color="primary" gutterBottom>{work.company}</Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>{work.duration}</Typography>
                  <Box sx={{ mt: 2 }}>
                    {work.description.map((item, i) => (
                      <Typography key={i} variant="body1" sx={{ mt: 1 }}>
                        • {item}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Section>

        {/* Certifications */}
        <Section title="Certifications">
          <Grid container spacing={4}>
            {certifications.map((cert, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper elevation={0} sx={cardStyle}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <VerifiedIcon sx={{ mr: 2, color: 'primary.main', fontSize: 32 }} />
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      {cert.name}
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" color="primary" gutterBottom>{cert.issuer}</Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>{cert.date}</Typography>
                  <Link href={cert.link} target="_blank" rel="noopener" sx={{ mt: 2, display: 'inline-block', color: '#1976d2' }}>
                    View Certificate
                  </Link>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Section>

        {/* Hobbies */}
        <Section title="Hobbies & Interests">
          <Grid container spacing={4}>
            {hobbies.map((hobby, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper elevation={0} sx={cardStyle}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {React.cloneElement(hobby.icon, { sx: { fontSize: 40 } })}
                  </Box>
                  <Typography variant="h6" gutterBottom>{hobby.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{hobby.description}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Section>
      </Container>
    </Box>
  );
};

// Helper Components
const Section = ({ title, children }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
    <Box sx={{ py: 6 }}>
      <Typography variant="h2" gutterBottom sx={{ fontSize: '2.5rem', fontWeight: 700, textAlign: 'center', mb: 4 }}>
        {title}
      </Typography>
      {children}
    </Box>
  </motion.div>
);

const ItemCard = ({ icon, title, subtitle, period, description, extra }) => (
  <Grid item xs={12} md={6}>
    <Paper elevation={0} sx={cardStyle}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        {React.cloneElement(icon, { sx: { mr: 2, color: 'primary.main', fontSize: 32 } })}
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="subtitle1" color="primary" gutterBottom>{subtitle}</Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>{period}</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>{description}</Typography>
      {extra && (
        <Typography variant="body2" color="primary" sx={{ mt: 2, fontWeight: 500 }}>
          {extra}
        </Typography>
      )}
    </Paper>
  </Grid>
);

const cardStyle = {
  p: 4,
  height: '100%',
  borderRadius: 4,
  border: '1px solid #e0e0e0',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
    borderColor: '#2196f3'
  }
};

export default About;


