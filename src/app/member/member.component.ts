import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  memberForm = new FormGroup( {
    name: new FormControl(''),
    city: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  saveMember() {
    alert(
      'Név: ' + this.memberForm.value.name + '\n' + 
      'Település:' + this.memberForm.value.city + '\n' +
      'Cím:' + this.memberForm.value.address + '\n' +
      'E-mail:' + this.memberForm.value.email

      );
  }

}
