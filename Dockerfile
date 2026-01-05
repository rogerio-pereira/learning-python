FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /workspace

# Optional: if you later need dependencies, uncomment and use requirements.txt
# COPY requirements.txt .
# RUN pip install --no-cache-dir -r requirements.txt

COPY app/ /workspace/
