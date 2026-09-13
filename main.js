import './style.css'
import './animation.css'

document.querySelector('#app').innerHTML = `
  <div class="scene" id="scene">
    <!-- Back of envelope -->
    <div class="envelope-back"></div>

    <!-- The Letter inside the envelope -->
    <div class="letter">
      <div id="flower-container"></div>
      <div class="card-container">
                <div class="content" style="padding: 0; display: block; height: auto;">
          <div style="position: relative; width: 100%;">
            <img src="/design.png" style="width: 100%; height: auto; display: block; border-bottom: 2px solid #e0dfd5;" alt="Wedding Invitation Design">
            <div style="position: absolute; top: 25%; left: 10%; width: 80%; height: 38%; background: #fef7f7; border-radius: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 0 30px 20px #fef7f7;">
              <p style="font-size: 1.2rem; margin-bottom: 15px; color: #3b4530; font-family: 'Outfit', sans-serif; text-align: center;">Mark your calendars to rejoice in the wedding of</p>
              <h1 style="font-size: 3.5rem; font-family: 'Great Vibes', cursive; color: #4a3b40; margin: 0; line-height: 1;">Maclina</h1>
              <span style="font-size: 2rem; font-family: 'Great Vibes', cursive; color: #d4af37; margin: 5px 0;">&</span>
              <h1 style="font-size: 3.5rem; font-family: 'Great Vibes', cursive; color: #4a3b40; margin: 0; line-height: 1;">Nihar</h1>
              <div style="display: flex; align-items: center; gap: 15px; margin-top: 20px;">
                <div style="height: 2px; width: 40px; background-color: #d4af37;"></div>
                <p style="font-size: 1rem; font-weight: 600; color: #4a3b40; letter-spacing: 2px; margin: 0;">25TH NOVEMBER</p>
                <div style="height: 2px; width: 40px; background-color: #d4af37;"></div>
              </div>
            </div>
          </div>
          <div style="padding: 20px 15px;">
<div class="details-section" style="padding-top: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h3 style="font-family: 'Great Vibes', cursive; font-size: 2.5rem; color: #d4af37; margin-bottom: 15px;">Reception Invitation</h3>
              
              <div style="font-size: 1.2rem; font-weight: 600; letter-spacing: 3px; color: #4a3b40;">NOVEMBER</div>
              
              <div style="display: flex; align-items: center; justify-content: center; gap: 20px; margin: 15px 0;">
                <div style="text-align: center; border-top: 2px solid #d4af37; border-bottom: 2px solid #d4af37; padding: 8px 0; min-width: 110px;">
                  <span style="font-size: 1.1rem; font-weight: 600; letter-spacing: 2px; color: #4a3b40;">FRIDAY</span>
                </div>
                <div style="font-size: 4.5rem; font-weight: 300; color: #7a6374; line-height: 1; font-family: 'Outfit', sans-serif;">27</div>
                <div style="text-align: center; border-top: 2px solid #d4af37; border-bottom: 2px solid #d4af37; padding: 8px 0; min-width: 110px;">
                  <span style="font-size: 1.1rem; font-weight: 600; letter-spacing: 2px; color: #4a3b40;">4 TO 10 PM</span>
                </div>
              </div>
              
              <div style="font-size: 1.2rem; font-weight: 600; letter-spacing: 3px; color: #4a3b40; margin-bottom: 25px;">2026</div>
              
              <div class="venue" style="font-size: 1.6rem; font-weight: 700; color: #4a3b40; margin-bottom: 10px;">Sarokri</div>
              <p class="venue-address" style="font-size: 1.1rem; color: #5a4b50; line-height: 1.5; margin-bottom: 20px;">
                Down Town, GS Road, Rukmini Gaon,<br>
                Guwahati, Assam 781036<br>
                (Opposite Down Town Hospital)
              </p>
              
              <a href="https://share.google/ceInhKfuljVz1DEVD" target="_blank" class="map-link" style="display: inline-block; background: #fdf5f6; border: 1px solid #d887a0; padding: 10px 20px; border-radius: 20px; color: #d887a0; text-decoration: none; font-weight: 600; transition: all 0.3s ease;">
                Google Maps <span class="arrow">➔</span>
              </a>
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
  
  // Play modern music
  const audio = document.getElementById('bg-music');
  audio.play().catch(e => console.log('Audio autoplay blocked', e));
  
  // Add a music toggle button
  const toggleBtn = document.createElement('button');
  toggleBtn.innerHTML = '🔊';
  toggleBtn.className = 'music-toggle';
  toggleBtn.onclick = (e) => {
    e.stopPropagation();
    if (audio.paused) {
      audio.play();
      toggleBtn.innerHTML = '🔊';
    } else {
      audio.pause();
      toggleBtn.innerHTML = '🔇';
    }
  };
  document.body.appendChild(toggleBtn);
  
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
