import { Component } from '@angular/core';
import { Services } from './services/services';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VPM_IM';

  constructor(private service:Services){
    if($.cordys.authentication.sso.isAuthenticated()){
      $.cordys.authentication.getUser().done((userObject:any) =>
      {
        this.service.sharingData(userObject.userName,'loginUserID');
        this.service.sharingData(userObject.userDN.split(',')[0].split("=")[1],'loginUserName');
        // t.getLovMasterData();
      });
    }else {
      $.cordys.authentication.sso.authenticate('venkat','venkat').done(  () => {
        // this.router.navigate(['/home']);
    });
    }
  }
  ngOnInit(){
   
  }
}
