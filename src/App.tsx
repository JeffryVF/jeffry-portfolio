import { NavbarComponent } from './components/NavbarComponent';
import { AboutMePage } from './pages/AboutMePage';
import { BackgroundPage } from './pages/BackgroundPage';
import {PresentationPage} from './pages/PresentationPage';
import { TechnologiesPage } from './pages/TechnologiesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { FooterComponent } from './components/FooterComponent';
import { Toaster } from 'react-hot-toast';

const App: React.FC  = () => {
  return (
    <div className="bg-gradient-to-r from-van-dyke to-liver font-roboto">
      <NavbarComponent/>
      <PresentationPage/>
      <AboutMePage/>
      <TechnologiesPage/>
      <BackgroundPage/>
      <ProjectsPage/>
      <ContactPage/>
      <FooterComponent/>
      <Toaster/>
    </div>
  )
}
export default App
