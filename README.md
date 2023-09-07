# YumYumYard

YumYumYard is a web app built using ReactJS and Firebase that allows the users to order food from the restaurant. It utilizes the Stripe API for payment processing and the Firebase Cloud Functions for backend.

## Features

-   **User Authenticaton**: Users can login via Google or create and account using their Email and Password. Firebase Authentication is used for authentication and authorization.

-   **Cart**: Users can view the menu of the restaurant and add items to their cart.

-   **Payment**: Users can pay for their order after checking-out from the cart. Payment is processed using the Stripe API. After successfull payment the cart is cleared using a webhook and the order is added to the database.

-   **Admin**: Admin users can view the dashboard of the app that displays the statistics of the products and orders and they can manage the products and users.

-   **Orders**: Admins can view all the orders placed all the users can update their status from the dashboard itself. Non-admin users can view their orders and their status from the Orders page.
