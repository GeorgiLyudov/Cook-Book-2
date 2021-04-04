
####
-To start the app:
Terminal 1:
cd client
npm start

Terminal 2:
cd server
npm start
#####
-Guest permissions:
Guests can access the Login and Register pages.When attempting to click on Home or Browse, they'll see the Login form.
####
-User permissions:
Users should see the Home, Browse, Discover pages and Logout button.
Home should contain the Add Recipe button and links to the user's favourite categories (saved in localStorage)

Browse contains all categories, users can choose a category to see only the recipes in selected category. If there are no recipes to display, an explanatory message will appear along with a link back.

Discover generates a random recipe to show. Users can click a button to generate a different recipe if they want to.
####
-Validations:

The app supports only basic validations and will display an error message if a form is filled incorrectly.
