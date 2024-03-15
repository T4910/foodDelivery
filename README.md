
# Food Delivery

This is a mobile-friendly food delivery app built with Next.js 14, showcasing a clean and intuitive user interface. The app allows users to browse through various food items, search for specific dishes, view detailed information about each item, and add items to their cart for checkout.


## Tech Stack

- NextJS
- TailwindCSS 
- Prisma



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

1. `DATABASE_URL`
A connection url to a Postgres database.

2. `NEXT_PUBLIC_NEXTAUTH_SECRET`
An string that will be used for encryption. You can run on your linux machine `openssl rand -base64 32` to get a string. 

3. `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
Just the name of your cloudinary cloud account


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Sync with database

```bash
  npx prisma db push
```

Start the server

```bash
  npm run dev
```


## Features

- Responsive design optimized for mobile devices
- User-friendly interface with a modern and visually appealing layout
- Login and sign-up functionality for user accounts
- Search functionality to find specific food items
- Detailed view of each food item images from  Cloudinary cdn
- Cart functionality to add and remove items for checkout
- Calculation of total price based on the items in the cart


## Lessons Learned

#### UI Development
- Integrated and customized the Shadcn UI component library, gaining experience in working with pre-built UI components and tailoring them to fit the project's design requirements.
- Practiced using Tailwind CSS utility classes for efficient and responsive styling, enhancing my skills in working with utility-first CSS frameworks.

#### Server-side Development
- Explored Server Actions in Next.js 13, learning how they can replace traditional API routes and simplify server-side logic.
- Implemented authentication using the Next-Auth v5.0 beta, using React-form hooks to create interactive forms and leveraging Zod for type safety and data validation.

#### Data Management
- Utilized Prisma as the ORM (Object-Relational Mapping) tool, gaining experience in database querying, modeling, and structuring for a food delivery application.
- Learned about React Context API and state management techniques for managing application state effectively.

#### Advanced Web Concepts
- Implemented URL state management for intuitive and shareable application state tracking.
- Explored web concepts such as pagination, web cookies, middleware, and CDN (Content Delivery Network) for optimized performance and enhanced user experience.


## Screenshots
This are screenshots of the UI template I used to make them. Courtesy of Sajon Islam 

![View page template](https://res.cloudinary.com/drlioaaqd/image/upload/c_crop,w_350,h_635/v1710428430/mockup/UIUX_Design.mp4_-_VLC_media_player_27_12_2023_14_48_32_fw7rff.png)
![Results page template](https://res.cloudinary.com/drlioaaqd/image/upload/c_crop,w_350,h_635/v1710428430/mockup/UIUX_Design.mp4_-_VLC_media_player_27_12_2023_14_48_19_lhhgyj.png)

![Main page template](https://res.cloudinary.com/drlioaaqd/image/upload/c_crop,w_350,h_635/v1710428428/mockup/UIUX_Design.mp4_-_VLC_media_player_27_12_2023_14_48_10_dnjnoq.png)
![Checkout page template](https://res.cloudinary.com/drlioaaqd/image/upload/c_crop,w_350,h_635/v1710428428/mockup/UIUX_Design.mp4_-_VLC_media_player_27_12_2023_14_49_02_aggizf.png)
![Login page template](https://res.cloudinary.com/drlioaaqd/image/upload/c_crop,w_350,h_635/v1710428429/mockup/UIUX_Design.mp4_-_VLC_media_player_27_12_2023_14_48_00_yjkqua.png)
![Cart page template](https://res.cloudinary.com/drlioaaqd/image/upload/c_crop,w_350,h_635/v1710428430/mockup/UIUX_Design.mp4_-_VLC_media_player_27_12_2023_14_48_41_gvqpho.png)


## License

[MIT](https://choosealicense.com/licenses/mit/)
