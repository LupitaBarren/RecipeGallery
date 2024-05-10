Objective: Develop an Expo React application that showcases an interactive recipe gallery. The gallery will display images from a predefined list, and users will be able to navigate through the images using "Next" and "Previous" buttons. This assignment will demonstrate your ability to use React state to manage dynamic content and respond to user actions.

For this simple app, I used images from a recipe website, 'The Cozy Cook', in order to keep the size of the images relatively uniform. imageList.js contains only the list of recipe images, with an id to use the useState hook in my Gallery component, the url for the image, and the description (just the name of the food being displayed).

The Gallery component found in Gallery.js displays the current image, its description, and navigation buttons. To do this, I first created a state variable to keeps track of the current image index. Then I defined two functions to handle the previous and next button clicks, updating state accordingly. Then I rendered the buttons in the component, attaching the event handlers. I opted to use the TouchableOpacity wrapper over the Button element for the more freedom with regards to customization. I was able to style the buttons so they looked nice and I used flexDirection to place them next to each other.

For the App.js, the only thing I added as a constant while the user is browsing through the gallery, is the title at the top of the screen. 
