class SpecialHeader extends HTMLElement 
{
    connectedCallback() 
    {
     this.innerHTML = 
     `
     <div style="background-color:#002c53; padding:25px;">
     <div style="display:flex; justify-content:space-between; align-items:center;">
     <!-- Logo and School Name -->
     <div style="display:flex; position:relative; z-index: 1;">
      <!-- Adjusted the margin and position for better alignment -->
      <img src="https://i.pinimg.com/originals/35/b1/f3/35b1f31461c3a83ab53c5ee465fae2ce.png" alt="Logo" style="height:150px; margin-right:10px; position:absolute; top: -40px; z-index: 2;">
      <span style="color:#98FB98; font-size: 24px; font-weight: bold; margin-left: 150px;">EVERGREEN</span>
     </div>
     <nav style="flex:1;">
      <!-- Ensured links are aligned properly -->
      <p style="display:flex; padding:10px; justify-content:flex-end; width: 100%; margin:0;">
        <a href="home.html" style="margin-left:600px; color:#658ca4; text-decoration:none;">Home</a>
        <a href="about.html" style="margin-left:20px; color:#658ca4; text-decoration:none;">About</a>
        <a href="event.html" style="margin-left:20px; color:#658ca4; text-decoration:none;">Events</a>
        <a href="academics.html" style="margin-left:20px; color:#658ca4; text-decoration:none;">Academics</a>
        <a href="contact.html" style="margin-left:20px; color:#658ca4; text-decoration:none;">Contact</a>
      </p>
     </nav>
     </div>
      </div>
     `
    }
}

class SpecialFooter extends HTMLElement 
{
    connectedCallback() 
    {
     this.innerHTML = 
     `
     <div style="background-color:#002b5c; color:#ffffff; padding:20px; display:flex; justify-content:center; align-items:center; text-align:center; flex-wrap:wrap;">
     <div style="display:flex; align-items:center; margin-left:-10px;">
     <img src="https://i.pinimg.com/originals/35/b1/f3/35b1f31461c3a83ab53c5ee465fae2ce.png" alt="School Logo" style="height:170px; margin-right:15px;">
     <span style="font-weight:bold; margin-right:20px; color:#98FB98; font-size:20px;">EVERGREEN</span>
     <div style="border-left:2px solid #f98125; height:60px; margin:0 100px;"></div>
     </div>
     <div style="display:flex; flex-direction:column; margin-left:-20px;">
        <p style="margin:0; line-height:1.6;">123 Innovation Drive,<br>Mumbai, India</p>
        <p style="margin:0; line-height:1.6;">Phone: +91 948826 12375</p>
        <p style="margin:0; line-height:1.6;">Email: evergreen@gmail.com</p>
     </div>
     <div style="border-left: 2px solid #f98125; height:60px; margin:0 100px;"></div>
     <div style="margin-left:-30px; font-weight: bold;">
        <span>Follow us:</span>
        <a href="https://www.facebook.com" style="margin-left:10px;"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" style="height: 20px;"></a>
        <a href="https://www.twitter.com" style="margin-left:10px;"><img src="https://cdn.icon-icons.com/icons2/4029/PNG/512/twitter_x_new_logo_square_x_icon_256075.png" alt="Twitter" style="height: 30px; margin-bottom:-5px;"></a>
        <a href="https://www.instagram.com" style="margin-left:10px;"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" style="height: 20px;"></a>
     </div>
     </div>
     <div style="background-color: #002b5c; color: #ffffff; text-align:center; padding:10px 0;">
     <p style="margin:10px 0; margin-left:20px;">&copy; 2024 EVERGREEN. All rights reserved.</p>
     <div style="margin-left: 1px;">
        <a href="about.html" style="color:#658ca4; text-decoration:none; margin:0 15px;">About Us</a> |
        <a href="contact.html" style="color: #658ca4; text-decoration: none; margin: 0 15px;">Contact Us</a>
     </div>
     </div>
     `
    }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);


