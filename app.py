from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def index(result=None):
    # Attempt to get the result from URL parameters, defaulting to None if not present
    result = request.args.get('result', None)
    return render_template('index.html', result=result)