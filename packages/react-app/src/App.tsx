import React, { ReactElement } from 'react';
import { meaningOfLife } from '@app/shared';
import { buttons, dropdowns } from '@app/components';

const App = (): ReactElement => (
  <React.StrictMode>
    {meaningOfLife}
    <buttons.Button />
    <dropdowns.Dropdown text="Click..." />
  </React.StrictMode>
);

export default App;
