#!/bin/bash

# Start the FastAPI application
python /app/backend/app/main.py &

# Start the React application
serve -s /app/build -l tcp://0.0.0.0:3000
