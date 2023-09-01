# Use an official Node.js runtime as base image for frontend
FROM node:14 as frontend

WORKDIR /frontend

# Copy frontend package.json and package-lock.json
COPY frontend/package*.json ./
RUN npm install

# Copy frontend source code and build it
COPY frontend /frontend
RUN npm run build

# Set up the runtime environment
FROM node:14

WORKDIR /app

# Install 'serve' to serve the React app
RUN npm install -g serve

# Copy the React build from the frontend stage
COPY --from=frontend /frontend/build /app/build

# Expose port 3000
EXPOSE 3000

# Use the CMD directive to start the service
CMD ["serve", "-s", "/app/build", "-l", "tcp://0.0.0.0:3000"]
