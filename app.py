from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/accessibility")
def accessibility():
    return render_template("accessibility.html")

@app.route("/form")
def form():
    return render_template("form.html")

@app.route("/submit", methods=["POST"])
def submit():
    name = request.form["name"]
    email = request.form["email"]
    usn = request.form["usn"]
    return render_template("result.html", name=name, email=email, usn=usn)

if __name__ == "__main__":
    app.run(debug=True)