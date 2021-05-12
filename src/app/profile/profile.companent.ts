import { Component } from "@angular/core";
import { Profile } from "../profile/profile.model";
import { ProfileRepository } from "../profile/repository.model";

@Component({
    selector: "app-profile",
    templateUrl: "profile.component.html",
    styleUrls: ["profile.component.css"]
})

export class ProfileComponent {
    model: ProfileRepository = new ProfileRepository();
    profile1: Profile = this.model.getProfilesById(1);
    profile2: Profile = this.model.getProfilesById(2);
    profile3: Profile = this.model.getProfilesById(3);
}