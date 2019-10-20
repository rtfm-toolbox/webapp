import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device';
import { MenuService } from 'src/app/services/menu.service';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  devices: BehaviorSubject<Device[]> = new BehaviorSubject([]);

  constructor(
    private menuservice: MenuService,
    private router: Router,
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.loadDevices();
  }

  loadDevices () {
    this.http.get<Device[]>(environment.apis.devices.url).subscribe(result => {
      console.log("result:", result);
      this.devices.next(result);
    })
  }

}
