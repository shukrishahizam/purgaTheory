from crypt import methods
from distutils.log import error
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def hello(): 
    return render_template('frontpage.html')

@app.route('process', methods=['POST'])
def process():
    if request.method == 'POST':
        data = request.get_json()
        # process JSON here 

        return # url for image
    else: 
        return 'Bad Request :(', 400

# @app.route('/rendered/<imagehandle>')
# def rendered(imagehandle):