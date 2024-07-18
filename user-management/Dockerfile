FROM node:16-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Update npm to a specific version compatible with Node.js 16
RUN npm install -g npm@8

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies (both production and development)
RUN npm install

# Copy the rest of the application's code
COPY . .

# Optional: Build your application if needed
# RUN npm run build

# Remove development dependencies
RUN npm prune --production

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["node", "src/app.js"]
