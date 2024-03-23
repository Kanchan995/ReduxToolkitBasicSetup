export interface Root{
id:number,
status:"idle"
root:Array<RootObject>
}


export interface RootObject {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
interface Rating {
  rate: number;
  count: number;
}