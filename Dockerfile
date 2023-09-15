# Step 1: Build the React application
FROM node:14 as frontend
WORKDIR /frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend /frontend
RUN npm run build

# Step 2: Set up the FastAPI application
FROM python:3.8-slim as backend
WORKDIR /backend/app
COPY backend/app/requirements.txt .
COPY backend/app/llm_engine.py .
COPY backend/app/__init__.py .
COPY backend/app/main.py .
RUN pip install --no-cache-dir -r requirements.txt

# Step 3: Set up the final image
FROM node:14
WORKDIR /app
RUN npm install -g serve
COPY --from=frontend /frontend/build /app/build
COPY --from=backend /backend/app /app/backend/app
EXPOSE 3000
EXPOSE 8000

# Add a script to run both applications
COPY run.sh /app
RUN chmod +x /app/run.sh
CMD ["/app/run.sh"]
