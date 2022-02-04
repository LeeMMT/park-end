from flask import render_template, Blueprint, redirect, url_for, request, flash, session

main = Blueprint('main', __name__)

@main.route("/")
def home():

    company_details = {
        "name": "Parkend Farming",
        "description": "Park End Farming is a family run local business based between Crick & West Haddon",
        "website": "parkendfarming.co.uk"
    }

    return render_template('index.html', company=company_details, title="Home")