import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';
import Fetch from '@/pages/Fetch';

function App() {
  return (
    <MantineProvider>
      <Fetch />
    </MantineProvider>
  );
}

export default App;
