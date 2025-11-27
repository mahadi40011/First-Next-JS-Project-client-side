# MegaMart – Online E-commerce Store

MegaMart is a modern e-commerce website where users can browse, add, and manage products. Built with **Next.js, React, Tailwind CSS, and MongoDB**, it includes a blog section and client-side notifications using React Toastify.

---

## 🚀 Features

- **Product Management:** Add, view, and delete products via API  
- **Latest Products:** Display 8 newest products sorted by date  
- **Blog Section:** Responsive blog cards with titles, summaries, and dates  
- **Notifications:** Success/error messages using React Toastify  
- **Responsive Design:** Fully responsive layout with Tailwind CSS  

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Express.js, Node.js
- **Database:** MongoDB
- **Notifications:** React Toastify
- **Version Control:** Git & GitHub

---

## 🗂️ Route Summary

### 📌 Public Routes
| Route | Description |
|-------|-------------|
| `/` | Homepage (Hero banner, offers, featured products) |
| `/products` | Displays all products with search & filter options |
| `/products/[id]` | Single product details page |
| `/login` | User login page |
| `/register` | New account registration |
| `/about` | About the application |
| `/contact` | Contact form page |
| `/blog` | View Our Blogs |

---

### 🔐 Protected Routes
(Only accessible after login)

| Route | Description |
|-------|-------------|
| `/add-product` | user adding a product |
| `/manage-products` | User manage his products |

---

## 💻 Installation

1. Clone the repo:
```bash
git clone https://github.com/mahadi40011/First-Next-JS-Project-client-side

cd frontend
npm install
cd ../backend
npm install
```
