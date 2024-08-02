document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("open-slide").addEventListener("click", function () {
    toggleSlideMenu();
  });

  document
    .getElementById("chat-container")
    .addEventListener("click", function () {
      closeSlideMenu();
      hideProfileDropdown();
    });

  document
    .querySelector(".profile-icon")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevents the click event from reaching the parent div
      console.log("Clicked profile icon!");
      toggleProfileDropdown();
      toggleAvatars(); // Add this line to toggle avatars when clicking the profile icon
    });

  document
    .querySelector(".profile-dropdown")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevents the click event from reaching the parent div
    });

  document
    .querySelector(".profile-dropdown a")
    .addEventListener("click", function () {
      hideProfileDropdown();
    });
});

function toggleSlideMenu() {
  document.querySelector(".slide-menu").classList.toggle("open");
}

function closeSlideMenu() {
  document.querySelector(".slide-menu").classList.remove("open");
}

function toggleProfileDropdown() {
  var dropdown = document.querySelector(".profile-dropdown");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}

function hideProfileDropdown() {
  var dropdown = document.querySelector(".profile-dropdown");
  dropdown.style.display = "none";
}

function toggleAvatars() {
  const userAvatarContainer = document.getElementById("user-avatar-container");
  const advisorAvatarContainer = document.getElementById(
    "advisor-avatar-container"
  );

  // Check if avatars are already inserted, and remove them if they are
  const userAvatar = document.querySelector(".user-avatar");
  const advisorAvatar = document.querySelector(".advisor-avatar");

  if (userAvatar) {
    userAvatar.remove();
  }
  if (advisorAvatar) {
    advisorAvatar.remove();
  }

  // Create new avatar elements
  const userAvatarElement = document.createElement("img");
  userAvatarElement.classList.add("avatar", "user-avatar");
  userAvatarElement.src = userAvatarContainer.querySelector(".avatar").src;

  const advisorAvatarElement = document.createElement("img");
  advisorAvatarElement.classList.add("avatar", "advisor-avatar");
  advisorAvatarElement.src =
    advisorAvatarContainer.querySelector(".avatar").src;

  // Append avatars to the chat box
  const chatBox = document.getElementById("chat-box");
  chatBox.appendChild(userAvatarElement);
  chatBox.appendChild(advisorAvatarElement);
}

function sendMessage() {
  var userMessage = document.getElementById("user-input").value;
  appendMessage(userMessage, "user");
  const loader = document.getElementById("loader");
  loader.style.display = "block";

  // Send user message to the server and get the bot response
  fetch("/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: "user_message=" + encodeURIComponent(userMessage),
  })
    .then((response) => {
      const loader = document.getElementById("loader");
      loader.style.display = "none";
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const loader = document.getElementById("loader");
      loader.style.display = "none";
      var botResponse = data.bot_response;
      appendMessage(botResponse, "bot");
      toggleAvatars(); // Move the toggleAvatars call here
    })
    .catch((error) => {
      console.error("Error during fetch:", error);
    });

  // Clear the user input field
  document.getElementById("user-input").value = "";
}

function sendMessagetoGeneral() {
  var userMessage = document.getElementById("user-input").value;
  appendMessage(userMessage, "user");
  const loader = document.getElementById("loader");
  loader.style.display = "block";

  // Send user message to the server and get the bot response
  fetch("/askgeneral", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: "user_message=" + encodeURIComponent(userMessage),
  })
    .then((response) => {
      const loader = document.getElementById("loader");
      loader.style.display = "none";
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const loader = document.getElementById("loader");
      loader.style.display = "none";
      var botResponse = data.bot_response;
      appendMessage(botResponse, "bot");
      toggleAvatars(); // Move the toggleAvatars call here
    })
    .catch((error) => {
      console.error("Error during fetch:", error);
    });

  // Clear the user input field
  document.getElementById("user-input").value = "";
}
function appendMessage(message, sender) {
  var chatBox = document.getElementById("chat-box");
  var newMessageContainer = document.createElement("div");
  newMessageContainer.className = "message-container";

  var newMessage = document.createElement("div");

  if (sender === "user") {
    newMessage.className = "user-message";
  } else {
    newMessage.className = "bot-message";
    var formattedResponse = message
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)/g, "<br>→ $1")
      .replace(/(\d+\.)(.*?)/g, "<br>$1 $2");
    newMessage.innerHTML = formattedResponse;
  }
  if (sender === "user") {
    newMessage.innerText = message; // Set user message text without formatting
  }

  newMessageContainer.appendChild(newMessage);
  chatBox.appendChild(newMessageContainer);

  // Scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;
}
