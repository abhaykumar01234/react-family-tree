export type PersonType = {
  id: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  dob: Date;
  img_url: string;
  dod?: Date;
  gender: "M" | "F";
  parents_id: string;
  marriage_id?: CoupleType["couple_id"];
};

export type CoupleType = {
  couple_id: string;
  husband: PersonType;
  wife: PersonType;
  children: Array<PersonType & { parents_id: CoupleType["couple_id"] }>;
};
