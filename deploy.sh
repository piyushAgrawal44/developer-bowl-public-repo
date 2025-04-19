#!/bin/bash

set -e 

# Define your target directory
TARGET_DIR="./developer-bowl-build"

# Clone repository in target directory
echo "🔄 Cloning repository..."
git clone https://github.com/piyushAgrawal44/developer-bowl-build.git $TARGET_DIR || { echo "❌ Git clone failed!"; exit 1; }

# Copy files from 'out' to target directory
echo "📂 Copying new files..."
rm -rf $TARGET_DIR/*   
cp -r out/* $TARGET_DIR/ || { echo "❌ File copy failed!"; exit 1; }

# Navigate to the target directory
cd $TARGET_DIR

# Add, commit, and push changes
echo "📌 Staging changes..."
git add . || { echo "❌ Git add failed!"; exit 1; }

echo "📝 Committing changes..."
git commit -m "new build created" || { echo "❌ Git commit failed!"; exit 1; }

echo "🚀 Pushing to GitHub..."
git push origin main || { echo "❌ Git push failed!"; exit 1; }

echo "✅ Deployment complete!"

# Move back to root directory (ensure it's correct)
cd "$(dirname "$0")"

echo "🗑️ Removing old folders..."
rm -rf ./out || { echo "❌ Failed to delete 'out'"; exit 1; }
rm -rf ./developer-bowl-build || { echo "❌ Failed to delete 'developer-bowl-build'"; exit 1; }

echo "🎉 Cleanup complete!"