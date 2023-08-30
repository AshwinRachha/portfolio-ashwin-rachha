# Frontend Stage
FROM node:14 as frontend

WORKDIR /frontend

COPY frontend/package*.json ./
RUN npm install

COPY frontend /frontend
RUN npm run build

# Backend Stage
FROM python:3.8-slim

WORKDIR /app

# Install FastAPI dependencies
COPY backend/app/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Install the serve tool globally
RUN apt-get update && apt-get install -y npm && npm install -g serve && apt-get clean

# Copy the React build from the frontend stage
COPY --from=frontend /frontend/build /app/frontend/build

# Copy the backend code
COPY backend/app /app

# Expose ports (for documentation purposes)
EXPOSE 8000
EXPOSE 3000

# Use the CMD directive to start both services
#CMD uvicorn main:app --host 0.0.0.0 --port 8000 & serve -s /app/frontend/build -l 0.0.0.0:3000
CMD serve -s /app/frontend/build -l 0.0.0.0:3000 && sleep 30 && uvicorn main:app --host 0.0.0.0 --port 8000
