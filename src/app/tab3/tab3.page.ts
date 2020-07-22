import {Component, OnInit} from '@angular/core';
import {InitialConvo} from '../shared/models/initial-convo';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NavigationExtras, Router} from '@angular/router';
import {TwilioService} from '../shared/services/twilio.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  initialConvo: InitialConvo = new InitialConvo();
  lightUsersName: any;
  initialMessage: any;
  phoneNumberForm: FormGroup;
  userId: any;
  constructor(private fb: FormBuilder, private router: Router, private twilioService: TwilioService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state;
    this.lightUsersName = state.lightUsersName;
    this.initialMessage = state.initialMessage;
  }
  ngOnInit(){
    this.createPhoneForm();
    console.log('initial navigation state', this.initialConvo);
  }
  createPhoneForm(){
    this.phoneNumberForm = this.fb.group({
      phoneNumber: ['']
    });
  }
  getUserProfile(){

  }
  sendInitialMessageUi(){
    this.initialConvo.firstName = this.lightUsersName;
    this.initialConvo.initialMessage = this.initialMessage;
    this.initialConvo.phoneNumber = this.phoneNumberForm.controls.phoneNumber.value;
    this.initialConvo.cardId = 'mark1234';
    // TODO create service to send to Lambda
    console.log('the initialConvo Object', this.initialConvo);
    this.twilioService.sendInitialMessage(this.initialConvo)
        .subscribe(data => {
          console.log('message sent ', data);
        });
  }
  nextTab(tabRoute: string){
    const navigationExtras: NavigationExtras = {
      state: {
        initialConvo: this.initialConvo,
        lightUserPhoneNumber: this.phoneNumberForm.controls.phoneNumber.value
      }
    };
    console.log('Tab 3 navigation State', navigationExtras);
    this.router.navigate([tabRoute], navigationExtras);
  }
}


