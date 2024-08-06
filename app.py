from flask import Flask, render_template, request, jsonify, url_for, redirect, session
import google.generativeai as genai
app = Flask(__name__)
# Add Your API Key from http://makersuite.google.com the this website (random text removing)
genai.configure(api_key="AIzaSyD_5oPOrWDWIuseBgeFZbVYDt8Aj7jGn_U")

# Set up the models
career_generation_config = {
    "temperature": 0.9,
    "top_p": 1,
    "top_k": 0,
    "max_output_tokens": 2048,
}

general_generation_config = {
    "temperature": 0.7,
    "top_p": 0.9,
    "top_k": 40,
    "max_output_tokens": 1024,
}

safety_settings = [
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
]

# Career-focused model
model_ask = gen_ai.GenerativeModel(
    model_name="gemini-1.0-pro",
    generation_config=career_generation_config,
    safety_settings=safety_settings
)

# General-purpose model
model_askgeneral = gen_ai.GenerativeModel(
    model_name="gemini-1.0-pro",
)

convo_ask = model_ask.start_chat(history=[
    {
        "role": "user",
        "parts": ["hi"]
    },
    {
        "role": "model",
        "parts": ["Hello there! Welcome to Career Compass, your personalized guide to navigating the exciting world of career choices. I'm here to assist you in discovering potential career paths that align with your unique skills and aptitudes. Let's embark on this journey together! \nTo start, could you please share your scores from your aptitude test? This will provide valuable insights into your strengths and preferences, allowing me to offer tailored career recommendations."]
    },
])

convo_askgeneral = model_askgeneral.start_chat(history=[
    {
        "role": "user",
        "parts": ["hi"]
    },
    {
        "role": "model",
        "parts": ["Hello! I'm Gemini-Pro, your friendly general-purpose chatbot. Feel free to ask me anything, and I'll do my best to assist you. Let's have a great conversation!"]
    },
])

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/loginregpage')
def login():
    return render_template('login.html')

@app.route('/chatbotpage')
def chatbotpage():
    return render_template('chatbot.html')

@app.route('/ask', methods=['POST'])
def ask():
    user_input = request.form.get('user_message')
    convo_ask.send_message(user_input)
    bot_response = convo_ask.last.text
    return jsonify({'bot_response': bot_response, 'user_input': user_input})

@app.route('/askgeneral', methods=['POST'])
def askgeneral():
    user_input = request.form.get('user_message')
    convo_askgeneral.send_message(user_input)
    bot_response = convo_askgeneral.last.text
    return jsonify({'bot_response': bot_response, 'user_input': user_input})

@app.route('/edu')
def edu():
    return render_template('demo.html')

@app.route('/personchatbot')
def personchatbot():
    return render_template('personchatbot.html')

@app.route('/pdfchatbot')
def pdfchatbot():
    return render_template('pdfchatbot.html')

@app.route('/imagefetchatbot')
def imagefetchatbot():
    return render_template('imagefetchatbot.html')

@app.route('/homework')
def homework():
    return render_template('chatbot_options.html')

@app.route('/ten')
def ten():
    return render_template('tenth.html')

@app.route('/twe')
def twe():
    return render_template('twelth.html')

@app.route('/high')
def high():
    return render_template('proof.html')

@app.route('/numten')
def numten():
    return render_template('num10.html')

@app.route('/numtwe')
def numtwe():
    return render_template('num12.html')

@app.route('/quant')
def quant():
    return render_template('quant.html')

@app.route('/arten')
def arten():
    return render_template('ar10.html')

@app.route('/artwe')
def artwe():
    return render_template('ar12.html')

@app.route('/abstr')
def abstr():
    return render_template('abstr.html')

@app.route('/verbten')
def verbten():
    return render_template('verb10.html')

@app.route('/verbtwe')
def verbtwe():
    return render_template('verb12.html')

@app.route('/verbal')
def verbal():
    return render_template('verbal.html')

@app.route('/spten')
def spten():
    return render_template('sp10.html')

@app.route('/sptwe')
def sptwe():
    return render_template('sp12.html')

@app.route('/spat')
def spat():
    return render_template('spat.html')

@app.route('/mechten')
def mechten():
    return render_template('mech10.html')

@app.route('/mechtwe')
def mechtwe():
    return render_template('mech12.html')

@app.route('/mech')
def mech():
    return render_template('mech.html')

@app.route('/perten')
def perten():
    return render_template('per10.html')

@app.route('/pertwe')
def pertwe():
    return render_template('per12.html')

@app.route('/peracc')
def peracc():
    return render_template('peracc.html')

@app.route('/langten')
def langten():
    return render_template('lang10.html')

@app.route('/langtwe')
def langtwe():
    return render_template('lang12.html')

@app.route('/lang')
def lang():
    return render_template('lang.html')

@app.route('/result')
def result():
    return render_template('results.html')

@app.route('/appoint')
def appoint():
    return render_template('appointment.html')

@app.route('/manage')
def manage():
    return render_template('manage-appointment.html')

@app.route('/book')
def book():
    return render_template('index2.html')

@app.route('/admin')
def admin():
    return render_template('admin-login.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

if __name__ == '__main__':
    app.run()
