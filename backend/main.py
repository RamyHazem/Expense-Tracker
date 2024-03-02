from flask import request, jsonify
from config import app, db
from models import Expense


@app.route("/expenses", methods=["GET"])
def get_expenses():
    expenses = [expense.to_json() for expense in Expense.query.all()]
    return jsonify({"expenses": expenses})

@app.route("/create_expense", methods=["POST"])
def create_expense():
    title = request.json.get("titleValue")
    amount = request.json.get("amountValue")
    reason = request.json.get("reasonValue")

    if title is None or amount is None:
        return jsonify({"error": "Please provide a title and an amount"}), 400

    try:
        amount = float(amount)
    except ValueError:
        return jsonify({"error": "Amount must be a number"}), 400

    new_expense = Expense(title=title, amount=amount, reason=reason)

    try:
        db.session.add(new_expense)
        db.session.commit()
        return jsonify({"success": "New expense created", "expense": new_expense.to_json()}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/reset_expenses", methods=["POST"])
def reset_expenses():
    try:
        # Delete all expense records from the database
        Expense.query.delete()
        db.session.commit()
        return jsonify({"success": "Expenses reset successfully"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Failed to reset expenses"}), 500

if __name__ == "__main__":
        with app.app_context():
                db.create_all()
                
        app.run(debug=True)