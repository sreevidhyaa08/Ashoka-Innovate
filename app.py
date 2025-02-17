from flask import Flask, jsonify, request
import json
from models import SafetyScoreModel, ItineraryPlanner
from fintech import BudgetTracker
from community import CommunitySupport

app = Flask(_name_)

# Initialize models
safety_model = SafetyScoreModel()
itinerary_planner = ItineraryPlanner()
budget_tracker = BudgetTracker()
community_support = CommunitySupport()

@app.route('/safety_score', methods=['POST'])
def get_safety_score():
    data = request.json
    location = data.get('location')
    score = safety_model.predict(location)
    return jsonify({'safety_score': score})

@app.route('/itinerary', methods=['POST'])
def plan_itinerary():
    data = request.json
    itinerary = itinerary_planner.plan(data)
    return jsonify(itinerary)

@app.route('/budget', methods=['POST'])
def track_budget():
    data = request.json
    budget = budget_tracker.track(data)
    return jsonify(budget)

@app.route('/community', methods=['POST'])
def community_alert():
    data = request.json
    alerts = community_support.get_alerts(data)
    return jsonify(alerts)

if _name_ == '_main_':
    app.run(debug=True)
