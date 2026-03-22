# React Video Player

## 📺 Overview
This project is a feature-rich, responsive video player built with **React** and **Vite**. It demonstrates multiple ways to integrate video playback in a React application, including HTML5 basic players, **Video.js** for advanced streaming, and **ImageKit** integration for optimized video delivery.

## ✨ Features
- **Video.js Integration**: Highly customizable player using `video.js`.
- **HLS Quality Switching**: Dynamic video quality adjustment using `videojs-contrib-quality-levels` and `videojs-http-source-selector`.
- **Playback Controls**: Playback speed adjustment (rates: `0.25x`, `0.5x`, `1x`, `1.5x`, `2x`), play, pause, and volume controls.
- **Chapters & Subtitles**: Support for VTT (Web Video Text Tracks) files to display chapters and potentially closed captions.
- **ImageKit Integration**: Efficient video streaming and thumbnails via `@imagekit/react`.
- **Modern UI**: Styled with **Tailwind CSS v4** and headless UI components from **Radix UI** (along with `lucide-react` icons).
- **Fast Build Tool**: Powered by **Vite** for incredibly fast hot module replacement (HMR) and optimized builds.

## 📁 Project Structure
The core player components are located inside the `src/components/` directory:
- `video-player.jsx`: Basic HTML5 video player implementation.
- `videojs.jsx`: Core wrapper component for initializing `video.js` cleanly in React.
- `videojs-player.jsx`: Configured Video.js player implementation using ImageKit HLS streams and chapter markers.
- `imagekit-player.jsx`: Direct integration with `@imagekit/react` for cloud video optimization.

## 🛠️ Tech Stack
- **Framework**: React 19
- **Build Tool**: Vite v6
- **Styling**: Tailwind CSS v4, Radix UI Primitives
- **Video Players**: HTML5 Video, Video.js v7
- **Media Optimization**: ImageKit v6
- **Code Quality**: ESLint v9

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone the repository and navigate to the project directory.
2. Install the necessary dependencies:
   ```bash
   npm install
   ```

### Running the App
Start the development server:
```bash
npm run dev
```
The app will be available at exactly the port specified by Vite (usually `http://localhost:5173`).

### Build for Production
To build the application for production:
```bash
npm run build
```
To run the production build locally:
```bash
npm run preview
```
