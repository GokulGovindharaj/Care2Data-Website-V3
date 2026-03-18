import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Careers } from './pages/careers/careers';
import { KnowledgeServices } from './pages/knowledge-services/knowledge-services';
import { Product } from './pages/product/product';
import { News } from './pages/news/news';
import { Engagement } from './pages/engagement/engagement';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about-us', component: About },
  { path: 'contact-us', component: Contact },
  { path: 'careers', component: Careers },
  { path: 'kwalify', component: Product },
  { path: 'knowledge-services', component: KnowledgeServices },
  { path: 'news', component: News },
  { path: 'engagement-models', component: Engagement },
  // Wildcard MUST be last
  { path: '**', redirectTo: '' }
];
