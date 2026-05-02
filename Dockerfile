FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build the Vite application
RUN npm run build

# Use a lightweight Nginx image to serve the static files
FROM nginx:alpine

# Copy the built assets from the build stage to the Nginx web root
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the default Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the default Cloud Run port
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
