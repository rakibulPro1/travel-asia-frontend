### Website

TravelAsia

### TravelAsia Live Website Link

https://travelasia-fullstack-project.web.app/

### Description

TravelAsia is a Site for booking different tours all around the world. Client's safety is our top priority. Since 2016, we’ve helped more than 200,000 people of all ages enjoy the best outdoor experience.

### Used Functionality-

This site is a single page application and has a total of six routes(Home, My Booking, Manage All Booking, Add Tour, SignIn).
Menubar and footer are shared in all routes.
Home route has 6 section in total(Banner, Tours, About, Discount on multi tours and message us) excluding Menubar and footer.
Each service has a 'Proceed to Booking' button which lead to a protected route in which the extra service details are shown and user gets to fill up a form and Book the clicked tour.
If you are not logged in then clicking 'Proceed to Booking' button will redirect you to Login page. And after login you will be redirected to initial page. My Bookings , Manage all Bookings and Add Tour routes are protected too.
Sign Up has google sign in authentication. User Details is shown via bootstrap modal in the menubar.
Once logged in a user can see tour details and other protected routes, and will appear a logOut button on menubar which will log out the user.
This site is responsive for mobile and tablet devices.
All the data used in this site are from mongoDb database.
I have also implemented the 'CRUD' opertion in (Home, My bookings, Manage All bookings, Add tour) via node, express, mongoDb.

### Technology used-

React.
React Bootstrap.
React Router.
Firebase.
Node.
Express.
MongoDB.
