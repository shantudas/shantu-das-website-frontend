#!/bin/bash

set -e

SERVER="root@139.59.243.111"
TARGET="/opt/shantu-das-website"

echo "🔨 Building Nuxt project..."
npm run build

echo "🚀 Uploading files to server..."
rsync -avz --delete .output/public/ $SERVER:$TARGET/

echo "🔐 Fixing permissions..."
ssh $SERVER "chown -R www-data:www-data $TARGET && chmod -R 755 $TARGET"

echo "✅ Deployment completed successfully!"
