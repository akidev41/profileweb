// Utility to get the base path for assets
// Matches the basePath in next.config.js
export const getBasePath = () => {
  // For static export, check if we're running in production
  // In production build, this will be '/profileweb'
  // In development, this will be ''
  if (typeof window !== 'undefined') {
    // Check if we're on the deployed path
    if (window.location.pathname.startsWith('/profileweb')) {
      return '/profileweb';
    }
  }
  // Default to empty for local development
  return process.env.NODE_ENV === 'production' ? '/profileweb' : '';
};

