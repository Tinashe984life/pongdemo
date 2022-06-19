from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('menu.html')

@app.route('/level1')
def level1():
    return render_template('level1.html')

@app.route('/level2')
def level2():
    return render_template('level2.html')

if __name__ == "__main__":
    app.run(debug=True)