from flask import request, jsonify
from config import app, db
from models import Expense


@app.route("/expenses", methods=["GET"])
def get_expenses():
        expenses = map(lambda x: x.to_json(), Expense.query.all())
        return jsonify({"expenses: ", expenses})


if __name__ == "__main__":
        with app.app_context():
                db.create_all()
                
        app.run()