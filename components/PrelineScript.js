import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function PrelineScript() {
  const router = useRouter();
  const path = router.asPath; // Get the current path

  useEffect(() => {
    const loadPreline = async () => {
      await import("preline/preline");
      if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    };

    loadPreline();
  }, []);

  useEffect(() => {
    if (window.HSStaticMethods) {
      setTimeout(() => {
        window.HSStaticMethods.autoInit();
      }, 100);
    }
  }, [path]);

  return null;
}
