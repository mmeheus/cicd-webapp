# Use Node.js 20.x (Alpine)
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock to the working directory in the container
COPY package.json yarn.lock ./

# Install dependencies with yarn using frozen lockfile
RUN yarn install --frozen-lockfile

# Copy the rest of the application code to the /app folder, including the src and tests directories
COPY . .

# Expose port 3000 to make the app accessible
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]