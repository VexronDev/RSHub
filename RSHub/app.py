from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/login', methods=['POST'])
def login():
    # =================== GET User info ====================
    username = request.json.get('username')
    password = request.json.get('password')
    
    # Perform your login logic here
    # For demonstration, returning an error response
    return jsonify({'result': False, 'error': "Error 405"})

if __name__ == '__main__':
    app.run(debug=True)
