# Nooro Task Management Application

## Overview
Nooro is a modern, responsive task management web application built with Next.js and Tailwind CSS. It provides an intuitive interface for creating, editing, and managing tasks.

## Features
- Create new tasks
- Edit existing tasks
- Responsive design for mobile and desktop
- Clean, minimalist UI
- Built with Next.js 14 and TypeScript

## Prerequisites
- Node.js (v18 or later)
- npm (v9 or later)
- Docker (optional, for containerized deployment)

## Local Development Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/nooro-task-management.git
cd nooro-task-management
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## Docker Deployment

### Build Docker Image
```bash
docker build -t nooro-frontend .
```

### Run Docker Container
```bash
docker run -p 3000:3000 nooro-frontend
```

## Project Structure
- `src/app/`: Main application pages and components
- `src/assets/`: Static assets like images
- `Dockerfile`: Docker configuration
- `next.config.js`: Next.js configuration

## Key Technologies
- Next.js 14
- TypeScript
- Tailwind CSS
- Docker

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License.