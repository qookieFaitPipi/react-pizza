from flask import *
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

host = Flask(__name__)
host.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(host)
CORS(host)

class Products(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  key = db.Column(db.Integer, nullable=False)
  title = db.Column(db.String(100), nullable=False)
  price = db.Column(db.Integer, nullable=False)
  imageURL = db.Column(db.String(100), nullable=False)
  product_category = db.Column(db.Integer, nullable=False)


class User(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  login = db.Column(db.String(100), nullable=False)
  name = db.Column(db.String(100), nullable=True)
  tel = db.Column(db.String(100), nullable=True)
  email = db.Column(db.String(100), nullable=True)
  password = db.Column(db.String(600), nullable=False)
  rights = db.Column(db.Integer, nullable=False)


@host.route('/entry', methods=["POST"])
def entry():
  data = request.get_json()
  item = User.query.filter_by(login=data['userLogin']).first()

  if not item:
    return jsonify({"status": False})
  
  if check_password_hash(item.password, data['password']):
    return jsonify({"status": True, "userId": item.id, "userLogin": data['userLogin']})
  else:
    return jsonify({"status": False})


@host.route('/register', methods=["POST"])
def register():
  data = request.get_json()
  user = User.query.filter_by(login=data['userLogin']).first()

  if user:
    return jsonify({"status": False}) 

  hash = generate_password_hash(data['password'])

  item = User(login=data['userLogin'], password=hash, rights=0)

  try:
    db.session.add(item)
    db.session.commit()
    return jsonify({"status": True})

  except:
    return jsonify({"status": False})


@host.route('/save_user_settings/<int:id>', methods=["POST"])
def save_user_settings(id):
  data = request.get_json()
  user = User.query.filter_by(id=id).first()
  
  user.name = data['userName']
  user.tel = data['userTel']
  user.email = data['userEmail']

  try:
    db.session.add(user)
    db.session.commit()
    return jsonify({"status": True})

  except:
    return jsonify({"status": False})



@host.route('/get_products')
def get_products():
  items = Products.query.order_by(Products.id).all()
  items = list(map(lambda el: {'id': el.id, 'key': el.key, 'title': el.title, 'price': el.price, 'product_category': el.product_category, 'imageURL': 'http://0.0.0.0:5000/' + el.imageURL}, items))
  return jsonify(items), 200
  

if __name__ == "__main__":
  host.run(host="0.0.0.0", debug=True)