# 🛒 Digital Marketplace

A full-stack Digital Marketplace built with modern tools including **Next.js 14 (App Router)**, **Stripe Connect**, **Kinde** (Auth), **Prisma**, and **Supabase**. This platform allows users to buy, sell, and manage digital products with secure payments and user sessions.

---

## 🧩 Tech Stack

- ⚡ **Next.js 14** (App Router, Server Actions)
- 🎨 **Tailwind CSS** for styling
- 💳 **Stripe Connect** for seller onboarding and payments
- 🔐 **Kinde** for authentication and user management
- 🗃️ **Prisma** as the ORM
- 🧾 **Supabase** (PostgreSQL) as the database
- 🛠️ **TypeScript**, **ESLint**, **Prettier**

---

## 📁 Directory Structure

```

digital-marketplace/
│
├── app/                     # App directory (Next.js 14)
│   ├── api/                 # Route handlers (API)
│   ├── billing/             # Stripe billing routes
│   ├── components/          # UI components
│   ├── lib/                 # App-level utils and services
│   ├── my-products/         # User product dashboard
│   ├── payment/             # Payment flows
│   ├── product/             # Product display page
│   ├── products/            # All products list
│   ├── return/              # Payment return handler
│   ├── sell/                # Upload/sell product page
│   ├── settings/            # User settings
│   ├── layout.tsx          # App layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
│
├── components/              # Shared components
├── lib/                     # Prisma, Stripe, and helper functions
├── prisma/                  # Prisma schema & migrations
├── public/                  # Public assets (images, favicon)
│
├── .env                     # Environment variables
├── .gitignore               # Ignored files for Git
├── next.config.ts           # Next.js config
├── package.json             # Project dependencies and scripts
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration

````

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/daveontrack/Digital-Marketplace.git
cd Digital-Marketplace
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file and add the required keys:

```env
DATABASE_URL=postgresql://<user>:<password>@<host>:5432/<db>
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
KINDE_ISSUER_URL=...
KINDE_CLIENT_ID=...
KINDE_CLIENT_SECRET=...
KINDE_REDIRECT_URI=http://localhost:3000/api/auth/callback
```

### 4. Push Prisma Schema to Supabase

```bash
npx prisma db push
```

### 5. Run the Dev Server

```bash
npm run dev
```

Visit `http://localhost:3000`

---

## 🧪 Features

* Seller onboarding via Stripe Connect
* Auth with Kinde
* Buy/sell digital products
* Product dashboard (CRUD)
* Secure checkout flow
* Server Actions & API routes with Next.js App Router
* Post-purchase download access

---

## 📦 Scripts

```bash
npm run dev         # Run development server
npm run build       # Build production bundle
npm run lint        # Lint with ESLint
```


