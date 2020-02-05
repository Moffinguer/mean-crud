import { Component } from "@angular/core";
import { User } from "./models/user";
import { UserService } from "./services/users.services";
import { NgForm } from "@angular/forms";

declare var M: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [UserService]
})
export class AppComponent {
  public title = "Teacher App";
  public user: User;
  public identity;
  public token: String;
  constructor(private userService: UserService) {
    this.user = new User("", "", "", "", "", "ROLE_USER", "");
  }
  public onSubmitLogin(form: NgForm) {
    if (form.value.gethash) {
    } else {
      //Get data user
      this.userService.signUp(form.value).subscribe(
        response => {
          this.identity = response;

          if (!this.identity._id) {
            M.toast({html:"Not Login"});
          }else{
            //Create element token
            //Persis in LocalStorage
            this.identity
          }
          M.toast({ html: "Login correct" });
        },
        error => {
          M.toast({ html: "Login incorrect" });
        }
      );
    }
  }
}
