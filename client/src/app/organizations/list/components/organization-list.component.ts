import { Component, OnInit } from '@angular/core';
import { OrganizationListService } from '../services';

@Component({
    templateUrl: './organization-list.component.html',
    styleUrls: [ './organization-list.component.scss' ],
})

export class OrganizationListComponent implements OnInit {
    public model: any;

    constructor(private readonly service: OrganizationListService) {}

    public async ngOnInit() {
        this.model = await this.service.getAllData();
    }
}
