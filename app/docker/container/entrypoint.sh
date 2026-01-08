#!/bin/bash
set -e

# Compile assets
npm run prod

# Start masonite server
python /workspace/craft serve --host 0.0.0.0 --port 8000

exec "$@"