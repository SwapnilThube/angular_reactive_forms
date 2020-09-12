import { Component, OnInit } from '@angular/core';
import { user } from './user.model'
import { ApiCallService } from '../services/api-call.service';


@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  errorMessage = '';
  itemList = ['DotNet','Angular','MSSQL'];

  IsTopicHasValue = true;

  userModel = new user('Swapnil','',8655751282,'','',true);
  constructor(private _apiCall: ApiCallService) { }
  ngOnInit() {
    console.log(this.IsTopicHasValue);
  }
  checkValidation(value){
    if(value === ""){
        this.IsTopicHasValue = true;
    }else{
      this.IsTopicHasValue = false;
    }

    console.log(this.IsTopicHasValue);
  }

  onSubmit(userForm){
      console.log(userForm);
    // console.log(this.userModel);

    // this._apiCall.submitData(this.userModel).subscribe(
    //   data => console.log('success',data),
    //   error => this.errorMessage = error.statusText
    // )

  }

}
