import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UsersService } from 'src/app/services/users/users.service';
import { MatTableDataSource } from '@angular/material/table';
import {Observable} from 'rxjs';

export interface Claim {
  batch_id: string;
  claim_id: string;
  emp_id: string;
  emp_name: string;
  number_of_claims:string;
  date_submit: string;
}


@Component({
  selector: 'app-claim-batch',
  templateUrl: './claim-batch.component.html',
  styleUrls: ['./claim-batch.component.css']
})

export class ClaimBatchComponent implements OnInit {
  displayedColumns: string[] = ['claim_id', "emp_name", "number_of_claims","date_submit"];
  dataSource: MatTableDataSource <Claim> ;
  batch_id: number;
  temp: Array<Claim>;

 constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((stream : Array<Claim>) =>{
      console.table(stream)
      this.dataSource = new MatTableDataSource(stream);
    });
  }

  ChangeViewDateFormat(d: Date): any {
    const d2: Date = new Date(d);
    const dd = String(d2.getDate()).padStart(2, '0');
    const mm = String(d2.getMonth() + 1).padStart(2, '0');
    const yyyy = d2.getFullYear();
    return dd + '-' + mm + '-' + yyyy;
  }

  /* viewBatchClaims(batch_id : number){

    Swal.fire("Batch 1", "Table not found")
  } */

  modalDetails(batch_id : number){
    this.usersService.getUsers().subscribe((stream : Array<Claim>) =>{
      stream.pipe()
      console.table(stream)
      this.dataSource = new MatTableDataSource(stream);
    });
  }
}

