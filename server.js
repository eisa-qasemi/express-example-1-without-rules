const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Sample projects data
const projects = [
  {
    id: 1,
    name: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with React and Node.js",
    status: "In Progress",
    startDate: "2024-01-15",
    endDate: "2024-06-30",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    team: ["John Doe", "Jane Smith", "Mike Johnson"],
    progress: 65
  },
  {
    id: 2,
    name: "Mobile Banking App",
    description: "Secure mobile banking application for iOS and Android",
    status: "Completed",
    startDate: "2023-08-01",
    endDate: "2024-02-28",
    technologies: ["React Native", "Firebase", "Node.js"],
    team: ["Sarah Wilson", "David Brown", "Emily Davis"],
    progress: 100
  },
  {
    id: 3,
    name: "AI Chatbot",
    description: "Intelligent chatbot for customer support using machine learning",
    status: "Planning",
    startDate: "2024-03-01",
    endDate: "2024-08-31",
    technologies: ["Python", "TensorFlow", "Flask", "PostgreSQL"],
    team: ["Alex Chen", "Lisa Wang"],
    progress: 15
  },
  {
    id: 4,
    name: "Project Management Dashboard",
    description: "Real-time project management dashboard with analytics",
    status: "In Progress",
    startDate: "2024-02-01",
    endDate: "2024-05-15",
    technologies: ["Vue.js", "Express", "Socket.io", "MySQL"],
    team: ["Tom Anderson", "Rachel Green", "Chris Lee"],
    progress: 40
  }
];

// Routes

// GET /api/projects - Get all projects
app.get('/api/projects', (req, res) => {
  try {
    res.json({
      success: true,
      data: projects,
      count: projects.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching projects',
      error: error.message
    });
  }
});

// GET /api/projects/:id - Get project by ID
app.get('/api/projects/:id', (req, res) => {
  try {
    const projectId = parseInt(req.params.id);
    const project = projects.find(p => p.id === projectId);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }
    
    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching project',
      error: error.message
    });
  }
});

// GET /api/projects/status/:status - Get projects by status
app.get('/api/projects/status/:status', (req, res) => {
  try {
    const status = req.params.status;
    const filteredProjects = projects.filter(p => 
      p.status.toLowerCase() === status.toLowerCase()
    );
    
    res.json({
      success: true,
      data: filteredProjects,
      count: filteredProjects.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error filtering projects',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Projects API is running',
    endpoints: {
      'GET /api/projects': 'Get all projects',
      'GET /api/projects/:id': 'Get project by ID',
      'GET /api/projects/status/:status': 'Get projects by status',
      'GET /health': 'Health check'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.message
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📊 Projects API available at http://localhost:${PORT}/api/projects`);
  console.log(`🏥 Health check at http://localhost:${PORT}/health`);
}); 