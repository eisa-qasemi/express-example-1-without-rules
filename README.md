# Express.js Projects API

A RESTful API built with Express.js for managing projects data.

## Features

- Get all projects
- Get project by ID
- Filter projects by status
- Health check endpoint
- CORS enabled
- Error handling
- Sample data included

## Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server

### Development mode (with auto-restart):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start on port 3000 (or the PORT environment variable if set).

## API Endpoints

### Base URL
```
http://localhost:3000
```

### Available Endpoints

#### 1. Get All Projects
- **URL:** `GET /api/projects`
- **Description:** Retrieve all projects
- **Response:**
  ```json
  {
    "success": true,
    "data": [...],
    "count": 4
  }
  ```

#### 2. Get Project by ID
- **URL:** `GET /api/projects/:id`
- **Description:** Retrieve a specific project by its ID
- **Example:** `GET /api/projects/1`
- **Response:**
  ```json
  {
    "success": true,
    "data": {
      "id": 1,
      "name": "E-commerce Platform",
      "description": "A full-stack e-commerce platform...",
      "status": "In Progress",
      "startDate": "2024-01-15",
      "endDate": "2024-06-30",
      "technologies": ["React", "Node.js", "MongoDB", "Express"],
      "team": ["John Doe", "Jane Smith", "Mike Johnson"],
      "progress": 65
    }
  }
  ```

#### 3. Get Projects by Status
- **URL:** `GET /api/projects/status/:status`
- **Description:** Filter projects by their status
- **Example:** `GET /api/projects/status/in-progress`
- **Available statuses:** "In Progress", "Completed", "Planning"
- **Response:**
  ```json
  {
    "success": true,
    "data": [...],
    "count": 2
  }
  ```

#### 4. Health Check
- **URL:** `GET /health`
- **Description:** Check if the server is running
- **Response:**
  ```json
  {
    "success": true,
    "message": "Server is running",
    "timestamp": "2024-01-15T10:30:00.000Z"
  }
  ```

#### 5. API Information
- **URL:** `GET /`
- **Description:** Get API information and available endpoints
- **Response:**
  ```json
  {
    "success": true,
    "message": "Projects API is running",
    "endpoints": {
      "GET /api/projects": "Get all projects",
      "GET /api/projects/:id": "Get project by ID",
      "GET /api/projects/status/:status": "Get projects by status",
      "GET /health": "Health check"
    }
  }
  ```

## Project Data Structure

Each project object contains:
- `id`: Unique identifier
- `name`: Project name
- `description`: Project description
- `status`: Current status (In Progress, Completed, Planning)
- `startDate`: Project start date
- `endDate`: Project end date
- `technologies`: Array of technologies used
- `team`: Array of team members
- `progress`: Progress percentage (0-100)

## Testing the API

You can test the API using:

1. **Browser:** Navigate to `http://localhost:3000/api/projects`
2. **cURL:**
   ```bash
   curl http://localhost:3000/api/projects
   ```
3. **Postman:** Import the endpoints and test them
4. **JavaScript fetch:**
   ```javascript
   fetch('http://localhost:3000/api/projects')
     .then(response => response.json())
     .then(data => console.log(data));
   ```

## Error Handling

The API includes comprehensive error handling:
- 404 for non-existent endpoints
- 404 for projects not found
- 500 for server errors
- Proper error messages and status codes

## Dependencies

- **express**: Web framework
- **cors**: Cross-origin resource sharing
- **nodemon**: Development dependency for auto-restart

## License

MIT 