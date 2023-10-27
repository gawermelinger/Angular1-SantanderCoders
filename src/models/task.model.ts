//ESTRUTURA DE UMA MODEL:

export class Task {
  title: string;
  description: string;
  price: number;
  date: Date;
  category: string;

  constructor(
    title: string = '',
    description: string = '',
    price: number = 0,
    date: Date = new Date(),
    category = ''
  ) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.date = date;
    this.category = category;
  }
}
//title: string = '' --> se eu colocar só title:string, ele só vai aceitar se tiver um valor. Colocando o = '' aceita também caso seja vazio

//type IStatus = 'todo' | 'inProgress' | 'done'
