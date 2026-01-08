#!/bin/bash
set -e

# Use a local virtualenv to persist dependencies (similar to vendor/)
VENV_PATH="/var/www/app/.venv"

# Create venv if it does not exist
if [ ! -d "$VENV_PATH" ]; then
    python -m venv "$VENV_PATH"
fi

# Activate venv
. "$VENV_PATH/bin/activate"

# Install pip dependencies
pip install --no-cache-dir -r requirements.txt

# Install npm dependencies
npm install

# Compile assets
npm run prod

# Start masonite
# python /var/www/app/craft serve --host 0.0.0.0 --port 8000
# Using supervisord to manage processes

exec "$@"
