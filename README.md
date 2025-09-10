# Daily Inspiration - Random Quote Generator
**Project Owner:** khorn kimkhimmengkheang

## Brief Description
A beautiful single-page web application that displays random inspirational quotes with a click of a button. Built using React 18.x.x, TypeScript, Tailwind CSS, and designed with a modern gradient aesthetic. The application will connect to a Supabase database for unlimited quote storage and retrieval.

## Technologies Used
- **Frontend:** React 18.3.1, TypeScript, Tailwind CSS
- **UI Components:** shadcn/ui, Lucide React icons
- **Backend:** Supabase (for database and API)
- **Build Tool:** Vite
- **Styling:** Custom design system with gradients and animations

## Setup Instructions

### Prerequisites
- Node.js & npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation Steps
```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Architecture Explanation

### Current Implementation
- **Frontend:** React single-page application with a clean, responsive design
- **State Management:** React hooks for local state management
- **UI/UX:** Custom design system with gradient backgrounds, smooth transitions, and hover effects
- **Quote Display:** Currently uses sample quotes stored locally

### Planned Architecture (with Database Integration)
```
Frontend (React) ↔ Backend API (Supabase) ↔ Database (PostgreSQL)
```

1. **Frontend (React):** User interface with quote display and fetch button
2. **Backend API (Supabase):** RESTful API endpoints for quote retrieval
3. **Database (PostgreSQL):** Stores quotes with text, author, and metadata

### Communication Flow
1. User clicks "Get Quote" button
2. Frontend sends API request to Supabase backend
3. Backend queries PostgreSQL database for random quote
4. Database returns quote data
5. Backend sends quote to frontend
6. Frontend displays quote with smooth animations

## Features
- ✅ Beautiful, responsive design with gradient aesthetics
- ✅ Smooth animations and hover effects
- ✅ Toast notifications for user feedback
- ✅ Loading states with spin animations
- ✅ Mobile-friendly responsive layout
- 🔄 **Coming Soon:** Database integration with unlimited quotes

## Next Steps
To enable database functionality:
1. Connect to Supabase using the native Lovable integration
2. Create quotes table in Supabase database  
3. Implement API endpoints for quote retrieval
4. Replace sample quotes with database queries

## Project Structure
```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   └── QuoteCard.tsx    # Main quote display component
├── pages/
│   └── Index.tsx        # Main page component
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── index.css           # Design system and global styles
```

---
*Built with ❤️ using React and modern web technologies*