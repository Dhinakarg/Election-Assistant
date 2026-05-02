import React from 'react';

/**
 * ErrorBoundary catches JavaScript errors anywhere in their child component tree,
 * logs those errors, and displays a fallback UI instead of the component tree that crashed.
 * This prevents the entire application from displaying a blank white screen.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error in component tree:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-800 p-4">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-red-100 max-w-md text-center">
            <h1 className="text-4xl mb-4">⚠️</h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong.</h2>
            <p className="text-gray-500 mb-6">We're sorry, but the application encountered an unexpected error. Please refresh the page to try again.</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
