## Career Guidance Chatbot

### Description:
This career guidance chatbot, built using the Gemini API, utilizes Firebase as the database. It provides personalized career insights, aptitude tests to assess unique skills, and facilitates appointments for one-on-one sessions with a personal career guide.


![Home Interface](Home.png)

![Chat Interface](Chat1.png)

![Chat Interface](Chat2.png)

![Appointment Interface](Appointment.png)

![Test Interface](Test.png)

![Report Interface](Report.png)

### Features:
- **Personalized Career Insights:** Tailored recommendations based on user input and assessments.
- **Aptitude Testing:** Assess unique skills and strengths through interactive tests.
- **Appointment Booking:** Schedule one-on-one sessions with career guidance experts.
- **Interactive Chat Interface:** Engage users in a conversational format for intuitive guidance.

### Technologies Used:
- Python
- Natural Language Processing (NLP)
- Flask for backend development
- HTML/CSS/JavaScript for frontend interface
- Gemini API for data integration and functionality
- Firebase for database management

### Usage:
- Users can interact with the chatbot to explore career options.
- Take aptitude tests to discover strengths and weaknesses.
- Book appointments for personalized career guidance sessions.

## Quick Start

1. **Set Up Your Environment:**

   **Windows:**
   - Open your terminal and navigate to your project directory (e.g., `cd path/to/your/project`).
   - Create a virtual environment named `venv`: `python -m venv venv`
   - Activate it: `.\venv\Scripts\activate`

   **Unix/macOS:**
   - Open your terminal and navigate to your project directory.
   - Create a virtual environment named `venv`: `python3 -m venv venv`
   - Activate it: `source venv/bin/activate`

2. **Install Dependencies:**

   Once your virtual environment is active, install the required libraries listed below:

   ```bash
   pip install google-generativeai
   pip install Flask

3. **Set up Gemini API Key:**

   Goto http://makersuite.google.com create an account and enable your API Key and paste the key in `app.py` file.
   
   `API_KEY=REPLACE_WITH_YOUR_API_KEY_HERE`
   
4. **Set up Firebase:**

   Obtain your Firebase configuration key and paste it into the following files in the `templates` folder:
   - `app.html`
   - `appointment.html`
   - `dashboard.html`
   - `demo.html`
   - `entry.html`
   - `login.html`
   - `manage-appointment.html`
   - `proof.html`
   - `results.html`
   - `tenth.html`
   - `twelth.html`

   Example setup in your HTML files:

   ```javascript
   // Add your Firebase configuration here
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };

6. **Run Chat:**

To start the chatbot application:

 ```bash
python app.py
