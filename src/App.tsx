import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';
import AccomInfo from '@/pages/AccomInfo';

function App() {
  return (
    <MantineProvider>
      <AccomInfo />
    </MantineProvider>
  );
}

export default App;
