import { Component } from '@angular/core';
import { UserService } from 'src/app/myServices/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  public data:any;
  public list:any;
  
  public idd3:any;
  public name3:any;
  public email3:any;
  public role3:any;
  
   constructor(private user:UserService)
   {
  
  
   }
   onSubmit(frm:any)
   {
    console.log(frm.value);
    
   }

   ngDoCheck()
{
  this.patchData()
}

   patchData()
   {
      this.idd3=this.user.id2;
      this.name3=this.user.name2;
      this.email3=this.user.email2;
      this.role3=this.user.role2;
   }


   onMainUpdate(frm:any)
   {
    this.user.updateData(frm.value).subscribe((res:any)=>{
      console.log(res);
      // this.getDataFromBackend();
      alert("Data Updated Successfully!!")
    })
   }
   
}
