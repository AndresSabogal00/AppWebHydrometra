from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/nueva')
def nueva():
    return render_template('nueva.html')

if __name__ == '__main__':
    app.run(debug=True)
