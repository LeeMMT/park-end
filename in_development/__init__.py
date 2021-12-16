# from flask_sqlalchemy import SQLAlchemy
from in_development.config import Config
from flask import Flask, session

app = Flask(__name__)

app.config.from_object(Config)

from in_development.main.routes import main
from in_development.errors.handlers import errors

app.register_blueprint(main)
app.register_blueprint(errors)

if __name__ == '__main__':
    app.run(debug=True)