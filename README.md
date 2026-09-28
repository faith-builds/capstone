## For The Frontend:

```
This automatically routes to http://localhost:5000/api/health in development
```

fetch('/api/health')
  .then(res => res.json())
  .then(data => console.log(data));


// main.js
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Accessing the Vite env variables
    console.log("App Title:", import.meta.env.VITE_APP_TITLE);
    
    fetch(`${import.meta.env.VITE_API_URL}/health`)
      .then((res) => res.json())
      .then((data) => console.log("API Status:", data));
  }, []);

  return (
    <div>
      <h1>{import.meta.env.VITE_APP_TITLE}</h1>
    </div>
  );
}

export default App;
