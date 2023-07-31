// Array of quotes
const quotes = [
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson"
];

// Function to generate a random quote
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  console.log(quote);
}

// Call the function to generate an initial random quote
generateRandomQuote();
