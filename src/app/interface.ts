export interface simplifiedProduct {
    _id: string;
    imageUrl: string;
   
    slug: string;
    categoryName: string;
    name: string;
  }
  
  export interface fullProduct {
    _id: string;
    images: any;
    
    slug: string;
    categoryName: string;
    name: string;
    description: string;
 
  }