# YumYumYard

## Issues:

-   Cart

    -   If item quantity is decreased to 0 then the cart become unresponsive.
        -   Try using use Effect when quantity becomes 0

-   Dashboard:

    -   Products state does not load
    -   Users state does not load
    -   Check by doing console.log() the data
    -   It shows error in Material Table - `this.props is not a function`

-   Overall
    -   (DONE) Check the logged in user handler function as data of the user is present in `user.data` and not in `user`

## Features to Add:

-   Check if the user is admin user then display the dashboard option else do not display

    -   This can be done by taking a state as `isAdmin` in the redux and checking it everytime dashboard is used.

-   Add the menu page
-   Add the About page
-   Add the Services Page

## While Deploying

-   Stripe does not allow more than 500 characters in the metadata so URL shortener is required
