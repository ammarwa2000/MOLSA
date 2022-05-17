// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { StaffService } from '../../services/staff.service';
import { FmailyService } from '../../services/fmaily.service';
// Import Models
import { Staff } from '../../domain/molsa_db/staff';
import { Fmaily } from '../../domain/molsa_db/fmaily';

// START - USED SERVICES
/**
* StaffService.create
*	@description CRUD ACTION create
*
* StaffService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* StaffService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* fmailyService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Staff
 */
@Component({
    selector: 'app-staff-edit',
    templateUrl: 'staff-edit.component.html',
    styleUrls: ['staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {
    item: Staff;
    listFmaily: Fmaily[];
    model: Staff;
    formValid: Boolean;

    constructor(
    private staffService: StaffService,
    private fmailyService: FmailyService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Staff();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.staffService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.fmailyService.list().subscribe(list => this.listFmaily = list);
        });
    }


    /**
     * Save Staff
     *
     * @param {boolean} formValid Form validity check
     * @param Staff item Staff to save
     */
    save(formValid: boolean, item: Staff): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.staffService.update(item).subscribe(data => this.goBack());
            } else {
                this.staffService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



