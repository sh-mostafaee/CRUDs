export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: TUserAddress;
  phone: string;
  website: string;
  company: TUserCompany;
};

export type TUserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: TUserGeo;
};

export type TUserGeo = {
  lat: string;
  lng: string;
};

export type TUserCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type TUsers = TUser[];
