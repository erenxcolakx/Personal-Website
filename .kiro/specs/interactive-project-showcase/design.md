# Design Document

## Overview

This design extends the existing portfolio website's project showcase functionality by adding interactive iframe integration for live project demos. The solution will enhance the current scroll-jacking project display with embedded iframe functionality while maintaining the existing visual design language and user experience patterns.

## Architecture

### Current Architecture Analysis
- **Framework**: Next.js 15.5.3 with React 18.2.0
- **Styling**: Tailwind CSS with custom animations
- **Animation**: Framer Motion for scroll-jacking and transitions
- **Icons**: Lucide React
- **Current Project Display**: ScrollJackingProjects component with fixed positioning and scroll-based navigation

### Enhanced Architecture
The design will extend the existing `ScrollJackingProjects` component to include:
- Interactive iframe modal/overlay system
- Project data structure enhancement
- Responsive iframe container with loading states
- Technology stack display integration
- External link functionality

## Components and Interfaces

### 1. Enhanced Project Data Structure

```typescript
interface Project {
  id: number
  title: string
  category: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  color: string
  year: string
  // New properties for iframe integration
  isInteractive: boolean
  iframeUrl?: string
  fallbackMessage?: string
}
```

### 2. Interactive Project Modal Component

```typescript
interface InteractiveProjectModalProps {
  project: Project
  isOpen: boolean
  onClose: () => void
  onOpenExternal: () => void
}
```

**Features:**
- Full-screen modal overlay with iframe
- Loading states and error handling
- Responsive iframe sizing
- Close and external link controls
- Smooth enter/exit animations

### 3. Enhanced ScrollJackingProjects Component

**Modifications:**
- Add "View Interactive Demo" button for interactive projects
- Integrate modal state management
- Maintain existing scroll-jacking functionality
- Add technology stack display enhancement

### 4. Project Technology Display Component

```typescript
interface TechnologyStackProps {
  technologies: string[]
  variant: 'compact' | 'detailed'
}
```

**Features:**
- Visual technology badges with icons
- Categorized display (Frontend, Backend, Database, etc.)
- Hover effects and animations

## Data Models

### Updated Projects Array

```typescript
const projects: Project[] = [
  // Existing projects (updated with new structure)
  {
    id: 1,
    title: "Hiversion",
    category: "SaaS Platform",
    description: "Microservices-based SaaS platform",
    longDescription: "Developing a SaaS platform that combines microservices with a modern frontend for scalable and modular software solutions.",
    image: "/images/hiversion.png",
    technologies: ['Next.js', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS', 'Microservices'],
    liveUrl: "https://hive-front-psi.vercel.app",
    githubUrl: "#",
    color: "from-blue-600 to-purple-600",
    year: "2024",
    isInteractive: true,
    iframeUrl: "https://hive-front-psi.vercel.app"
  },
  // New projects
  {
    id: 5,
    title: "DeepSport Dashboard",
    category: "Analytics Dashboard",
    description: "Performance tracking dashboard for sports analytics",
    longDescription: "Comprehensive dashboard for coaches and athletes featuring real-time performance metrics, data visualization, and analytics tools.",
    image: "/images/deepsport-dashboard.png",
    technologies: ['Next.js', 'React', 'Chart.js', 'Tailwind CSS', 'Analytics'],
    liveUrl: "https://deep-sport-dashboard.vercel.app",
    githubUrl: "#",
    color: "from-indigo-600 to-blue-600",
    year: "2024",
    isInteractive: true,
    iframeUrl: "https://deep-sport-dashboard.vercel.app"
  },
  {
    id: 6,
    title: "Trakya Rezonans",
    category: "Healthcare Platform",
    description: "Medical imaging and healthcare services platform",
    longDescription: "Professional healthcare platform providing medical imaging services, appointment scheduling, and patient management systems.",
    image: "/images/trakya-rezonans.png",
    technologies: ['React', 'Node.js', 'Healthcare APIs', 'Responsive Design'],
    liveUrl: "https://trakyarezonans.com",
    githubUrl: "#",
    color: "from-green-600 to-emerald-600",
    year: "2024",
    isInteractive: true,
    iframeUrl: "https://trakyarezonans.com"
  },
  {
    id: 7,
    title: "HitnessLab Enhanced",
    category: "Fitness Platform",
    description: "Enhanced fitness education and training platform",
    longDescription: "Advanced fitness platform with video courses, progress tracking, and personalized workout plans for fitness enthusiasts.",
    image: "/images/hitnesslab-enhanced.png",
    technologies: ['Next.js', 'Spring Boot', 'Video Streaming', 'Tailwind CSS'],
    liveUrl: "https://hitness-lab.vercel.app",
    githubUrl: "#",
    color: "from-orange-600 to-red-600",
    year: "2024",
    isInteractive: true,
    iframeUrl: "https://hitness-lab.vercel.app"
  },
  {
    id: 8,
    title: "DreamerApp",
    category: "AI Application",
    description: "AI-powered dream interpretation application",
    longDescription: "Innovative AI application that analyzes and interprets dreams using machine learning algorithms and psychological insights.",
    image: "/images/dreamerapp.png",
    technologies: ['Next.js', 'AI/ML', 'OpenAI API', 'React', 'Tailwind CSS'],
    liveUrl: "https://dreamerapp.vercel.app",
    githubUrl: "#",
    color: "from-purple-600 to-pink-600",
    year: "2024",
    isInteractive: true,
    iframeUrl: "https://dreamerapp.vercel.app"
  },
  {
    id: 9,
    title: "Live Weather",
    category: "Weather Application",
    description: "Real-time weather tracking application",
    longDescription: "Comprehensive weather application providing real-time weather data, forecasts, and interactive weather maps.",
    image: "/images/liweather.png",
    technologies: ['React', 'Weather APIs', 'Geolocation', 'Charts', 'PWA'],
    liveUrl: "https://liweather.vercel.app",
    githubUrl: "#",
    color: "from-cyan-600 to-blue-600",
    year: "2024",
    isInteractive: true,
    iframeUrl: "https://liweather.vercel.app"
  },
  {
    id: 10,
    title: "Smart Test AI",
    category: "AI Education Tool",
    description: "AI-powered test generation from PDF documents",
    longDescription: "Intelligent application that automatically generates tests and quizzes from PDF documents using advanced AI processing.",
    image: "/images/smart-test-ai.png",
    technologies: ['Next.js', 'AI/ML', 'PDF Processing', 'OpenAI API', 'React'],
    liveUrl: "https://smart-test-ai.vercel.app",
    githubUrl: "#",
    color: "from-violet-600 to-purple-600",
    year: "2024",
    isInteractive: true,
    iframeUrl: "https://smart-test-ai.vercel.app"
  },
  {
    id: 11,
    title: "Bweet",
    category: "Social Platform",
    description: "Book review social platform",
    longDescription: "Twitter-like social platform dedicated to book reviews, recommendations, and literary discussions among book enthusiasts.",
    image: "/images/bweet.png",
    technologies: ['Next.js', 'Social APIs', 'Database', 'Real-time', 'Tailwind CSS'],
    liveUrl: "https://bweet.vercel.app",
    githubUrl: "#",
    color: "from-rose-600 to-pink-600",
    year: "2024",
    isInteractive: true,
    iframeUrl: "https://bweet.vercel.app"
  }
]
```

