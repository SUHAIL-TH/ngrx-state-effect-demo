import { Component } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
       
        <a class="nav-link active" rounterLinkActive="active" routerLink="/" >Home</a>
        <a class="nav-link" rounterLinkActive="active" routerLink="/counter" >Counter</a>
        <a class="nav-link" rounterLinkActive="active" routerLink="/products" >Products</a>
        <a class="nav-link" rounterLinkActive="active" routerLink="/users" >Users</a>
      </div>
    </div>
  </div>
</nav>
  `,
  styles: [
  ]
})
export class TopNavComponent {

}
