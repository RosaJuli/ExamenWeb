import { Component } from '@angular/core';
import { inject ,OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elemento4',
  templateUrl: './elemento4.component.html',
  styleUrls: ['./elemento4.component.css']
})
export class Elemento4Component implements OnInit{
  private breakpointObserver = inject(BreakpointObserver);

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  navegator(){
    this.router.navigate(['/navigation']);
    
  }
  pelicula(){
    this.router.navigate(['/peliculas']);
    
  }
  contacto(){
    this.router.navigate(['/users']);
    
  }
  logout(){
    this.router.navigate(['/examen']);
  }
  cartelera(){
    this.router.navigate(['/cartelera']);
  }
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    

    

}
