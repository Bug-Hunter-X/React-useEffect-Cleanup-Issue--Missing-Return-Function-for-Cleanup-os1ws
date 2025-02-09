```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Mounted!');
    return () => {
      // Cleanup function (runs before unmount)
      console.log('Unmounting!');
    };
  }, []);

  useEffect(() => {
    // This effect runs whenever 'count' changes
    console.log('Count changed:', count);
    // Correct implementation: return a function to clean up
    return () => {
      // cleanup logic for event listeners or other side effects
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```