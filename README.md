# Task Manager

A modern, efficient task management application built with Next.js, Clerk for authentication, and Xata for database management.

## Features

- User authentication with Clerk
- Create, read, update, and delete tasks
- Mark tasks as completed or pending
- Responsive design for desktop and mobile devices
- Server-side rendering and API routes with Next.js
- Database management with Xata

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and API routes
- [Clerk](https://clerk.dev/) - User authentication and management
- [Xata](https://xata.io/) - Serverless database platform
- [TypeScript](https://www.typescriptlang.org/) - Static type-checking for JavaScript
- [CSS Modules](https://github.com/css-modules/css-modules) - Scoped CSS for components

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn
- Clerk account and API keys
- Xata account and database set up

## Installation

1. Clone the repository:
```
 https://github.com/amuybar/taskmanager.git
```

2. Install dependencies:
```
npm install
```
or
```
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add the following:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

CLERK_SECRET_KEY=your_clerk_secret_key

XATA_API_KEY=your_xata_api_key

XATA_DATABASE_URL=your_xata_database_url

```
## Running the Application

To run the application in development mode:
```
npm run dev
```
or
```
yarn dev
```

The application will be available at `http://localhost:3000`.

## Project Structure
task-manager/ \n
├── actions/\n
│   ├── AddTask.ts\n
│   └── TaskActions.ts\n
├── components/\n
│   ├── Nav/\n
│   ├── Task/\n
│   │   ├── Task.tsx\n
│   │   ├── TaskForm.tsx\n
│   │   └── TaskView.tsx\n
│   └── ...\n
├── pages/\n
│   ├── api/\n
│   ├── _app.tsx\n
│   └── index.tsx\n
├── styles/\n
│   └── globals.css\n
├── xata/\n
│   └── index.ts\n
├── .env.local\n
├── next.config.js\n
├── package.json\n
└── tsconfig.json\n

## Deployment

This application can be deployed on platforms like Vercel or Netlify. Make sure to set up the environment variables in your deployment platform's settings.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/amuybar) if you want to contribute.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://docs.clerk.dev/)
- [Xata Documentation](https://xata.io/docs)