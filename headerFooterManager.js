class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
 <div style="background-color: #002c53; padding: 20px; position: relative;">
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <!-- Logo and School Name -->
    <div style="display: flex; align-items: center; position: relative; z-index: 1;">
      <!-- Adjusted the margin and position for better alignment -->
      <img src="https://i.pinimg.com/originals/35/b1/f3/35b1f31461c3a83ab53c5ee465fae2ce.png" alt="Logo" style="height: 150px; margin-right: 10px; position: absolute; top: -50px; z-index: 2;">
      <span style="color: white; font-size: 24px; font-weight: bold; margin-left: 170px;">School Name</span>
    </div>
    <nav style="flex: 1;">
      <!-- Ensured links are aligned properly -->
      <p style="display: flex; background-color: #002c53; padding: 10px; justify-content: flex-end; width: 100%; margin: 0;">
        <a href="home.html" style="margin-left: 20px; color: #658ca4; text-decoration: none;">Home</a>
        <a href="about.html" style="margin-left: 20px; color: #658ca4; text-decoration: none;">About</a>
        <a href="event.html" style="margin-left: 20px; color: #658ca4; text-decoration: none;">Events</a>
        <a href="academics.html" style="margin-left: 20px; color: #658ca4; text-decoration: none;">Academics</a>
        <a href="contact.html" style="margin-left: 20px; color: #658ca4; text-decoration: none;">Contact</a>
      </p>
    </nav>
  </div>
</div>


    `
        
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div style="background-color: #002b5c; color: #ffffff; padding: 20px; display: flex; justify-content: center; align-items: center; text-align: center; flex-wrap: wrap;">
    <div style="display: flex; align-items: center; margin-right: 20px;">
        <img src="https://i.pinimg.com/originals/35/b1/f3/35b1f31461c3a83ab53c5ee465fae2ce.png" alt="School Logo" style="height: 170px; margin-right: 10px;">
        <span style="font-weight: bold; margin-right: 20px;">Your School Name</span>
        <div style="border-left: 2px solid #f98125; height: 60px; margin: 0 20px;"></div>
    </div>
    <div style="display: flex; align-items: center; flex-direction: column;">
        <p style="margin: 0; line-height: 1.6;">123 Innovation Drive,<br>Greenwood, CA 90210</p>
        <p style="margin: 0; line-height: 1.6;">Phone: (555) 123-4567</p>
        <p style="margin: 0; line-height: 1.6;">Email: info@rcbacdemey.edu</p>
    </div>
    <div style="border-left: 2px solid #f98125; height: 60px; margin: 0 20px;"></div>
    <div style="display: flex; align-items: center; font-weight: bold;">
        <span>Follow us:</span>
        <a href="https://www.facebook.com" style="margin-left: 10px;"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" style="height: 20px;"></a>
        <a href="https://www.twitter.com" style="margin-left: 10px;"><img src="https://www.dreamstime.com/illustration/twitter-logo.html" alt="Twitter" style="height: 20px;"></a>
        <a href="https://www.instagram.com" style="margin-left: 10px;"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" style="height: 20px;"></a>
    </div>
</div>
<div style="background-color: #002b5c; color: #ffffff; text-align: center; padding: 10px 0;">
    <p style="margin: 10px 0; margin-left: 20px;">&copy; 2024 Your School Name. All rights reserved.</p>
    <div style="margin-left: 1px;">
        <a href="#about" style="color: #658ca4; text-decoration: none; margin: 0 15px;">About Us</a> |
        <a href="#contact" style="color: #658ca4; text-decoration: none; margin: 0 15px;">Contact Us</a>
    </div>
</div>
`; 
    }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
const form = document.getElementById('form');  
const firstName = document.getElementById('firstName');  
const lastName = document.getElementById('lastName');  
const email = document.getElementById('email');  
const phone = document.getElementById('phone');  
const query = document.getElementById('query');  
  
form.addEventListener('submit', e => {  
   e.preventDefault();  
  
   validateInputs();  
});  
  
const setError = (element, message) => {  
   const inputControl = element.parentElement;  
   const errorDisplay = inputControl.querySelector('.error');  
  
   errorDisplay.innerText = message;  
   inputControl.classList.add('error');  
   inputControl.classList.remove('success')  
}  
  
const setSuccess = element => {  
   const inputControl = element.parentElement;  
   const errorDisplay = inputControl.querySelector('.error');  
  
   errorDisplay.innerText = '';  
   inputControl.classList.add('success');  
   inputControl.classList.remove('error');  
};  
  
const isValidEmail = email => {  
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  
   return re.test(String(email).toLowerCase());  
}  
  
const validateInputs = () => {  
   const firstNameValue = firstName.value.trim();  
   const lastNameValue = lastName.value.trim();  
   const emailValue = email.value.trim();  
   const phoneValue = phone.value.trim();  
   const queryValue = query.value.trim();  
  
   if(firstNameValue === '') {  
      setError(firstName, 'First Name is required');  
   } else {  
      setSuccess(firstName);  
   }  
  
   if(emailValue === '') {  
      setError(email, 'Email is required');  
   } else if (!isValidEmail(emailValue)) {  
      setError(email, 'Provide a valid email address');  
   } else {  
      setSuccess(email);  
   }  
  
   if(queryValue === '') {  
      setError(query, 'Query/Question is required');  
   } else {  
      setSuccess(query);  
   }  
};

