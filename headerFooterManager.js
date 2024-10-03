class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <p style="display: flex; justify-content: space-around; background-color: #eeeeee; padding: 10px;">
            <a href="home.html">Home</a>
            <a href="about.html">About</a>
            <a href="event.html">Events</a>
            <a href="academics.html">Academics</a>
            <a href="contact.html">Contact</a>
        </p>`
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ""; 
    }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);

