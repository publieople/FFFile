import { useEffect } from 'react';
import Layout from './components/Layout';
import { useStore } from './store';

function App() {
  const initialize = useStore((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return <Layout />;
}

export default App;
