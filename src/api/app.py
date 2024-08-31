from flask import Flask, request, render_template,jsonify
from flask_cors import cross_origin, CORS
from randomteams import generate_brackets, verify
from fixture import createFixture

app = Flask(__name__)
CORS(app)
app.secret_key = "r4nd0mBR4CK"

@app.route("/fixture", methods=["POST"])
@cross_origin(origin="localhost", supports_credentials=True)
def fixture():
    data = {}
    if request.method == "POST":
        sTeams = list(request.form.to_dict().keys())[0]
        teams = sTeams.strip().split('\n')
        rTeams, pulseIndex = generate_brackets(teams)
        fixture = createFixture(rTeams)
        data = {
            "fixture" : fixture,
            "original" : teams,
            "pulse" : pulseIndex
        }
    return jsonify(data)


@app.route("/verify", methods=["POST"])
@cross_origin(origin="localhost", supports_credentials=True)
def verifo():
    data = {}
    if request.method == "POST":
        r = verify(request.json['lteams'], request.json['pindex'])
        data = {
            "response": r
        }
    return jsonify(data)


