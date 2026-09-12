import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="scene" id="scene">
    <!-- Back of envelope -->
    <div class="envelope-back"></div>

    <!-- The Letter inside the envelope -->
    <div class="letter">
      <div id="flower-container"></div>
      <div class="decorative-element top-left"></div>
      <div class="decorative-element top-right"></div>
      <div class="decorative-element bottom-left"></div>
      <div class="decorative-element bottom-right"></div>
      <div class="card-container">
        <div class="content">
          <h2 class="save-the-date">You are invited</h2>
          
          <div class="avatar-container float-animation">
            <img src="/avatar.png" alt="Maclina and Nihar Avatar" class="avatar">
          </div>
          
          <h1 class="couple-names glow">Maclina<span class="weds">weds</span>Nihar</h1>
          
          <div class="details-section">
            <div class="event-details">
              <div class="event-icon">💍</div>
              <div class="event-info">
                <h3>Wedding</h3>
                <p class="date">25th Nov</p>
                <p class="venue">Ratnamouli Palace</p>
                <p class="venue-address">Dr. Bhabendra Nath Saikia Road, Beltola Chariali, Guwahati, Assam 781028</p>
                <a href="https://www.google.com/travel/hotels/s/zPoeEA7M9RPPGX299" target="_blank" class="map-link">Google Maps <span class="arrow">➔</span></a>
              </div>
            </div>
            
            <div class="divider"></div>
            
            <div class="event-details">
              <div class="event-icon">🥂</div>
              <div class="event-info">
                <h3>Reception</h3>
                <p class="date">27th Nov</p>
                <p class="venue">Sarokri</p>
                <p class="venue-address">Down Town, GS Road, Rukmini Gaon, Guwahati, Assam 781036<br>(Opposite Down Town Hospital)</p>
                <a href="https://share.google/ceInhKfuljVz1DEVD" target="_blank" class="map-link">Google Maps <span class="arrow">➔</span></a>
              </div>
            </div>
          </div>
          
          <div class="elegant-divider"><span>❈</span></div>
          
          <div class="family-section">
            <h3 class="family-title">With Blessings & Best Compliments</h3>
            
            <div class="family-list">
              <div class="family-item">
                <span class="relation">Parents</span>
                <span class="name">Dipak Kumar Sharma & Late Deepali Sharma</span>
              </div>
              <div class="family-item">
                <span class="relation">Brother</span>
                <span class="name">Kunaldeep Sharma</span>
              </div>
              <div class="family-item">
                <span class="relation">Sister & Brother-in-law</span>
                <span class="name">Dipleena Sharma & Amrut Sayan Patnaik</span>
              </div>
            </div>
            
            <a href="tel:+919986698281" class="contact-info">
              <span class="phone-icon">📞</span> +91 99866 98281
            </a>
          </div>
          
          <p class="footer-text pulse">We can't wait to celebrate with you!</p>
        </div>
      </div>
    </div>
    
    <!-- Front flaps of envelope -->
    <div class="envelope-front">
      <div class="flap bottom-flap"></div>
      <div class="flap top-flap"></div>
      <div class="wax-seal" id="wax-seal">
        <img src="/wax_seal.png" alt="Wax Seal">
      </div>
      <div class="invite-text">You are invited</div>
    </div>
  </div>
`;

document.getElementById('wax-seal').addEventListener('click', function openCard() {
  const scene = document.getElementById('scene');
  scene.classList.add('open');
  
  // Start flower animation after envelope starts opening
  setTimeout(createFlowers, 1000);
  
  // Cinematic auto-scroll for perfect GIF recording
  setTimeout(() => {
    const cardContainer = document.querySelector('.card-container');
    const start = cardContainer.scrollTop;
    const end = cardContainer.scrollHeight - cardContainer.clientHeight;
    const duration = 7000; // 7 seconds to scroll down smoothly
    let startTime = null;
    
    function animateScroll(currentTime) {
      if (!startTime) startTime = currentTime;
      let progress = (currentTime - startTime) / duration;
      if (progress > 1) progress = 1;
      
      // Smooth ease-in-out scrolling
      let ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
      cardContainer.scrollTop = start + (end - start) * ease;
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }
    
    // Only scroll if there is overflow
    if (end > 0) {
      requestAnimationFrame(animateScroll);
    }
  }, 4000); // Wait 4 seconds for the card to fully open and let them read the top
  
  // Remove listener so it only triggers once
  this.removeEventListener('click', openCard);
});

function createFlowers() {
  const flowers = ['🌸', '🌺', '💮', '🌼'];
  setInterval(() => {
    const flower = document.createElement('div');
    flower.className = 'falling-flower';
    flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.left = Math.random() * 100 + '%';
    flower.style.animationDuration = Math.random() * 3 + 4 + 's';
    flower.style.fontSize = Math.random() * 1 + 1 + 'rem';
    
    // Add random horizontal drift
    flower.style.setProperty('--drift', (Math.random() * 200 - 100) + 'px');
    
    document.getElementById('flower-container').appendChild(flower);
    
    setTimeout(() => {
      flower.remove();
    }, 8000);
  }, 400);
}
