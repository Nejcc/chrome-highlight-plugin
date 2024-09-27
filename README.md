# Word Highlighter Chrome Extension

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

This Chrome extension allows users to highlight specific words on any webpage with a beautiful gradient text color. The extension can automatically toggle highlighting on and off without needing to refresh the page. It is particularly useful for developers who want to visually emphasize certain programming-related keywords.

## 🚀 Features

- **Gradient Word Highlighting**: Highlights defined words using a customizable gradient background.
- **Automatic Activation**: The extension activates automatically by default, without needing to manually toggle.
- **Toggle On/Off**: Easily toggle highlighting on and off via a popup, without refreshing the webpage.
- **Customizable Word List**: Supports a predefined set of programming languages, frameworks, and tools, with the ability to add more.
  
## 🛠️ Installation

1. Clone or download this repository to your local machine.
```
Open Chrome and navigate to chrome://extensions/.
```

Enable Developer mode by toggling the switch at the top-right of the page.

Click on Load unpacked and select the folder where you cloned this repository.

The extension should now be visible in your browser extensions list, ready to use!

🖼️ Screenshot

✨ How to Use
Turn On: Once the extension is installed, it will automatically highlight certain words on any webpage based on a predefined list.

Toggle On/Off: Click the extension icon in the Chrome toolbar, and you will see a popup with a toggle switch. Turn the highlighting on or off without needing to refresh the page.

Customize: Modify the wordsToHighlight array in contentScript.js to add or remove words that you want to highlight.

```
const wordsToHighlight = [
    "Laravel Framework", 
    "php artisan serve",
    "php artisan migrate",
    "php artisan",
    "php", 
    "GO", 
    "GO Lang", 
    "Composer Update",
    "JavaScript", 
    // Add more words here
];
```


🌈 Gradient Highlight CSS
The words will be highlighted with the following gradient style:
```
.gradient-highlight {
  background: linear-gradient(to right, orange, yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}
```
Feel free to modify the gradient to suit your needs!

📝 Word List
The extension highlights various programming languages, frameworks, and tools out-of-the-box. Some examples include:

Languages: PHP, Go, JavaScript, Python, Rust, TypeScript
Frameworks: Laravel, React, Vue.js, Django, Flask
Tools: Docker, Kubernetes, Git, Jenkins, WebSockets
Databases: MySQL, PostgreSQL, MongoDB, Redis, SQLite
For a full list, see the contentScript.js file.

🔧 Development
Clone the repository and make any changes to the contentScript.js or styles.css files.
After modifying the code, reload the extension in Chrome:
Go to chrome://extensions/
Click Reload under your extension.

🛡️ License
This project is licensed under the MIT License. See the LICENSE file for details.

📝 Contributions
Feel free to submit a pull request or open an issue if you want to contribute or suggest new features!

💡 What We Learned?
Chrome extensions are a powerful tool for customizing browser behavior.
This extension shows how to inject custom CSS and manipulate DOM content dynamically.
The extension can be expanded to include custom word lists or more complex regex pattern matching.

📬 Feedback
If you have any questions or feedback, feel free to reach out or create an issue in this repository.
