from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///highscores.db'
app.config['SECRET_KEY'] = 'sdhkjhasdhguhasdkjgekjrcdoiaskdjgfhlkasdjglz'

db= SQLAlchemy(app)

class Players(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(6), nullable=False)
    score = db.Column(db.Integer, nullable=False)
    date_added = db.Column(db.DateTime, default=datetime.utcnow)

@app.route('/')
def home():
    return render_template('menu.html')

@app.route('/level1', methods=['GET', 'POST'])
def level1():
    if request.method == 'POST':
        player = Players(name=request.form['name'], score=request.form['pnts'])
        
    return render_template('level1.html')

@app.route('/level2')
def level2():
    return render_template('level2.html')

@app.route('/level3')
def level3():
    return render_template('level3.html')

@app.route('/level4')
def level4():
    return render_template('level4.html')

if __name__ == "__main__":
    app.run(debug=True)