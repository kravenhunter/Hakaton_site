export interface IError {
  statusCode: number;
  message: string;
}

export interface IAlert {
  dialogModal?: boolean;
  titleResult?: string;
  iconResult?: string;
  colorIcon?: string;
}
export interface IProduct {
  id?: string;
  title?: string;
  subTitle?: string;
  imageBgLink?: string;
  imagePreviewLink?: string;
  category?: string;
  shortDescription?: string;
  description_1?: string;
  description_2?: string;
  description_3?: string;
  description_4?: string;
  galary_link_1?: string;
  galary_link_2?: string;
  galary_link_3?: string;
  galary_link_4?: string;

  likes?: number;
  dislikes?: number;

  price?: number;
  productCode?: number;
  discont?: number;
  size?: string;
  weight?: number;
  dimension?: string;
  dough?: string;
  calories?: number;
  fat?: number;
  arbohydrates?: number;
  carbohydrates?: number;
}

export interface IPageContents {
  imageBgLink?: string;
  imagePreviewLink?: string;

  galary_link_1?: string;
  galary_link_2?: string;
  galary_link_3?: string;
  galary_link_4?: string;
  title?: string;
  subTitle?: string;
  shortDescription?: string;
  description_1?: string;
  description_2?: string;
  description_3?: string;
  description_4?: string;
}
export interface IContacts {
  imageBgLink?: string;
  imagePreviewLink?: string;
  title?: string;
  description?: string;
  extraeDscription?: string;
  phone?: string;
  email?: string;
  socialLink_1?: string;
  socialLink_2?: string;
  socialLink_3?: string;
  socialLink_4?: string;
  socialLink_5?: string;
  copyright?: string;
}
export interface IAlert {
  dialogModal?: boolean;
  titleResult?: string;
  iconResult?: string;
  colorIcon?: string;
}

export interface ISelectedPrices {
  adult: number;
  child: number;
  zooCrew: number;
  concession: number;
  senior: number;
  teacher: number;
  supporter: number;
}
export interface IUser {
  email: string;
  password?: string;
  date_of_birth: string;
  phone: string;
  login_name: string;
  first_name: string;
  last_name: string;
  country: string;
  adress: string;
  type: string;
}

export interface IFileObject {
  compressedFILE: File;
  preview: string;
}

export interface IBestChiefs {
  avatar: string;
  fullImg: string;
  title: string;
  name: string;
  job: string;
  review: string;
}

export interface IBasket {
  id: string;
  product_id: string;
  count: number;
  user_id: string;
}

export interface ITempBasket {
  user_id: string;
  product_id: string;
  imageBg: string;
  product_title: string;
  price: number;
  quantity: number;
  total: number;
}

export type TypeImage = "cover" | "preview" | "galary" | "main_galary";

export type CategoryType =
  | "Pizza"
  | "Burger"
  | "Salad"
  | "Soup"
  | "Sushi"
  | "Dessert"
  | "Drinks"
  | "First"
  | "Second"
  | "FastFood"
  | "Additionals";
