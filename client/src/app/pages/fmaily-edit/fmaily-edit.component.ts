// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { FmailyService } from '../../services/fmaily.service';
import { StaffService } from '../../services/staff.service';
// Import Models
import { Fmaily } from '../../domain/molsa_db/fmaily';
import { Staff } from '../../domain/molsa_db/staff';

// START - USED SERVICES
/**
* fmailyService.create
*	@description CRUD ACTION create
*
* fmailyService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* fmailyService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* StaffService.findByfmaily
*	@description CRUD ACTION findByfmaily
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Fmaily
 */
@Component({
    selector: 'app-fmaily-edit',
    templateUrl: 'fmaily-edit.component.html',
    styleUrls: ['fmaily-edit.component.css']
})
export class FmailyEditComponent implements OnInit {
    item: Fmaily;
    externalStaff_fmaily: Staff[];
    model: Fmaily;
    formValid: Boolean;

    constructor(
    private fmailyService: FmailyService,
    private staffService: StaffService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Fmaily();
        this.externalStaff_fmaily = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.fmailyService.get(id).subscribe(item => this.item = item);
                this.staffService.findByFmaily(id).subscribe(list => this.externalStaff_fmaily = list);
            }
            // Get relations
        });
    }


    /**
     * Save Fmaily
     *
     * @param {boolean} formValid Form validity check
     * @param Fmaily item Fmaily to save
     */
    save(formValid: boolean, item: Fmaily): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.fmailyService.update(item).subscribe(data => this.goBack());
            } else {
                this.fmailyService.create(item).subscribe(data => this.goBack());
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



