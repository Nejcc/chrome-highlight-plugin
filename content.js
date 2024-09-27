let highlightActive = true; // Set to true by default for automatic activation
let originalTextNodes = new Map(); // To store the original state of text nodes

chrome.runtime.onMessage.addListener((message) => {
  if (message.toggleHighlight !== undefined) {
    highlightActive = message.toggleHighlight;
    if (highlightActive) {
      applyHighlight();
    } else {
      restoreOriginalText();
    }
  }
});

function applyHighlight() {
  const wordsToHighlight = [
    "Laravel Framework", 
    "php artisan serve",
    "php artisan migrate",
    "php artisan",
    "php", 
    "Composer Update",
    "GO", 
    "GO Lang", 
    "JavaScript", 
    "TypeScript", 
    "Node.js", 
    "Express.js", 
    "Vue.js", 
    "React", 
    "Angular", 
    "Svelte", 
    "GraphQL", 
    "Docker", 
    "Kubernetes", 
    "CI/CD", 
    "Git", 
    "GitHub", 
    "GitLab", 
    "Bitbucket", 
    "REST API", 
    "API", 
    "MySQL", 
    "PostgreSQL", 
    "MongoDB", 
    "SQLite", 
    "Redis", 
    "Nginx", 
    "Apache", 
    "WebSockets", 
    "AWS", 
    "Azure", 
    "Google Cloud", 
    "Terraform", 
    "Ansible", 
    "Jenkins", 
    "CircleCI", 
    "Travis CI", 
    "Python", 
    "Flask", 
    "Django", 
    "Ruby on Rails", 
    "Spring Boot", 
    "Java", 
    "Rust", 
    "C#", 
    ".NET Core", 
    "Swift", 
    "Objective-C", 
    "Flutter", 
    "Dart", 
    "Bootstrap", 
    "Tailwind CSS", 
    "CSS3", 
    "HTML5", 
    "Sass", 
    "LESS", 
    "Webpack", 
    "Vite", 
    "Babel", 
    "ES6", 
    "Vercel", 
    "Netlify",
  
    // PHP Packages
    "Eloquent", 
    "Symfony", 
    "Twig", 
    "PHPUnit", 
    "Monolog", 
    "Guzzle", 
    "PHPMailer", 
    "Faker", 
    "Pest PHP", 
    "Carbon", 

    // Go Packages
    "Gin Gonic", 
    "Go Kit", 
    "Go Modules", 
    "Echo Framework", 
    "Gorilla Mux", 
    "Go Fiber", 
    "GORM", 
    "Cobra", 
    "Viper", 
    "Go Chi", 

    // Python Packages
    "Requests", 
    "NumPy", 
    "Pandas", 
    "Flask", 
    "Django", 
    "FastAPI", 
    "Pytest", 
    "SQLAlchemy", 
    "Celery", 
    "TensorFlow", 
    "Keras", 
    "Scikit-learn", 
    "Pillow", 
    "BeautifulSoup", 
    "Scrapy",

    // Rust Packages
    "Actix", 
    "Rocket", 
    "Tokio", 
    "Diesel", 
    "Serde", 
    "reqwest", 
    "Warp", 
    "Axum", 
    "SeaORM", 
    "Tonic", 

    // Databases
    "MySQL", 
    "PostgreSQL", 
    "MongoDB", 
    "SQLite", 
    "Redis", 
    "MariaDB", 
    "Cassandra", 
    "CouchDB", 
    "Elasticsearch", 
    "Firestore", 
    "InfluxDB", 
    "DynamoDB", 
    "Memcached", 
    "OracleDB", 
    "Microsoft SQL Server", 

    // Other Tools
    "Prettier", 
    "ESLint", 
    "TSlint", 
    "Jest", 
    "Mocha", 
    "Chai", 
    "Karma", 
    "Protractor", 
    "Cypress", 
    "Storybook", 
    "Sentry", 
    "Lighthouse"
];

  
  const regex = new RegExp(`(${wordsToHighlight.join('|')})`, 'gi');

  // Function to traverse DOM and only replace text nodes
  function walkAndHighlight(node) {
    let child, next;
    
    switch (node.nodeType) {
      case 1: // Element node (skip <script>, <style>, and <noscript> elements)
        if (["script", "style", "noscript"].indexOf(node.tagName.toLowerCase()) === -1) {
          child = node.firstChild;
          while (child) {
            next = child.nextSibling;
            walkAndHighlight(child);
            child = next;
          }
        }
        break;
      case 3: // Text node
        const text = node.nodeValue;
        if (regex.test(text)) {
          // Store the original text if it hasn't been stored before
          if (!originalTextNodes.has(node)) {
            originalTextNodes.set(node, text);
          }

          // Apply the highlighting to the text node
          const highlightedText = text.replace(regex, (match) => {
            return `<span class="gradient-highlight">${match}</span>`;
          });

          // Create a wrapper span to replace the original text node
          const wrapper = document.createElement('span');
          wrapper.innerHTML = highlightedText;
          node.parentNode.replaceChild(wrapper, node);
        }
        break;
    }
  }

  walkAndHighlight(document.body);
}

function restoreOriginalText() {
  // Restore all original text nodes from the map
  originalTextNodes.forEach((originalText, node) => {
    if (node.parentNode) {
      node.parentNode.replaceChild(document.createTextNode(originalText), node);
    }
  });

  // Clear the map after restoring the text
  originalTextNodes.clear();
}

// Automatically apply highlight when extension is active
if (highlightActive) {
  applyHighlight();
}
