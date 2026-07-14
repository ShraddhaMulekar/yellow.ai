# 📬 AI Customer Support Inbox

A modern customer support inbox built with **React**, **TypeScript**, **React Query**, and **Mock Service Worker (MSW)**. This project simulates a real-world customer support dashboard where agents can search, filter, sort, assign, and resolve customer conversations.

---

## 🚀 Features

### ✅ Conversation Management
- View all customer conversations
- View conversation details
- Assign conversations to an agent
- Resolve assigned conversations

### 🔍 Search
- Search conversations by:
  - Customer Name
  - Customer Email
  - Subject

### 🎯 Filters
- Filter by Priority
  - High
  - Medium
  - Low
- Filter by Status
  - Open
  - Assigned
  - Resolved

### 📊 Sorting
- Newest First
- Oldest First
- Priority (High → Low)
- SLA Remaining

### ⚡ Loading & Error Handling
- Empty State
- Error State
- Retry Failed Requests

### 🧪 Mock Backend
- Mock Service Worker (MSW)
- REST API Simulation
- Artificial Network Delay

---

# 🛠 Tech Stack

## Frontend

- React 19
- TypeScript
- Vite

## State Management

- TanStack React Query

## API Mocking

- Mock Service Worker (MSW)

## Styling

- CSS

---

# 📁 Folder Structure

```text
src
│
├── api
│   └── conversationApi.ts
│
├── components
│   ├── common
│   │   ├── EmptyState
│   │   ├── ErrorState
│   │   └── LoadingSkeleton
│   │
│   ├── conversation
│   │   ├── ConversationCard
│   │   ├── ConversationDetails
│   │   ├── ConversationList
│   │   ├── ConversationListSkeleton
│   │   └── ActionButtons
│   │
│   ├── filters
│   │   ├── SearchBar
│   │   ├── FilterBar
│   │   └── SortDropdown
│   │
│   └── layout
│       ├── Header
│       ├── Sidebar
│       └── MainContent
│
├── hooks
│   ├── useConversations.ts
│   ├── useAssignConversation.ts
│   └── useResolveConversation.ts
│
├── mocks
│   ├── browser.ts
│   ├── handlers.ts
│   └── data.ts
│
├── types
│   ├── conversation.ts
│   └── sort.ts
│
├── App.tsx
└── main.tsx
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project

```bash
cd project-name
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

---

# 📡 Mock API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/conversations` | Fetch all conversations |
| PATCH | `/conversations/:id/assign` | Assign a conversation |
| PATCH | `/conversations/:id/resolve` | Resolve a conversation |

---

# 🧠 Concepts Demonstrated

- React Functional Components
- TypeScript Interfaces
- React Hooks
- Custom Hooks
- React Query
- Query Invalidation
- Mutations
- Component Composition
- Conditional Rendering
- Controlled Components
- Mock API Development with MSW
- State Management
- Error Handling
- Loading States
- Empty States

---


# 🔮 Future Improvements

- Authentication (JWT)
- Pagination
- Real-time updates using Socket.io
- Dark Mode
- Notifications
- Agent Management
- Customer Profile Page
- Conversation Notes
- File Attachments
- Unit Testing (Vitest)
- End-to-End Testing (Playwright)

---