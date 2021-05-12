import { SimpleDataSource} from "../profile/datasource.model";
import { Profile } from "../profile/profile.model";

export class ProfileRepository {
    private dataSource: SimpleDataSource;
    private profiles: Profile[];

    constructor(){
        this.dataSource = new SimpleDataSource();
        this.profiles = new Array<Profile>();
        this.dataSource.getProfiles().forEach(p => this.profiles.push(p));
    }

    getProfiles(): Profile[]{
        return this.profiles;
    }

    getProfilesById(id: number): Profile {
        return this.profiles.find(p=>p.id == id);
    }

}