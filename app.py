import os
from flask import (Flask, flash, render_template,
                   redirect, request, session, url_for)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env


app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


@app.route("/show_info")
def show_info():
    user_details = mongo.db.user_details.find()
    return render_template("sentinfo.html", user_details=user_details)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/send_info", methods=["GET", "POST"])
def send_info():
    if request.method == "POST":
        user_details = {
            "user_name": request.form.get("user_name"),
            "user_lname": request.form.get("user_lname"),
            "user_contact": request.form.get("user_contact"),
            "user_street": request.form.get("user_street"),
            "user_postcode": request.form.get("user_postcode"),
            "user_message": request.form.get("user_message"),
            "user_date": request.form.get("user_date"),
        }
        mongo.db.user_details.insert_one(user_details)
        flash("Request sent to cleaner")
        return redirect(url_for("send_info"))
    details = mongo.db.user_details.find().sort("category_name", 1)
    return render_template("customer_details.html", user_details=details)


# @app.route("/request_sent", methods=["GET", "POST"])
# def request_sent():
#     return render_template("cleaner_requested.html")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT", "5000")),
            debug=True)
