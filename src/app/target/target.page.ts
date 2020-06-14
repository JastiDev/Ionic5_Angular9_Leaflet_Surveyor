import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from "@angular/common";

@Component({
  selector: "app-target",
  templateUrl: "./target.page.html",
  styleUrls: ["./target.page.scss"],
})
export class TargetPage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("id")) {
        this.router.navigate(["/home"]);
        return;
      }

      let id = paramMap.get("id");
      console.log(id);
    });
  }

  goBack() {
    this.location.back();
  }
}
