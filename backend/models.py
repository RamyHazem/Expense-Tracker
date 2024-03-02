from config import db

class Expense(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    reason = db.Column(db.String(100), nullable=True)

    def to_json(self):
        return {
            'id': self.id,
            'title': self.title,
            'amount': self.amount,
            'reason': self.reason
        }