from flask import Flask,render_template,url_for, request, make_response,flash, json, send_file

app=Flask(__name__)
static = app.root_path

@app.route('/')
def index():
    return send_file('index.html')

@app.route('/favicon.ico')
def myicon():
    path = static+'/files/logo.png'
    return send_file(path)



@app.route('/<x>')
def testing(x):
    return send_file(static+'/'+x)

@app.route('/files/<x>')
def de(x):
    print(static+'/'+x)
    return send_file(static+'/files/'+x)


if __name__ == '__main__':
   app.run(host='0.0.0.0',debug=1)

