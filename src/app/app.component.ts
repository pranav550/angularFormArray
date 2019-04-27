import { Component } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, NgForm, Validators, FormArray} from '@angular/forms';
import { FormSignup } from './form-signup';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularReactiveFormArray';

  signupForm:FormGroup;
  firstname:string="";
  lastname:string="";
  email:string="";
  password:string=""

//   constructor(private formBuilder: FormBuilder){
//     this.signupForm = this.formBuilder.group({
//       fname: new FormControl(),
//       lname: new FormControl(),
//       email: new FormControl(),
//       upassword: new FormControl()
//     })
//  }
  constructor(private formBuilder: FormBuilder){
     this.signupForm = this.formBuilder.group({
       fname:['', Validators.required],
       lname:['', Validators.required ],
       email:['', Validators.compose([Validators.required, Validators.email])],
       upassword:['', Validators.required]
     })
  }

  ngOnInit(){
    // this.signupForm.get('fname').valueChanges.subscribe(
    //   uname=>{
    //     console.log('fname changed:'+ uname)
    //   }
    // )

    // this.signupForm.valueChanges.subscribe((uname:FormSignup)=>{
    //   console.log('fname Changed:' +uname.fname)
    //   console.log('lname Changed:' +uname.lname)
    //   console.log('email Changed:' +uname.email)
    //   console.log('password Changed:' +uname.upassword)
    // }
    
    // );

    //   this.signupForm.get('email').statusChanges.subscribe(uname=>{
    //   console.log('email Changed:' +uname)
      
    // }
    
    // );


    //       this.signupForm.statusChanges.subscribe(status=>{
    //   console.log('Form Validation Status:' +status)
      
    // }
    
    // );

    const arr= new FormArray([
      //new FormControl('Add', Validators.minLength(2)),
      new FormControl(),
      new FormControl(),
     
    ])
    // arr.patchValue(['Ajeet'])
    arr.reset(['Name','Lastname'])
    console.log(arr.value);
    console.log(arr.status);
  }

  postData(signupForm:any){
    this.firstname= this.signupForm.get('fname').value;
   
    console.log(this.firstname)
      console.log(this.signupForm.value)
  }

  resetForm(){
    this.signupForm.reset();
  //  this.signupForm.reset({
  //    fname:"pranav",
  //    lname:"verma"
  //  });

  }

  // fillData(){
  //   this.signupForm.setValue({
  //     "fname":"ajeet",
  //     "lname":"verma",
  //     "email":"ajeet@gmail.com",
  //     "upassword":"123456"
  //   })
  // }

  fillData(){
    this.signupForm.patchValue({
      "fname":"ajeet",
      "lname":"verma",
      "email":"ajeet@gmail.com",
      "upassword":"123456"
    })
  }
}
