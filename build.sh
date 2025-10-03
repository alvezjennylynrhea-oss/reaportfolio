#!/bin/bash
echo "Starting build process..."

# Install dependencies
echo "Installing dependencies..."
npm ci

# Clear any previous builds
echo "Cleaning previous builds..."
rm -rf dist

# Build the project
echo "Building project..."
npm run build

echo "Build completed!"