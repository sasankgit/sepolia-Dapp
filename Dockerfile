# Stage 1: Build frontend
FROM node:lts-alpine as frontend
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Build backend
FROM python:3.11-slim
WORKDIR /app
COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY ./backend .
COPY --from=frontend /app/dist /app/static
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
