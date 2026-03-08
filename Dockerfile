# Stage 1: Build
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build the app
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine

# Copy the custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the custom port
EXPOSE 5632

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
