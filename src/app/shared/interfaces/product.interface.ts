import { ICategory } from "./category.interface";

  interface IReview {
    user?:string;
    name:string;
    email:string;
    rating:number;
    review:string;
    date:string;
  }

  interface IProductVariant {
    name: string
    code: string
    imgUrl: string
    active: boolean
    isDefault: boolean
  }

  interface IAdditionalInfo {
    key: string;
    value: any;
  }

  interface IOfferDate {
    startDate: Date;
    endDate: Date;
  }
  
  export interface IProduct {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    discount: number;
    qty: number;
    sku: string;
    category: ICategory[];
    brand: string;
    status: string;
    reviews: IReview[];
    productVariants: IProductVariant[];
    additionalInformation: IAdditionalInfo[];
    tags: string[];
    featured: boolean;
    rate: number;
    bgColor?: string;
    img?: string;
    offerDate?: IOfferDate;
    isNew: boolean
  }

  export interface IProductCart extends IProduct {
    orderQuantity: number
  }