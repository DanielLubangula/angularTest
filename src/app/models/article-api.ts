export interface ArticleApi {
  id: number; //! permet de dire que la variable est non null
  title: string;
  description: string;
  price: number;
  category: string;
  image:string;
  count : number;
  rate : number;
}
