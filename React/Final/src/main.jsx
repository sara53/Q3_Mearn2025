
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Mainlayout } from './layout/Mainlayout'

createRoot( document.getElementById( 'root' ) ).render(
  <Mainlayout />
)
