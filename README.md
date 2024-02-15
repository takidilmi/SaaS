# Amazon Seller Dashboard

This is a cloud-based Amazon Seller Dashboard prototype built with Next.js 14 and TypeScript. It's designed to simplify and enhance the experience for Amazon sellers, providing them with a comprehensive tool to manage their sales, inventory, and analytics in one place.

## Features

- **Sales and Revenue Tracking**: View daily, weekly, monthly, and yearly sales figures, including total revenue, number of orders, and average order value.
- **Inventory Management**: Display current inventory levels for each product and alert users when stock is low or needs replenishment.
- **Analytics and Insights**: Analyze top-selling products, customer demographics, and sales trends over time.
- **Customer Feedback and Reviews**: Aggregate customer reviews and ratings for products, allowing sellers to monitor feedback directly from the dashboard.
![screencapture-saa-s-lilac-vercel-app-2024-02-15-14_30_44](https://github.com/takidilmi/SaaS/assets/137835769/380104eb-6173-4694-97b2-6130b052e05f)
![screencapture-saa-s-lilac-vercel-app-dashboard-2024-02-15-14_31_28 (1)](https://github.com/takidilmi/SaaS/assets/137835769/4b3fd70a-5ded-46b0-970a-41d0f4e642f8)
![screencapture-saa-s-lilac-vercel-app-orders-2024-02-15-14_32_02 (1)](https://github.com/takidilmi/SaaS/assets/137835769/eae33d6c-a598-4345-9ca8-9d2ca593f992)
![screencapture-saa-s-lilac-vercel-app-users-2024-02-15-14_31_44](https://github.com/takidilmi/SaaS/assets/137835769/0b824579-85bc-4cb1-98dc-027766d9a644)

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
- Click signin
- Navigate to the dashboard to view your sales, inventory, and analytics. You can also manage your inventory directly from the dashboard.
