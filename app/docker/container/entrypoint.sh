#!/bin/bash
set -e

python /workspace/craft serve

exec "$@"