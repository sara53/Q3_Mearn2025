
import { createRoot } from 'react-dom/client'
import { MianLayout } from './layout/MianLayout'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './index.css'

import 'bootstrap-icons/font/bootstrap-icons.css'
import { ProductProvider } from './context/ProductProvider'
import ThemeProvider from './context/ThemeProvider'
createRoot( document.getElementById( 'root' ) ).render(
  <ThemeProvider>
    <ProductProvider>
      <MianLayout />
    </ProductProvider>
  </ThemeProvider>
)




