# Amazon Seller Dashboard

This is a cloud-based Amazon Seller Dashboard prototype built with Next.js 14 and TypeScript. It's designed to simplify and enhance the experience for Amazon sellers, providing them with a comprehensive tool to manage their sales, inventory, and analytics in one place.

## Features

- **Sales and Revenue Tracking**: View daily, weekly, monthly, and yearly sales figures, including total revenue, number of orders, and average order value.
- **Inventory Management**: Display current inventory levels for each product and alert users when stock is low or needs replenishment.
- **Analytics and Insights**: Analyze top-selling products, customer demographics, and sales trends over time.
- **Customer Feedback and Reviews**: Aggregate customer reviews and ratings for products, allowing sellers to monitor feedback directly from the dashboard.
# Deployment

The project is deployed on Vercel. You can access it at https://saa-s-lilac.vercel.app/.

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- React icons
- Sitemap
- Aceternity UI
- Shadcn UI
- Framer Motion
- npm

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/takidilmi/SaaS (SSH: git@github.com:takidilmi/SaaS.git)
   ```
2. Install the dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
# Environment Variables

The project uses the following environment variables:

- `NEXT_PUBLIC_FORMSPREE_FORM_ID`: Your Formspree form ID for the contact form.

You need to add these environment variables to your `.env` file (which you should not include in your version control system) and to your hosting platform. If you're using Vercel, you can add them in the project settings under the "Environment Variables" section.

## Usage
Click signin
Navigate to the dashboard to view your sales, inventory, and analytics. You can also manage your inventory directly from the dashboard.