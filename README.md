# 🏞️ The Wild Oasis - Guest Booking Website

> A modern, full-stack hotel booking platform built with Next.js 14, providing guests with seamless cabin reservations and profile management

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://the-wild-oasis-website-six-zeta.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-green)](https://supabase.com/)

## 📋 Overview

The Wild Oasis Website is a customer-facing booking platform for a luxury boutique hotel. This full-stack application allows guests to explore cabins, make reservations, manage their bookings, and update their profiles—all through an elegant, responsive interface.

Built with Next.js 14's latest features including App Router, Server Components, and Server Actions, this project demonstrates modern web development practices with optimal performance and user experience.

**[🚀 View Live Website](https://the-wild-oasis-website-six-zeta.vercel.app)**

> **Companion Project:** This is the guest-facing website. Check out the [internal management system](https://github.com/omidsdgi/The-Wild-Oasis-) used by hotel staff.

---

## ✨ Key Features

### 🏠 Cabin Discovery & Information
- **Cabin Showcase**: Browse all available luxury cabins with detailed information
- **Interactive Gallery**: High-quality images showcasing each cabin
- **Capacity Filtering**: Filter cabins by maximum guest capacity
- **Availability Calendar**: View booked dates for each cabin in real-time
- **Detailed Specifications**: Capacity, pricing, amenities, and descriptions

### 📅 Smart Reservation System
- **Date Range Selection**: Interactive calendar for choosing check-in and checkout dates
- **Real-time Availability**: Instant validation against existing bookings
- **Guest Capacity Selection**: Choose number of guests per reservation
- **Observations/Notes**: Add special requests or notes to reservations
- **Unconfirmed Status**: Reservations set as "unconfirmed" until check-in (payment on-site)

### 👤 Guest Authentication & Profiles
- **Secure Authentication**: NextAuth.js integration with Google OAuth
- **User Registration**: Automatic profile creation upon sign-up
- **Profile Management**: Update personal information, nationality, and national ID
- **Fast Check-in**: Pre-filled profile data speeds up hotel arrival process
- **Protected Routes**: Authentication required for booking and profile actions

### 🗂️ Reservation Management
- **My Reservations**: Comprehensive view of all past and future bookings
- **Booking History**: Track completed stays
- **Upcoming Stays**: Manage future reservations
- **Edit Reservations**: Update booking details (guest count, observations)
- **Cancel Bookings**: Delete reservations with confirmation
- **Reservation Details**: Full breakdown of dates, pricing, and cabin info

### 🎨 Modern User Experience
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile
- **Server-Side Rendering**: Fast initial page loads with SEO optimization
- **Optimistic UI Updates**: Instant feedback on user actions
- **Loading States**: Smooth transitions and skeleton screens
- **Error Handling**: User-friendly error messages and fallbacks
- **Accessibility**: WCAG compliant with keyboard navigation support

### 📱 About & Information Pages
- **Hotel Information**: Learn about The Wild Oasis luxury experience
- **Location Details**: Hotel location and surrounding attractions
- **Contact Information**: Easy ways to reach the hotel
- **Policies**: Check-in/check-out times, payment terms, and house rules

---

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router and Server Components
- **React 18** - UI library with latest features (Suspense, Transitions)
- **Tailwind CSS** - Utility-first CSS framework
- **Heroicons** - Beautiful hand-crafted SVG icons
- **React Day Picker** - Flexible date picker component
- **date-fns** - Modern date utility library

### Backend & Authentication
- **Next.js API Routes** - Serverless API endpoints
- **NextAuth.js v5** - Authentication solution with OAuth providers
- **Supabase** - Backend-as-a-Service
  - PostgreSQL Database
  - Row Level Security (RLS)
  - Real-time data synchronization
  - Secure file storage

### Deployment & Performance
- **Vercel** - Optimized hosting with Edge Network
- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic route-based splitting
- **Static Generation** - Pre-rendered pages for best performance

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm
- Supabase account
- Google OAuth credentials (for authentication)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/omidsdgi/the-wild-oasis-website.git
cd the-wild-oasis-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**

Create a `.env.local` file in the root directory:

```env
# Supabase
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Google OAuth
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
```

4. **Set up Supabase Database**

Run the SQL schema to create necessary tables:
- `cabins` - Cabin information and pricing
- `guests` - Guest profiles and authentication
- `bookings` - Reservation data and status
- `settings` - Application-wide settings

5. **Start development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

6. **Build for production**
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
the-wild-oasis-website/
├── app/                      # Next.js 14 App Router
│   ├── _components/          # Reusable React components
│   ├── _lib/                 # Utility functions and helpers
│   ├── account/              # User account pages
│   │   ├── page.js           # Account overview
│   │   └── reservations/     # Reservations management
│   ├── cabins/               # Cabin browsing and details
│   │   ├── page.js           # Cabin list with filters
│   │   └── [cabinId]/        # Individual cabin page
│   ├── about/                # About page
│   ├── api/                  # API routes
│   │   └── auth/             # NextAuth configuration
│   ├── layout.js             # Root layout
│   └── page.js               # Homepage
├── public/                   # Static assets
│   └── cabins/               # Cabin images
├── styles/                   # Global styles
└── next.config.js            # Next.js configuration
```

---

## 🎯 Core Functionality

### Next.js 14 Architecture
- **App Router**: File-system based routing with layouts
- **Server Components**: Default server-side rendering for optimal performance
- **Server Actions**: Direct database mutations without API routes
- **Streaming SSR**: Progressive page rendering with Suspense
- **Parallel Routes**: Multiple page sections loaded simultaneously

### Authentication Flow
1. Guest clicks "Sign in with Google"
2. OAuth redirect to Google authentication
3. NextAuth.js creates session
4. Guest profile automatically created in Supabase
5. Protected routes become accessible
6. Session persists with secure HTTP-only cookies

### Booking Flow
1. Guest browses cabins and filters by capacity
2. Selects cabin and views availability calendar
3. Chooses date range (blocked dates shown)
4. Specifies number of guests and adds observations
5. Reviews booking summary with pricing
6. Confirms reservation (requires authentication)
7. Booking saved as "unconfirmed" status
8. Guest can view/edit booking in "My Reservations"

### Data Management
- **Server-Side Data Fetching**: All data fetched in Server Components
- **Optimistic Updates**: Instant UI feedback while server processes changes
- **Revalidation**: Smart cache invalidation with Next.js revalidation
- **Error Boundaries**: Graceful error handling with fallback UI

---

## 🔐 Security Features

- **NextAuth.js**: Industry-standard authentication
- **OAuth 2.0**: Secure Google sign-in
- **Row Level Security**: Supabase RLS policies protect user data
- **Server-Side Validation**: All inputs validated on server
- **HTTPS**: Secure data transmission
- **Environment Variables**: Sensitive keys protected
- **CSRF Protection**: Built-in Next.js security measures

---

## 🎨 Design Philosophy

### User-Centric Design
- Clean, intuitive interface with minimal learning curve
- Mobile-first responsive design
- Fast loading times and smooth interactions
- Clear call-to-actions and user feedback
- Accessible to users with disabilities

### Performance Optimization
- Server Components reduce JavaScript bundle size
- Image optimization with next/image
- Font optimization with next/font
- Static page generation where possible
- Edge caching via Vercel CDN
- Lazy loading for below-the-fold content

---

## 📊 Database Schema

### Cabins Table
```sql
- id (primary key)
- name
- maxCapacity
- regularPrice
- discount
- description
- image
```

### Guests Table
```sql
- id (primary key)
- created_at
- fullName
- email
- nationalID
- nationality
- countryFlag
```

### Bookings Table
```sql
- id (primary key)
- created_at
- startDate
- endDate
- numNights
- numGuests
- totalPrice
- status (unconfirmed/checked-in/checked-out)
- cabinId (foreign key)
- guestId (foreign key)
- observations
```

---

## 📈 Future Enhancements

- [ ] **Payment Integration** - Stripe/PayPal for online payments
- [ ] **Email Notifications** - Booking confirmations and reminders
- [ ] **Reviews & Ratings** - Guest feedback system
- [ ] **Loyalty Program** - Points and rewards for returning guests
- [ ] **Multi-language Support** - i18n for international guests
- [ ] **Advanced Search** - Filter by price, amenities, dates
- [ ] **Mobile App** - React Native companion app
- [ ] **Chat Support** - Real-time guest support
- [ ] **Special Offers** - Promotions and discount codes
- [ ] **Guest Preferences** - Save favorite cabins and settings

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Omid Sadeghi**

- GitHub: [https://github.com/omidsdgi](https://github.com/omidsdgi)
- Portfolio: [https://my-portfolio-tau-flame-49.vercel.app](https://my-portfolio-tau-flame-49.vercel.app)
- Email: [omid69sdgi@gmail.com](mailto:omid69sdgi@gmail.com)

---

## 🔗 Related Projects

- **[The Wild Oasis - Management System](https://github.com/omidsdgi/The-Wild-Oasis-)** - Internal hotel management dashboard
- **Live Management App**: [Dashboard Demo](https://the-wild-oasis-sigma-livid.vercel.app)

---

## 📝 License

This project is [MIT](LICENSE) licensed.

---

## 🙏 Acknowledgments

- Next.js team for excellent documentation
- Supabase for robust backend infrastructure
- Vercel for seamless deployment
- NextAuth.js community for authentication guidance
- Tailwind CSS for rapid UI development

---

## 📸 Screenshots

### Homepage
*<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/73f1a73c-001f-4724-a028-6a4aa82d00f6" />*

### Cabin Details
*<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4af16166-7f7b-4a25-a7c2-df26cad2e078" />*

### My Reservations
*<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b045dbc0-ff12-4fad-8dea-cbb99b176364" />*

### Profile Management
*<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/cece0d50-79be-4701-aa41-5559edf208ee" />*

---

## 🔗 Links

- **Live Website**: [https://the-wild-oasis-website-six-zeta.vercel.app](https://the-wild-oasis-website-six-zeta.vercel.app)
- **Repository**: [https://github.com/omidsdgi/the-wild-oasis-website](https://github.com/omidsdgi/the-wild-oasis-website)
- **Management System**: [Internal Dashboard](https://github.com/omidsdgi/The-Wild-Oasis-)

---

<div align="center">

**⭐ If you found this project helpful, please give it a star! ⭐**

Made with ❤️ using Next.js 14

</div>
