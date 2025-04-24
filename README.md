# CAD Exchanger Frontend Assignment

## Setup

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev` for development
4. Run `npm run build` && `npm start` for production

## Hosting

The project is deployed on Vercel: [Live Demo](https://your-vercel-app.vercel.app)

## Technical Choices

- **Framework**: Next.js for SSR, routing and API routes
- **UI Library**: Material-UI for components and theming
- **Form Handling**: react-hook-form for form validation and submission
- **YouTube Embed**: lite-youtube-embed for better LCP performance
- **Styling**: Emotion CSS-in-JS with Material-UI's sx prop

## Performance Optimizations

- Lazy loading for images and components
- Optimized YouTube embed with facade pattern
- Proper heading hierarchy for accessibility
- Semantic HTML elements

## Advanced CSS Technique

Used CSS Grid with fallback to Flexbox for the main layout, with a modern aspect-ratio property for responsive video container.
