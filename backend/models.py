from config import db

class Expense(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        title = db.Column(db.String(40), unique=False, nullable=False)
        amount = db.Column(db.Integer, unique=False, nullable=False)
        reason = db.Column(db.String(100), unique=False, nullable=True)
        
        def to_json():
                if reason:
                        
                        return {
                                "id" : self.id,
                                "title" : self.title,
                                "amount" : self.amount,
                                "reason" : self.reason
                        }
                else:
                        return {
                                "id" : self.id,
                                "title" : self.title,
                                "amount" : self.amount
                        }
                