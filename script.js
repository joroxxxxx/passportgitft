document.addEventListener('DOMContentLoaded', function() {
  // Create floating particles
  createParticles();
  const passportView = document.getElementById('passport-view');
  const ticketView = document.getElementById('ticket-view');
  const passportContainer = document.querySelector('.passport-container');
  const backButton = document.querySelector('.back-button');
  
  // Add click event to passport to show ticket
  passportContainer.addEventListener('click', function() {
    // Animate passport out
    passportView.classList.remove('active');
    passportView.classList.add('slide-out');
    
    // Delay ticket view appearance for smooth transition
    setTimeout(() => {
      ticketView.classList.add('active');
      ticketView.classList.add('slide-in');
    }, 300);
  });
  
  // Add click event to back button to return to passport
  backButton.addEventListener('click', function() {
    // Animate ticket out
    ticketView.classList.remove('active');
    ticketView.classList.remove('slide-in');
    
    // Delay passport view appearance for smooth transition
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
