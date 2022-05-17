import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { StaffService } from '../../services/staff.service';
// Import Models
import { Staff } from '../../domain/molsa_db/staff';

// START - USED SERVICES
/**
* StaffService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* StaffService.list
*	@description CRUD ACTION list
*
* StaffService.findByfmaily
*	@description CRUD ACTION findByfmaily
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Staff
 * @class StaffListComponent
 */
@Component({
    selector: 'app-staff-list',
    templateUrl: './staff-list.component.html',
    styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
    list: Staff[];
    search: any = {};
    idSelected: string;
    constructor(
        private staffService: StaffService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.staffService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Staff to remove
     *
     * @param {string} id Id of the Staff to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Staff
     */
    deleteItem() {
        this.staffService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
