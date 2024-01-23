import { Component } from '@angular/core';
import { UserService } from 'src/app/myServices/user.service';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-all-user-list',
  templateUrl: './all-user-list.component.html',
  styleUrls: ['./all-user-list.component.css']
})
export class AllUserListComponent {


  first: number = 0;

  rows: number = 10;

  onPageChange(event: PageEvent) {
      this.first = event.first;
      this.rows = event.rows;
  }



  public allData:any=[];

public idd:any;
public name:any;
public emial:any;
public role:any;

constructor(private user:UserService)
{
  this.getservicedata()
}



getservicedata()
{
  this.user.getData().subscribe((res=>{
    console.log(res);
    this.allData=res;
  }))
}

onUpd(dt:any)
{
  this.user.patch(dt)
   
}

onDel(dt:any)
{
  console.log(dt);
  var a=confirm("Do you want to delete data");
   if(a==true)
   {
    this.user.DeleteData(dt.id).subscribe((res:any)=>{
      console.log(res);
      this.getservicedata();
    })
   }
}

}
