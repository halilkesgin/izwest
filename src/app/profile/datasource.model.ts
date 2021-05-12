import {Profile} from "./profile.model";

export class SimpleDataSource {
    private profiles: Profile[];

    constructor(){
        this.profiles = new Array<Profile>(
            new Profile(1,"halil kesgin","web developer","1.jpg"),
            new Profile(2,"ahmet kesgin","web designer","2.jpg"),
            new Profile(3,"aydan kesgin","full stack developer","3.jpg")
        );
    }
    getProfiles(): Profile[]{
        return this.profiles;
    }
}