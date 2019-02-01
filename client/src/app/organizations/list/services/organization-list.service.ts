import { Injectable } from '@angular/core';

import { OrganizationListRemoteService } from './organization-list-remote.service';

@Injectable()
export class OrganizationListService {
    constructor(private readonly remoteService: OrganizationListRemoteService) {}

    public async getAllData() {
        return await this.remoteService.getAllData();
    }
}
