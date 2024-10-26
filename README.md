# Project alaമാര 🎯

<img width="1280" alt="readme-banner" src="https://github.com/user-attachments/assets/35332e92-44cb-425b-9dff-27bcf1023c6c">

## Basic Details
### Team Name: VIGILANTES

### Team Members
- Team Lead: Alan Vinod - VJCET
- Member 2: Antony Dominic S - VJCET

### Project Description
Project alaമാര is a Digital Wardrobe Organizer that allows users to categorize and manage their clothing items online. It provides an interactive way to add outfits into predefined categories (like Topwear, Bottomwear, Footwear, and Accessories), view saved items, and explore mix-and-match suggestions. The project’s frontend showcases an intuitive interface with animations and smooth transitions for an engaging user experience.

### The Problem (that doesn't exist)
Managing a wardrobe can be overwhelming, with users often struggling to organize their clothing items, remember what they own, or create new outfit combinations. Traditional wardrobe solutions lack the ease and interactivity that would allow users to digitally categorize, browse, and mix their clothing in a structured and visually appealing manner.

### The Solution (that nobody asked for)
We built Project alaമാര, a playful digital wardrobe organizer that lets users effortlessly add, organize, and mix-and-match outfits, turning everyday closet chaos into stylish fun!

## Technical Details
### Technologies/Components Used
For Software:
- **Languages**: HTML, CSS, JavaScript
- **Frameworks/Libraries**: Bootstrap, Font Awesome, CSS Animations, JavaScript localStorage
- **Development Tools**: VS CODE, Git, Browser

### Implementation
#### Code Structure

1. **HTML Structure**
   The HTML files form the backbone of the project, laying out the interface and components.

   - `index.html`: Main entry point of the application.
   - `add.html`: Page for adding new items and categories.
   - `list.html`: Displays the user's clothing items.
   - `mixmatch.html`: Allows users to explore outfit combinations.

   Example from `index.html`:
   ```html
   <header>
       <h1>Welcome to <span class="project-name">alaമാര</span></h1>
   </header>
   ```
   This code sets up the header with a welcoming message and applies a special style to the project name using a `<span>`.

2. **CSS Styling**
   The CSS styles enhance the visual appearance of the application.

   Example from `style.css`:
   ```css
   body {
       font-family: Arial, sans-serif;
       background-color: #f9f9f9;
       color: #333;
       line-height: 1.6;
   }
   ```
   This snippet styles the body of the document with a clean sans-serif font, light background color, and dark text for readability.

3. **JavaScript Functionality**
   JavaScript handles the dynamic aspects of the application, including category and item management.

   Example from `script.js`:
   ```javascript
   // Load categories into the dropdown on page load
   function loadCategories() {
       const categorySelect = document.getElementById('item-category');
       categories.forEach(category => {
           const option = document.createElement('option');
           option.value = category;
           option.textContent = category;
           categorySelect.appendChild(option);
       });
   }
   ```
   This function populates the category dropdown with predefined categories when the page loads, dynamically creating `<option>` elements.

#### Features
- **Add New Categories**: Users can input new categories that dynamically populate the category selection dropdown.
- **Add Clothing Items**: Users can input item names, select categories, and upload images. The images are converted to data URLs for storage.
- **Pasting Images**: Users can paste images directly into the app, which are then saved as new items.

### Screenshots
<img width="1710" alt="new category" src="https://github.com/user-attachments/assets/6cdd5326-600d-467a-9da7-d3409a21dfde">

<img width="1710" alt="intro page" src="https://github.com/user-attachments/assets/839d45e8-5dbe-40b9-a439-8eac371c5cde">

<img width="1710" alt="mix and match" src="https://github.com/user-attachments/assets/5cc0ca7e-0f47-4d3c-a0f4-67d00ac7088c">


### Project Demo
#### Video
[Demo Video](https://drive.google.com/file/d/15dXeSt-i8ez0VGn0pRjmyuMqbwj0VtzJ/view?usp=drivesdk)
*This video demonstrates how to use the digital wardrobe organizer, including adding items and exploring categories.*

### Team Contributions
- **Alan Vinod**: Idea generation, project management, and overall design support.
- **Antony Dominic S**: Assisted in coding and contributed to UI/UX design.

---

Made with ❤️ at TinkerHub Useless Projects 

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProject--24-24?link=https%3A%2F%2Fwww.tinkerhub.org%2Fevents%2FQ2Q1TQKX6Q%2FUseless%2520Projects)
