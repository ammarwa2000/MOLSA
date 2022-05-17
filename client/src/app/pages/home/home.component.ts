// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { UserService } from '../../services/user.service';
import { StaffService } from '../../services/staff.service';
import { FmailyService } from '../../services/fmaily.service';

// START - USED SERVICES
/**
* UserService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* StaffService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* fmailyService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
*/
// END - USED SERVICES

/**
 * Home Component
 */
@Component({
    selector: 'app-home',
    templateUrl : './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor(
        private userService: UserService,
        private staffService: StaffService,
        private fmailyService: FmailyService,
        private location: Location
        ) {

    }
}
