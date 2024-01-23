import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public id2:any;
  public name2:any;
  public email2:any;
  public role2:any;

  constructor(private http:HttpClient) {

  

   }

   getData()
   {
    return this.http.get('https://jsonplaceholder.org/users')
   }

   DeleteData(id:any)
   {
     return this.http.delete("https://jsonplaceholder.org/users/"+id)
   }

   patch(data:any)
   {
       this.id2=data.id;
       this.name2=data.firstname;
       this.email2=data.email;
       this.role2=data.company.name;
   }

   // To Update the data 
  updateData(data:any)
  {
    return this.http.put("https://jsonplaceholder.org/users/"+data.id,data)
  }

}
