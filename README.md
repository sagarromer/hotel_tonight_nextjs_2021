This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

##changes
installed next-connect package
handled requests with that
seperated controller logic into controllers folder
##Changes
mongodb connection logic seperated into dbconnect.js file
imported and called mongodb
database environmnet variables added
##changes
created room model
##changes
created and saved room data
##changes
fetch all rooms completed
##changes
seeder rooms data and files created 
changed package json file to add the seed data commnand
##changes
seperate api end point to get room details added
##changes
update single room details endpoint created
##changes
delete room endpoint created
##changes
created error handler class  to manage app errors
replaced operational errors with error handler class
##changes
error handler middleware created and called in appropiate routers
##changes
asynchronous errors handled
##changes
formatted several error masseges
##changes
rooms search by location implemented witha api features class
##changes
apifeatures filter method implemented
##changes
pagination implemented
##changes
layout components header/footer created
converted static bootstrap components to react components
##changes
layout component created with header footer component
##changes
custom css added to global css file
created home page with layout and component
##changes
installed necessary packages redux
configured redux store
created necessary files for redux in redux folder
##changes
all rooms reducer and constants created
##changes
rooms actions for get rooms function created
##changes
dispatchrooms action in getSe completed
##changes
home component modified to create rooms based on data
##changes
added react toastify package
##changes
room details reducer and actions created
##changes
room details component created and page created
##changes
room features extracted to seperate component
##changes
added pagination support for home page
##changes
search component created
search page created
##changes
advanced search options implemented
##changes
user model created
##changes
user registration endpoint created
user register controller created
user password encrupting implemented in the model
##changes
added password compare to user model
next auth authentication implemented
##changes
button loader component created
login component created
login page created
##changes
added cloudinary image support npm package
configured to save avatars on a specific folder
##changes
register user component created
redux updated for register user actions
cloudinary configured to save avatar
##changes
added me endpoint for backend api
authentication middleware added before me handler
##changes
load user constants, reducers, actions created
changes made to header component
##changes
show user in the header implemented redux  actions reducers constants updated for this 
logout user handled
##changes
used getserverside props and session to restrict access to the pages 
##changes
update user profile endpoint and controller logic implemented
##changes
update user profile reducer constants and actions implemented
##changes
implemented reset password token
installed nodemailor
forgot password controller implemented
next config updated
##changes
forgot password redux reducers constants actions implemented
forgot password page implemented
##changes
password reset and new password handle endpoint implmented
##changes
reset password redux constants reducers actions implemented
reset password endpoint implemented
password reset component implemented  when success go to login page
##changes
booking modal created
##changes
installed react datepicker
display date picker and handled input
##changes
create and save new booking implmented
##changes
check room book availability end poit and controller implemented
##changes
handle room availability redux constants reducers actions implemented
room details component updated
##changes
moment and extend moment packages installed
get all booked dates of a room implemented
##changes
added mongoose-timezone pakacge to resolve time difference problem
##changes
disable booked dates on calender redux implemented
roomdetails component improved to disable booked dates.
##changes
mybookings redux implemented
mybooking page and component created
##changes
bookingdetails redux implemented
bookingdetails page and component created
##changes
booking details component implemented
##changes
implemented invoice get pdf functinonality with easy invoice package
##changes
installed npm stripe
created stripe checkout session in the cotroller and required endpoint
npm i @stripe/stripe-js installed
created stripe js file in utils folder
roomdetails updated
$ npm install raw-body
webhook endpoint created
##changes
roomreview endpoint and controller for new review implemented
##changes
new review redux part implemented
##changes
submit review component implemented
##changes
display all reviews component implemented and roomdetails component updated
##changes
show submit review button logic implemented
##changes
not found page implemented



