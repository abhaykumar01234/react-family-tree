import { nanoid } from "nanoid";
import { PersonType } from "~/types";

export class Person {
  id: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  dob: Date;
  img_url: string;
  dod?: Date;
  gender: "M" | "F";
  parents_id: string;
  marriage_id?: string;

  constructor(data: Omit<PersonType, "id">) {
    this.id = nanoid();
    this.first_name = data.first_name;
    this.middle_name = data.middle_name;
    this.last_name = data.last_name;
    this.dob = data.dob;
    this.dod = data.dod;
    this.img_url = data.img_url;
    this.gender = data.gender;
    this.parents_id = data.parents_id;
    if (data.marriage_id) this.marriage_id = data.marriage_id;
  }

  setDateOfDeath(dod: Date): void {
    this.dod = dod;
  }

  setMarriageId(marriage_id: string): void {
    this.marriage_id = marriage_id;
  }
}
