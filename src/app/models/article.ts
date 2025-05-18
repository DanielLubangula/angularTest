export interface Article {
  id: number; //! permet de dire que la variable est non null
  title: string;
  description: string;
  price: number;
  category: string;
  image:string;
  rating: {count : number, rate : number};
} //Represente le model pour article
