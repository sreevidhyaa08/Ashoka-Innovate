async function checkSafety() {
    const location = document.getElementById('location').value;
    const response = await fetch('/safety_score', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ location })
    });
    const data = await response.json();
    document.getElementById('safety-score').innerText = Safety Score: ${data.safety_score};
}

async function planItinerary() {
    const details = document.getElementById('itinerary-input').value;
    const response = await fetch('/itinerary', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ details })
    });
    const data = await response.json();
    document.getElementById('itinerary').innerText = Itinerary: ${JSON.stringify(data)};
}

async function trackBudget() {
    const budgetDetails = document.getElementById('budget-input').value;
    const response = await fetch('/budget', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ budgetDetails })
    });
    const data = await response.json();
    document.getElementById('budget').innerText = Budget: ${JSON.stringify(data)};
}

async function getAlerts() {
    const locationDetails = document.getElementById('community-input').value;
    const response = await fetch('/community', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ locationDetails })
    });
    const data = await response.json();
    document.getElementById('alerts').innerText = Alerts: ${JSON.stringify(data)};
}
