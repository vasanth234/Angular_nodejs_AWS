# =========================
# Step 1: Build Angular app
# =========================
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build Angular app (production)
RUN npm run build -- --configuration production


# =========================
# Step 2: Serve with Nginx
# =========================
FROM nginx:alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build output (IMPORTANT FIX)
COPY --from=build /app/dist/* /usr/share/nginx/html/

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]