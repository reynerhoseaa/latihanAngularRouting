import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  namaJurusan = [];
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    namaJurusan = id
  }

}