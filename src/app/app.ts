import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Servicos } from './components/servicos/servicos';
import { Diferenciais } from './components/diferenciais/diferenciais';
import { Galeria } from './components/galeria/galeria';
import { Depoimentos } from './components/depoimentos/depoimentos';
import { Cta } from './components/cta/cta';
import { Footer } from './components/footer/footer';







@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header, Hero, Servicos, Diferenciais,Galeria,Depoimentos,Cta,Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('barbearia-landing');
}
