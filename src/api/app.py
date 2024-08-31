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
        sTeams = request.json["teams"]
        teams = sTeams.split('\n')
        rTeams, pulseIndex = generate_brackets(teams)
        fixture = createFixture(rTeams)
        data = {
            "fixture" : fixture,
            "original" : teams,
            "pulse" : pulseIndex
        }
    return jsonify(data)


