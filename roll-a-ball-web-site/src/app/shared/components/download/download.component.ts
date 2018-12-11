import { Component, OnInit, Input } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
public faDownload = faDownload;
@Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
