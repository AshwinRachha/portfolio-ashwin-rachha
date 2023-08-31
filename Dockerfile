# Use an official Node.js runtime as base image for frontend
FROM node:14 as frontend

WORKDIR /frontend

COPY frontend/package*.json ./
RUN npm install

COPY frontend /frontend
RUN npm run build

# Use an official Python runtime for backend
FROM python:3.8-slim

WORKDIR /app

# Install node and serve to serve the React app
RUN apt-get update && apt-get install -y nodejs npm && apt-get clean && npm install -g serve

# Install FastAPI dependencies
COPY backend/app/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the React build from the frontend stage
COPY --from=frontend /frontend/build /app/frontend/build

# Copy the backend code
COPY backend/app /app

# Expose ports (for documentation purposes)
EXPOSE 8000
EXPOSE 3000

# Use the CMD directive to start both services
CMD serve -s /app/frontend/build -l tcp://0.0.0.0:3000 && sleep 10 && uvicorn main:app --host 0.0.0.0 --port 8000
