import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { FmailyService } from '../../services/fmaily.service';
// Import Models
import { Fmaily } from '../../domain/molsa_db/fmaily';

// START - USED SERVICES
/**
* fmailyService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* fmailyService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Fmaily
 * @class FmailyListComponent
 */
@Component({
    selector: 'app-fmaily-list',
    templateUrl: './fmaily-list.component.html',
    styleUrls: ['./fmaily-list.component.css']
})
export class FmailyListComponent implements OnInit {
    list: Fmaily[];
    search: any = {};
    idSelected: string;
    constructor(
        private fmailyService: FmailyService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.fmailyService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Fmaily to remove
     *
     * @param {string} id Id of the Fmaily to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Fmaily
     */
    deleteItem() {
        this.fmailyService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
