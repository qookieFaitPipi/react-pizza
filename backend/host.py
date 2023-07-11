from flask import *
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

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

@host.route('/get_products', methods=['POST'])
def get_products():
  items = Products.query.order_by(Products.id).all()
  items = list(map(lambda el: {'id': el.id, 'key': el.key, 'title': el.title, 'price': el.price, 'imageURL': 'http://0.0.0.0:5000/' + el.imageURL}, items))
  return jsonify(items)


if __name__ == "__main__":
  host.run(host="0.0.0.0", debug=True)