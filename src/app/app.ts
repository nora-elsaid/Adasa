import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { Posts } from "./posts/posts";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Posts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('appl');
}
