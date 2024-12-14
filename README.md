Dashboard App -
This is my submission to the task to replicate a dashboard image.
Tech Stack- React.js,Tailwind css

How to run-copy the code and on your local machine type npm run.

1. Approach to Building the Dashboard:
The dashboard project was designed with the aim to create an intuitive and functional user interface that displays relevant data in an organized and visually appealing manner. Here's the approach I followed:

Planning and Design:
Understanding Requirements: Initially, I gathered the necessary requirements for the dashboard, including the key data points that needed to be displayed .

Component Structure: The application was built using React to ensure reusable components, with the key components being the sidebar, top bar, main content area,
Tech Stack:
Frontend: React.js for the UI, with a focus on components.
Styling: CSS for responsive design, ensuring the dashboard is functional across devices (desktop, tablet, mobile). The design is made mobile-responsive through media queries.
Data: The dashboard uses mock data for now, but the plan is to connect to a back-end service or an API for dynamic data fetching.


2. Challenges Faced and How They Were Resolved:

Challenge 1: Creating a Responsive Layout
Problem: Ensuring that the dashboard was responsive across various screen sizes (desktop, tablet, and mobile) was challenging. Specifically, the sidebar and elements had to be adjusted to fit smaller screens without losing functionality or usability.
Solution: I implemented responsive CSS using media queries to adjust the layout based on screen size. For smaller screens, I made the sidebar collapsible and adjusted the widths and padding of the elements. On mobile devices, I also included a hamburger menu for better navigation.

Challenge 2: Managing State for Dynamic Content
Problem: Managing dynamic content for the dashboard was complex, especially when dealing with multiple components.
Solution: I utilized React’s useState and useEffect hooks to manage the state of dynamic content. For example, I used useState to manage the visibility of the sidebar and charts, and useEffect to fetch data and update components accordingly. This ensured that the dashboard would update in real time without unnecessary re-renders.

3. Assumptions made:
I made the assumption that the backgound is also  a part of the display and that the buttons like progress bar ,submit button and upload button are connected with the backend.
