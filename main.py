from crypt import methods
from distutils.log import error
from flask import Flask, render_template, request, send_from_directory
from generategraph import generategraph


# IMAGE_FOLDER = '/rendered/'

app = Flask(__name__)

@app.route('/')
def hello(): 
    return render_template('frontpage.html')

@app.route('/process', methods=['POST'])
def process():
    if request.method == 'POST':
        data = request.get_json()
        imagehandle = generategraph(data)

        return 'Image generated', 200
    else: 
        return 'Bad Request :(', 400

@app.route('/rendered/<imagehandle>')
def rendered(imagehandle):
    return send_from_directory('rendered', imagehandle)

