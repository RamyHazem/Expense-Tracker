from flask import request, jsonify
from config import app, db
from models import Expense


@app.route("/expenses", methods=["GET"])
def get_expenses():
        expenses = list(map(lambda x: x.to_json(), Expense.query.all()))
        return jsonify({"expenses: ": expenses})

@app.route("/create_expense", methods=["POST"])
def create_expense():
        title = request.json.get("Title")
        amount = request.json.get("Amount")
        reason = request.json.get("Reason")
        
        if not title or not amount:
                return jsonify({"Please enter a title and an amount! "})
        
        new_expense = Expense(title, amount, reason)
        
        try:
                db.session.add(new_expense)
                db.session.commit()
                return jsonify({"new expense created": new_expense})
        except Exception as e:
                return jsonify({"error encountered": e})

if __name__ == "__main__":
        with app.app_context():
                db.create_all()
                
        app.run(debug=True)