Shashwat Raghuvanshi Portfolio



## 📁 Files in This Project

```
portfolio-website/
├── index.html   # Main HTML5 structure with semantic tags & personal details
├── style.css    # Clean, minimal CSS with Flexbox & Grid
├── script.js    # Simple JavaScript for footer year & form submission
└── README.md    # Quick reference guide & viva preparation
```

---

##  Profile Details

- **Name:** Shashwat Raghuvanshi
- **Education:**
  - Bachelor of Technology (B.Tech) — 1st Year (Started 2026)
  - Higher Secondary School (Class XII) — Sant Atulanand Convent School
- **Featured Projects:**
  1. **Personal Portfolio Website:** Built with HTML5, CSS3, and JavaScript.
  2. **Student Attendance Management:** Web app to take, maintain, and track student attendance records.
  3. **Tirupati Tiles Website:** E-commerce catalog website where users can view, select, and order tiles.
- **Contact Info:**
  - **Email:** shashwatraghuvanshi80@gmail.com
  - **LinkedIn:** [linkedin.com/in/shashwat-raghuvanshi-4380aa424](https://www.linkedin.com/in/shashwat-raghuvanshi-4380aa424)
  - **GitHub:** [github.com/Shashwatraghuvanshi](https://github.com/Shashwatraghuvanshi)

---




### 1. HTML5 (`index.html`)
- **Semantic Tags**: Used `<header>`, `<nav>`, `<section>`, and `<footer>` instead of just plain `<div>`s to improve document structure and accessibility (SEO-friendly).
- **Navigation**: Uses anchor tags with hash links (e.g., `href="#about"`) that jump directly to matching section IDs on the page.
- **Form Controls**: Built with `<input>`, `<textarea>`, and `required` attributes for basic HTML5 form validation.

### 2. CSS3 (`style.css`)
- **Box Sizing (`box-sizing: border-box`)**: Ensures padding and borders are included in the element's total width and height, preventing layout breakage.
- **Flexbox**: Used for the navigation bar and hero buttons to easily align items in rows.
- **CSS Grid**: Used for the Skills and Projects cards (`display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));`) to make cards responsive across all screen sizes.
- **Smooth Scrolling (`scroll-behavior: smooth`)**: Enables smooth animated scrolling when clicking navbar links.
- **Media Queries (`@media (max-width: 768px)`)**: Ensures the website looks great on mobile phones and tablets by stacking elements vertically.

### 3. JavaScript (`script.js`)
- **`DOMContentLoaded`**: Waits until the HTML document is fully loaded before executing scripts.
- **Dynamic Year**: Uses `new Date().getFullYear()` to keep the copyright year automatically updated.
- **`event.preventDefault()`**: Prevents the default browser action of refreshing the page when the contact form is submitted, allowing a custom success message to show up smoothly.
