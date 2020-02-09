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
  public identity = null;
  public token = null;
  constructor(private userService: UserService) {
    this.user = new User("", "", "", "", "", "ROLE_USER", "");
  }
  ngOnInit() {
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
  }
  public onSubmitLogin(form: NgForm) {
    const params = {
      email: form.value.email,
      password: form.value.password,
      gethash: true
    };
    if (form.value.gethash) {
    } else {
      //Get data user
      this.userService.signUp(form.value).subscribe(
        response => {
          const identity = response["user"];
          this.identity = identity;
          console.log(this.token);
          if (this.token != null) {
            //!this.identity._id
            M.toast({ html: "Ok Login" });
          } else {
            //Create element token
            localStorage.setItem("identity", JSON.stringify(identity));
            //get Token
            console.log(params);
            this.userService.signUp(params).subscribe(
              res => {
                console.log(this.token);
                const token = res["token"];
                this.token = token;
                console.log(this.token);
                if (this.token.length <= 0) {
                  M.toast({ html: "Error Login" });
                } else {
                  localStorage.setItem("token", token);
                  console.log(localStorage.getItem("token"));
                  console.log(localStorage.getItem("identity"));
                }
              },
              err => {
                M.toast({ html: "Not Login" });
              }
            );
            //Persist in LocalStorage
          }
          M.toast({ html: "Login correct" });
        },
        error => {
          M.toast({ html: "Login incorrect" });
        }
      );
    }
  }
  logOut() {
    localStorage.removeItem("identity");
    localStorage.removeItem("token");
    localStorage.clear();
    this.identity = null;
    this.token = null;
    M.toast({ html: "Logout succesfully" });
  }
}