## Error Handling

### Iframe Loading States
1. **Loading State**: Display spinner and loading message
2. **Success State**: Show fully loaded iframe
3. **Error State**: Display fallback message with external link
4. **Timeout Handling**: 10-second timeout for iframe loading

### Responsive Behavior
1. **Desktop**: Full-screen modal with optimal iframe sizing
2. **Tablet**: Adjusted modal dimensions with touch-friendly controls
3. **Mobile**: Full-screen experience with mobile-optimized navigation

### Cross-Origin Considerations
- Handle X-Frame-Options restrictions gracefully
- Provide clear fallback messaging for blocked iframes
- Always offer external link as alternative

## Testing Strategy

### Unit Testing
- Project data structure validation
- Modal component state management
- Technology display component rendering
- Error handling functions

### Integration Testing
- Iframe loading and error scenarios
- Modal open/close functionality
- Scroll-jacking integration with new features
- Responsive behavior across devices

### User Experience Testing
- Interactive demo functionality
- Loading performance
- Cross-browser compatibility
- Mobile responsiveness

### Performance Testing
- Iframe loading impact on page performance
- Memory usage with multiple iframes
- Animation performance with enhanced components

## Implementation Considerations

### Security
- Implement Content Security Policy for iframes
- Validate all external URLs
- Handle potential XSS risks from iframe content

### Performance
- Lazy load iframes only when modal opens
- Implement iframe preloading for better UX
- Optimize modal animations for smooth performance

### Accessibility
- Keyboard navigation for modal controls
- Screen reader support for interactive elements
- Focus management in modal states
- Alt text for all project images

### SEO
- Maintain existing meta tags and descriptions
- Ensure project content remains crawlable
- Add structured data for enhanced project listings

## Visual Design Integration

### Modal Design
- Consistent with existing dark theme and gradient backgrounds
- Framer Motion animations matching current scroll-jacking style
- Glass-morphism effects for modal overlay
- Smooth transitions and micro-interactions

### Technology Stack Display
- Enhanced badge design with technology icons
- Color-coded categories (Frontend: Blue, Backend: Green, AI: Purple, etc.)
- Hover effects and animations consistent with existing design

### Button Enhancements
- "View Interactive Demo" button with distinct styling
- Loading states for iframe initialization
- Consistent with existing ProjectButton component design