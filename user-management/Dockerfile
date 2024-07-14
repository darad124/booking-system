FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Update npm to the latest version
RUN npm install -g npm@latest

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application's code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["node", "src/app.js"]
