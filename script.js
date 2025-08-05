document.addEventListener('DOMContentLoaded', function() {
  // Create floating particles
  createParticles();

  // Select all the necessary elements
  const passportView = document.getElementById('passport-view');
  const ticketView = document.getElementById('ticket-view');
  const passportContainer = document.querySelector('.passport-container');
  const backButton = document.querySelector('.back-button');

  // Select the audio element you added to the HTML
  const backgroundMusic = document.getElementById('background-music');

  // Add click event to passport to show ticket and play music
  passportContainer.addEventListener('click', function() {
    // Animate passport out
    passportView.classList.remove('active');
    passportView.classList.add('slide-out');
    
    // Play the music
    if (backgroundMusic) {
      backgroundMusic.play();
    }
    
    // Delay ticket view appearance for a smooth transition
    setTimeout(() => {
      ticketView.classList.add('active');
      ticketView.classList.add('slide-in');
    }, 300);
  });
  
  // Add click event to back button to return to passport and stop the music
  backButton.addEventListener('click', function() {
    // Animate ticket out
    ticketView.classList.remove('active');
    ticketView.classList.remove('slide-in');
    
    // Pause the music and reset it to the beginning
    if (backgroundMusic) {
      backgroundMusic.pause();
      backgroundMusic.currentTime = 0;
    }
    
    // Delay passport view appearance for a smooth transition
    setTimeout(() => {
      passportView.classList.add('active');
      passportView.classList.remove('slide-out');
    }, 300);
  });
  
  // Add subtle animation to passport on hover
  passportContainer.addEventListener('mousemove', function(e) {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    this.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(-10px)`;
  });
  
  // Reset passport position when not hovering
  passportContainer.addEventListener('mouseleave', function() {
    this.style.transform = 'rotateY(0deg) rotateX(0deg) translateY(0)';
  });
  
  // Function to create floating particles
  function createParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random position, size and animation delay
      const size = Math.random() * 10 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
      
      particlesContainer.appendChild(particle);
    }
  }
});