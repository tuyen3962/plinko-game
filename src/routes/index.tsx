import { PlinkoGamePage } from 'pages/Games/Plinko'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import { NotFound } from './components/NotFound'

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<PlinkoGamePage />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}
