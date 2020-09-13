import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  cards = [
    {
      title: 'Escoge un Libro',
      subtitle: '',
      imgUrl:
        'https://kentland.lib.in.us/wp-content/uploads/2018/06/library-books-background-8.jpg',
      alt: 'Alternative Choose a book',
      content: 'Escoge dentro de los cientos de libros con los que contamos',
    },
  ];

  ngOnInit(): void {}
}
