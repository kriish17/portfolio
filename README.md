# https://www.krishna17.xyz/

A modern, responsive portfolio website for Krishna R Kulkarni, a Computer Science student at RNS Institute of Technology and Samsung Innovation Campus trainee. Built with Next.js, React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and showcases skills.

##  Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Built-in dark mode support
- **Fast Performance**: Optimized with Next.js for excellent performance
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Beautiful project gallery with filtering
- **Social Links**: Easy integration with social media profiles
- **Smooth Animations**: Framer Motion animations for enhanced user experience

##  Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd krishna-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

##  Project Structure

```
krishna-portfolio/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── projects/          # Projects page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   └── Navigation.tsx     # Navigation component
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── next.config.js        # Next.js configuration
└── README.md             # This file
```

##  Customization

### Personal Information

Update your personal information in the following files:

1. **Home Page** (`app/page.tsx`)
   - Update the hero section text
   - Modify social media links
   - Change featured projects

2. **About Page** (`app/about/page.tsx`)
   - Update personal description
   - Modify skills and experience
   - Change education details

3. **Projects Page** (`app/projects/page.tsx`)
   - Add your own projects
   - Update project images and descriptions
   - Modify project links

4. **Contact Page** (`app/contact/page.tsx`)
   - Update contact information
   - Modify social media links
   - Change location and phone number

### Styling

The website uses Tailwind CSS for styling. You can customize:

1. **Colors**: Update the color scheme in `tailwind.config.js`
2. **Fonts**: Change fonts in `app/layout.tsx`
3. **Animations**: Modify Framer Motion animations in components

### Domain Configuration

To deploy to your domain `krishna17.xyz`:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to your preferred hosting service**:
   - Vercel (recommended for Next.js)
   - Netlify
   - AWS Amplify
   - Or any other hosting service

3. **Configure your domain**:
   - Point your domain to your hosting service
   - Update DNS settings
   - Configure SSL certificate

##  Configuration

### Environment Variables

Create a `.env.local` file for any environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://krishna17.xyz
```

### SEO Configuration

Update the metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Krishna - Portfolio',
  description: 'Your custom description here',
  // ... other metadata
}
```

##  Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

##  Dark Mode

The website includes automatic dark mode detection and manual toggle functionality. The color scheme adapts to user preferences.

##  Performance Optimization

- **Image Optimization**: Uses Next.js Image component for optimized images
- **Code Splitting**: Automatic code splitting with Next.js
- **Lazy Loading**: Images and components load as needed
- **Minification**: Production builds are minified and optimized

##  Analytics (Optional)

To add analytics, you can integrate:

1. **Google Analytics**
2. **Vercel Analytics**
3. **Plausible Analytics**

##  Security

- Form validation and sanitization
- Secure headers with Next.js
- HTTPS enforcement in production

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

##  License

This project is open source and available under the [MIT License](LICENSE).

##  Support

If you need help or have questions:

1. Check the documentation
2. Open an issue on GitHub
3. Contact me through the contact form



