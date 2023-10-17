# Punk Beer App

Welcome to the "Punk Beer App" repository! This app is built with React and powered by Vite.

# The requirements for this test were as follows:

**Primary Requirements:**

✔️ 1. JavaScript must be used, and you can use any framework or library you see fit. The use of React is an asset.

✔️ 2. The application must be mobile friendly.

✔️ 3. The main/start view should show a list of cards with the available beers.

✔️ 4. By default, each card should show name, image, and the tag line of the beer. And when clicked, the full profile should be displayed.

✔️ 5. The application must have a search box where you can select to search by the following criteria:

By foods that go well with beers. Examples: “Chicken” => “Buzz”, “Russian Doll – India Pale Ale”

By the name or part of the name of the beer. Examples: “lager” => “Pilsen Lager”, “77 Lager”

✔️ 6. The results of both the home page listing and searches should be paginated a maximum of 10 cards per page.

✔️ 7. The code may be delivered in a zipped file containing all the necessary files or a link to a repository of the candidate.

✔️ 8. A document with the instructions for its execution should be included. In addition, include some comments on how you decided on the 
architecture/structure of the application, the choice of framework/library used, and what improvements you would propose to the client.

✔️ 9. The code and documentation must be in English.

**Optional Features:**

✔️ 10. Functionality for the user to bookmark and filter by favorites. As no database is used, browser localStorage can be used.

❌ 11. A button where you can select the properties to be displayed in the card view and where you can add new ones e.g. ABV, IBU, First Brewed.

❌ 12. A button that can switch from card view to table view and vice versa.

# Basic structure of Punk Beer Api:

**components: Contains the React components of the application:**

beercard: A component to display a card with beer information.

beerdetails: A component that shows additional details of a specific beer.

beerlist: A component that lists several beers.

beerproperties: A component that displays the properties of a beer, such as its ABV, IBU, etc.

footer: Footer component of the application.

header: Header component of the application.

**services: Contains services or functions related to business logic or API calls**

PunkApiService.jsx: Handles calls to the Punk API.


# Here below you can also see some images of the different views of the app:

![image](https://github.com/jguiherdev/punkapi/assets/118314916/6531e6a3-89bf-4501-860c-7aa4df72cbc1)

![image](https://github.com/jguiherdev/punkapi/assets/118314916/fef98e65-6c70-4a18-817b-91b2ca832c2f)
![image](https://github.com/jguiherdev/punkapi/assets/118314916/2af41373-2c05-4b02-a93f-c9cbff4b32d7)

![image](https://github.com/jguiherdev/punkapi/assets/118314916/120c4d2b-2e6b-4ffa-97cc-9c4ae2efd1bc)

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- npm or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repo**

git clone https://github.com/jguiherdev/punkapi.git


2. **Navigate to the directory /punk-beer-app**

... cd punk-beer-app


3. **Install dependencies**

npm install


**Or if you're using yarn:**

yarn


4. **Start the development server**

npm run dev


5. **Visit the application**

Once the server starts, you can view the app at [http://localhost:5173](http://localhost:5173).




