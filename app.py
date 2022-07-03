#from crypt import methods
from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///highscores.db'
app.config['SECRET_KEY'] = 'sdhkjhasdhguhasdkjgekjrcdoiaskdjgfhlkasdjglz'

db= SQLAlchemy(app)

# database for level 1
class Players(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(6), nullable=False)
    score = db.Column(db.Integer, nullable=False)
    date_added = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"{self.name} _______________ {self.score}"

# database for level 2
class Players2(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(6), nullable=False)
    score = db.Column(db.Integer, nullable=False)
    date_added = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"{self.name} _______________ {self.score}"


# database for level 3 
class Players3(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(6), nullable=False)
    score = db.Column(db.Integer, nullable=False)
    date_added = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"{self.name} _______________ {self.score}"


class Players4(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(6), nullable=False)
    score = db.Column(db.Integer, nullable=False)
    date_added = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"{self.name} _______________ {self.score}"

@app.route('/')
def home():
    return render_template('menu.html')

@app.route('/level1', methods=['GET', 'POST'])
def level1():
    scores = Players.query.all()
     
    if request.method == 'POST':
        player = Players(name=request.form['name'], score=request.form['pnts'])
        db.session.add(player)
        db.session.commit()
    return render_template('level1.html', scores=scores)

@app.route('/level2', methods=['GET', 'POST'])
def level2():
    scores = Players2.query.all()
     
    if request.method == 'POST':
        player = Players2(name=request.form['name'], score=request.form['pnts'])
        db.session.add(player)
        db.session.commit()
    return render_template('level2.html', scores=scores)

@app.route('/level3', methods=['GET', 'POST'])
def level3():
    scores = Players3.query.all()
     
    if request.method == 'POST':
        player = Players3(name=request.form['name'], score=request.form['pnts'])
        db.session.add(player)
        db.session.commit()
    return render_template('level3.html', scores=scores)

@app.route('/level4', methods=['GET', 'POST'])
def level4():
    scores = Players4.query.all()
     
    if request.method == 'POST':
        player = Players4(name=request.form['name'], score=request.form['pnts'])
        db.session.add(player)
        db.session.commit()
    return render_template('level4.html', scores=scores)

if __name__ == "__main__":
    app.run(debug=True)