from flask import render_template, Blueprint, redirect, url_for, request, flash, session

main = Blueprint('main', __name__)

@main.route("/")
def home():

    company_details = {
        "name": "Example Name",
        "title": "Example Title",
        "description": "Example Description",
        "website": "examplewebsite.co.uk"
    }

    return render_template('index.html', company=company_details)

@main.route("/page2")
def page2():
    return render_template('page2.html', title="page2")