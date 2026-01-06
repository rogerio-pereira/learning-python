FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /workspace

# Optional: if you later need dependencies, uncomment and use requirements.txt
COPY app/requirements.txt .
COPY app/requirements-dev.txt .
RUN pip install --no-cache-dir -r requirements.txt \
    -r requirements-dev.txt

COPY app/ /workspace/

CMD ["tail", "-f", "/dev/null"]