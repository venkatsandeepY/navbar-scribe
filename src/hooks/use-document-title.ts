import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useDocumentTitle() {
  const location = useLocation();

  useEffect(() => {
    const getPageTitle = (pathname: string) => {
      switch (pathname) {
        case '/':
          return 'ETEMS Dashboard';
        case '/status':
          return 'Status - ETEMS Dashboard';
        case '/reports':
          return 'Reports - ETEMS Dashboard';
        case '/feedback':
          return 'Feedback - ETEMS Dashboard';
        default:
          return 'ETEMS Dashboard';
      }
    };

    const title = getPageTitle(location.pathname);
    document.title = title;
  }, [location.pathname]);
} 