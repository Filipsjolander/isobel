# My Vite React App

A modern React application built with Vite, ready for deployment on Netlify.

## 🚀 Features

- ⚡️ **Vite** - Fast build tool and development server
- ⚛️ **React 18** - Latest React features
- 🎨 **ESLint** - Code linting
- 📦 **Hot Module Replacement** - Instant updates during development
- 🌐 **Netlify Ready** - Pre-configured for easy deployment

## 🛠️ Development

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-vite-react-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Deploy to Netlify

This project is pre-configured for Netlify deployment with `netlify.toml`.

#### Option 1: Connect GitHub Repository

1. Push your code to GitHub
2. Log in to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Netlify will automatically detect the build settings from `netlify.toml`
6. Click "Deploy site"

#### Option 2: Drag and Drop

1. Build the project locally:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify's deployment area

### Deploy to Other Platforms

The build output is in the `dist` folder and can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repo or use `vercel` CLI
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Firebase Hosting**: Use `firebase deploy` after building

## 📁 Project Structure

```
my-vite-react-app/
├── public/           # Static assets
├── src/              # Source code
│   ├── components/   # React components
│   ├── App.jsx       # Main App component
│   └── main.jsx      # Entry point
├── netlify.toml      # Netlify configuration
├── package.json      # Dependencies and scripts
└── vite.config.js    # Vite configuration
```

## 🔧 Configuration

### Vite Configuration

The project uses Vite's default React configuration. You can customize it in `vite.config.js`.

### Netlify Configuration

The `netlify.toml` file includes:
- Build command: `npm run build`
- Publish directory: `dist`
- Redirects for Single Page Application routing

## 📝 License

MIT License - feel free to use this project for your own purposes.
