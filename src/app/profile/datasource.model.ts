import {Profile} from "./profile.model";

export class SimpleDataSource {
    private profiles: Profile[];

    constructor(){
        this.profiles = new Array<Profile>(
            new Profile(1,"Jackson Peters","web developer","profile1.jpg"),
            new Profile(2,"Rebecca Bishop","web designer","profile2.jpg"),
            new Profile(3,"Grace Moore","full stack developer","profile3.jpg")
        );
    }
    getProfiles(): Profile[]{
        return this.profiles;
    }
}