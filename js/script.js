const QUOTEBANK = [
    {
      quote: "Fashion is a weapon that you can use when you need it.",
      author: 'Donatella Versace'
    }, {
      quote: "I probably do have an obsessive personality, but striving for perfection has served me well.",
      author: "Tom Ford"
    }, {
      quote: "My style is to never say no.",
      author: "Virgil Abloh"
    }, {
      quote: "I certainly feel that an adult woman has a right to determine what happens to her life and body.",
      author: "Calvin Klein"
    }, {
      quote: "Good clothing is a passport to happiness.",
      author: "Yves Saint Laurent"
    }, {
      quote: "One's life and passion may be elsewhere, but New York is where you prove if what you think in theory makes sense in life.",
      author: "Miuccia Prada"
    }, {
      quote: "The only urgency I feel is to keep on, at a slow pace, with my journey.",
      author: "Alessandro Michele"
    }
  ];
  
  window.onload = foundation;
  
  function foundation() {
    generateQuote()
  }
   
  function generateQuote() {
    let quoteSize = QUOTEBANK.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomQuoteData = QUOTEBANK[randomIndex];
    
   document.getElementById("text").innerText = randomQuoteData.quote;
    document.getElementById('author').innerText = randomQuoteData.author;
  }
   
  