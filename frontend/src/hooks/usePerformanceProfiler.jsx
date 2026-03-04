import { useEffect } from "react";

export default function usePerformanceProfiler(componentName) {
  useEffect(() => {
    const start = performance.now();
    return () => {
      const end = performance.now();
      console.log(
        `[PERF] ${componentName} unmounted. Render time: ${(end - start).toFixed(
          2
        )}ms`
      );
    };
  }, [componentName]);
}
