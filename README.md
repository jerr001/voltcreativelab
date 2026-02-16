# Volt Creative Lab Website

This project contains:

- A modern, responsive Next.js frontend (with Tailwind CSS)
- A Node.js + Express backend API (in /backend) for form handling and MongoDB

## Folder Structure

```
/                 # Next.js frontend (main site)
  /src            # Source files for Next.js
  ...             # All Next.js pages/components
/backend          # Node.js Express API
  server.js       # Main backend server
  package.json    # Backend dependencies
  .env.example    # Example environment variables
```

## Running Locally

### 1. Frontend (Next.js)

```
npm install
npm run dev
```

Visit http://localhost:3000

### 2. Backend (Node.js + Express)

```
cd backend
cp .env.example .env   # Edit .env with your MongoDB URI if needed
npm install
npm run dev            # or: npm start
```

Backend runs on http://localhost:5000

### 3. MongoDB

- You need a running MongoDB instance (local or cloud, e.g., MongoDB Atlas)
- Set your connection string in backend/.env

## Connecting Frontend to Backend

- Update API URLs in frontend code to use http://localhost:5000 for backend endpoints (e.g., /api/contact)

## Customization

- Replace placeholder content, images, and testimonials with your own.
- Update Tailwind config and theme colors to match your logo (see tailwind.config.js).

## Notes

- All code is ready for further development and scaling.
- For production, set up SSL and environment variables securely.
