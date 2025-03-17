
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-300">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-gradient mb-4">404</h1>
          <p className="text-2xl text-gray-300 mb-8">Oops! Page not found</p>
          <a href="/" className="btn-primary inline-flex items-center">
            <ArrowLeft size={18} className="mr-2" />
            Return to Home
          </a>
        </div>
        <div className="w-full max-w-md mx-auto glass-panel p-8 rounded-xl">
          <p className="text-gray-400">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
