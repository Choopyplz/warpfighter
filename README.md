# Warp Fighter
## Project Description

"Warp Fighter" is intended to be a site dedicated to information regarding an upcoming retro-arcade style vertical shooting game of the same name. Users can visit the site for information about the lore and backstory of Warp Fighter, illustrations of ship models within the game, screenshots, and could offer feedback to the development team via a comment form. It could one day be the hosting page for the game itself as well.

The game is completely fictional, and all art and copy was created by me, save for a handful of stock images that were manipulated to fit the retro game aesthetic. The site is a single page with links that take you to different sections of the page.

## Project Features
__________________

### CSS

>A navigation menu that expands and collapses properly at desktop and mobile sizes, such as by switching between vertical and horizontal styles, or is opened and closed by clicking the “hamburger” icon

My hamburger button expands and closes the nav and only appears until you are viewing the site at 768px wide. After 768px, the hamburger menu disappears and is replaced with a set of nav links underneath the logo image header. 

>Use Flexbox or CSS Grid to organize content areas based on mobile or desktop views. Simply applying a basic flex property so that text wraps as you change screen sizes does not count. You must actually rearrange content or perform some more advanced feature. For example, swapping from a single column layout to a two-column layout on a desktop.

My screenshot gallery utilizes CSS grid, and I have media queries set up so that it changes from one column in mobile resolutions, to two columns for tablet, and 4 columns for desktop.

__________________

### JavaScript

>Create and populate a JavaScript array with one or more values and display the contents of some or all of the array on your page

The screenshot gallery is a set of images populated via an array in JavaScript and displayed with CSS grid. 

>Show/hide one or more content areas or elements on your site through clicking a button or some other user interaction - must be done with some JavaScript code.

In the screenshot gallery, any image that is selected with a click is designated as id="selectedImage" under the parent div id="popup". The image is loaded onto the popup container that is positioned above the site, and then has it's position transformed to "0" from "-100%", and the container fills the page with the image displaying as large as possible at the current resolution. When you click anywhere on the container/image, the const popup in JavaScript removes the image source and returns to its original position at translateY(-100%).


