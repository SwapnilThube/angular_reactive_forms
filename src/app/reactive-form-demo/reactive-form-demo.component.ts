import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validator, Validators } from '@angular/forms';
import { forbiddenNameValidtor, NotAllowedName } from '../sharedValidator/username.validtor';
import { passwordConfirm } from '../sharedValidator/password.validator';


@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.css'] 
})
export class ReactiveFormDemoComponent implements OnInit {

  registrationForm : FormGroup;
  constructor(private fb: FormBuilder) { }

  // registrationForm = new FormGroup({
  //   userName: new FormControl('Swapnil'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(),
  //     state: new FormControl(),
  //     country: new FormControl()
  //   })
  // });

  ngOnInit() {
   this.registrationForm = this.fb.group({
      userName: ['',[Validators.required,Validators.minLength(3),forbiddenNameValidtor,NotAllowedName(/password/)]],
      password: [''],
      mobile: ['',NotAllowedName(/password/)],
      email:[''],
      IsSubscribe:[false],
      confirmPassword: '',
      address: this.fb.group({          
        city: ['Thane'],
        state:[''], 
        country:['INDIA']
      })
    },{validators : passwordConfirm});


    //conditional 
    this.registrationForm.get('IsSubscribe').valueChanges.subscribe( 
      checkedValue =>{
        const email = this.registrationForm.get('email');
        if(checkedValue){
            email.setValidators(Validators.required);
        }else{
          email.clearValidators();
        }
        email.updateValueAndValidity();
      }
    );


  }

  loadApiData(){
    // this.registrationForm.setValue({ //strict to values required all values
    //   userName: 'Swapnil Thube',
    //   password:'',
    //   confirmPassword:'',
    //   address: {
    //     city: 'Pune',
    //     state:'',
    //     country:''
    //   }
    // });

    this.registrationForm.patchValue({ // partial valuse can set
      userName: 'Testing'
    });
  }

  get userName(){
    return this.registrationForm.get('userName');
  }

  get email(){
    return this.registrationForm.get('email');
  }

}
