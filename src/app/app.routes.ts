import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Careers } from './pages/careers/careers';
import { KnowledgeServices } from './pages/knowledge-services/knowledge-services';
import { Kwalify } from './pages/kwalify/kwalify';
import { News } from './pages/news/news';
import { Engagement } from './pages/engagement/engagement';
import { SyntheticGen } from './pages/synthetic-gen/synthetic-gen';
import { ClinicalIntelligence } from './pages/clinical-intelligence/clinical-intelligence';
import { ServicesExplore } from './pages/services-explore/services-explore';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about-us', component: About },
  { path: 'contact-us', component: Contact },
  { path: 'careers', component: Careers },
  { path: 'kwalify', component: Kwalify },
  { path: 'knowledge-services', component: KnowledgeServices },
  { path: 'news', component: News },
  { path: 'engagement-models', component: Engagement },
  { path: 'synthetic-gen', component: SyntheticGen },
  { path: 'clinical-intelligence', component: ClinicalIntelligence },
  { path: 'services-explore', component: ServicesExplore },
  // Wildcard MUST be last
  { path: '**', redirectTo: '' }
];
