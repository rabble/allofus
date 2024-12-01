export function debounce(func: (...args: any[]) => void, wait: number, callback?: () => void) {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
      if (callback) callback();
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
} 