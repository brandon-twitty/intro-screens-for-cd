import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NavigationExtras, Router} from '@angular/router';
import {InitialConvo} from '../shared/models/initial-convo';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  lightUsersName: any;
  initialMessage: any;
  initialMessageForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state;
    this.lightUsersName = state.lightUsersName;
  }
  ngOnInit(): void {
    this.createMessageForm();

  }
  createMessageForm(){
    this.initialMessageForm = this.fb.group({
      initialMessage: ['']
    });
  }
  nextTab2(tabRoute: string){
    const navigationExtras: NavigationExtras = {
      state: {
        lightUsersName: this.lightUsersName,
        initialMessage: this.initialMessageForm.controls.initialMessage.value
      }
    };
    console.log('Tab 2 navigation State', navigationExtras);
    this.router.navigate([tabRoute], navigationExtras);
  }
}
