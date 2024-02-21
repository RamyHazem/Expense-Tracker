from config import db

class Expense(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        reason = db.Column(db.String(), unique=False, nullable=False)
        