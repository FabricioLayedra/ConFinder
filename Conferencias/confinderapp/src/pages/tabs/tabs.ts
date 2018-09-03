import { Component } from '@angular/core';

import { FavoritesPage } from '../favorites/favorites';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';
import { ProximosPage} from '../proximos/proximos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = FavoritesPage;
  tab4Root =  ProximosPage;


  constructor() {

  }
}
