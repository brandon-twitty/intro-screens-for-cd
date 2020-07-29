import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, NavigationExtras, Params, Router} from '@angular/router';
import {GetCardholderService} from '../shared/services/get-cardholder.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  imageUrl: string;
  lightUsersName: any;
  nameForm: FormGroup;
  routeParams: Params;
  card_id: any;
  user;
  // user: User = new User();

  constructor( private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private userService: GetCardholderService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state;

    this.getUserByUrlParameter();

  }

  ngOnInit() {
    // getUserImageUrlById()
    this.createNameForm();
  }
  getUserByUrlParameter(){
    this.activatedRoute.params.subscribe( params => {
      console.log('the pathparams', params);
      // tslint:disable-next-line:no-shadowed-variable variable-name
      const card_id = params['card_id'];
      this.userService.getUserByCardId(card_id)
          .subscribe(user => this.user = user);
      console.log('user =', this.user);
    });
  }
  createNameForm(){
    this.nameForm = this.fb.group({
      ltFirstName: ['']
    });
  }
  nextTab(tabRoute: string){
    const navigationExtras: NavigationExtras = {
      state: {
        lightUsersName: this.nameForm.controls.ltFirstName.value
      }
    };
    console.log('Tab 1 navigation State', navigationExtras);
    this.router.navigate([tabRoute], navigationExtras);
  }
  getUserImageUrlById(){

  }
}
