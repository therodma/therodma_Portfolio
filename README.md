# Roderick Ma — Portfolio

🌐 **Live Site:** https://therodma.github.io/therodma_Portfolio

## Development (live reload)

```bash
cd frontend
npm run dev
```
Open http://localhost:5173

## Production (Python Flask server)

```bash
# 1. Build the React app
cd frontend
npm run build

# 2. Install Python dependencies (one time)
cd ..
pip install -r requirements.txt

# 3. Start the server
python server.py
```
Open http://localhost:5000
