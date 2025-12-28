# Personal Invoicing App

This is a **full-stack invoicing application** built with **Node.js, Express, MongoDB** for the backend and **React + Vite** for the frontend.  
It supports login, dashboard, customers, products, sales invoices, and PDF export.

---

## Features

- User authentication (login/register)
- Dashboard showing invoice stats (paid/unpaid)
- Manage customers
- Manage products
- Create, view, and manage invoices
- Download invoices as PDF
- Clean and simple React frontend

---

## Folder Structure
invoicing-app/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   ├── config/
│   │   ├── db.js
│   │   └── jwt.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── customer.controller.js
│   │   ├── product.controller.js
│   │   └── invoice.controller.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Customer.js
│   │   ├── Product.js
│   │   └── Invoice.js
│   └── routes/
│       ├── auth.routes.js
│       ├── customer.routes.js
│       ├── product.routes.js
│       └── invoice.routes.js
│
├── frontend/
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── api/
│       ├── pages/
│       ├── components/
│       ├── context/
│       └── styles/
│
└── README.md

