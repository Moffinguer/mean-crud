import { Component } from "@angular/core";
import { User } from "./models/user";
import { UserService } from "./services/users.services";
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

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
  public user_register:User; // Usuario puente para crear los registros
  public identity = null;
  public token = null;
  constructor(private userService: UserService, private router: Router) {
    this.user = new User("", "", "", "", "", "ROLE_USER", "");
    this.user_register= new User("", "", "", "", "", "ROLE_USER", "");
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

    //Get data user
    this.userService.signUp(form.value).subscribe(
      response => {
        const identity = response["user"];
        this.identity = identity;
        if (this.token != null) {
          //!this.identity._id
          M.toast({ html: "Ok Login" });
        } else {
          //Create element token
          localStorage.setItem("identity", JSON.stringify(identity));
          //get Token
          this.userService.signUp(params).subscribe(
            res => {
              const token = res["token"];
              this.token = token;
              if (this.token.length <= 0) {
                M.toast({ html: "Error Login" });
              } else {
                localStorage.setItem("token", token);
                this.user = new User("", "", "", "", "", "ROLE_USER", "");
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
  logOut() {
    localStorage.removeItem("identity");
    localStorage.removeItem("token");
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this.router.navigate(["home"]);
    M.toast({ html: "Logout succesfully" });
  }
  onSubmitRegister(){
    const params={
      name:this.user_register.name,
      surname:this.user_register.surname,
      email:this.user_register.email,
      password:this.user_register.password,
      role:"ROLE_USER",
      image:""
    };
    this.userService.register(params).subscribe(res=>{
      const user=res["user"];
      this.user_register=res["user"];
      if(!user._id){
        M.toast({ html: "User register Incorrect" });
      }else{
        M.toast({ html: "User register successfully. U can login using "+this.user_register.email});
        this.user_register=new User("", "", "", "", "", "ROLE_USER", "");
      }
    },err=>{});
  }
}
