export class Dish implements IDishes {
    name: string;
    image: string;
    description: string;
    price: number;
    availibility: boolean;

    constructor(name: string, image: string, description: string, price: number, availibility: boolean) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.price = price;
        this.availibility = availibility;
    }
}

export interface IDishes {
    name: string;
    image: string;
    description: string;
    price: number;
    availibility: boolean;
}

//creating my Array of Objects
export let dishes = [{
    name: "Pizza Frutti di Mare",
    image: "https://image.brigitte.de/11607786/t/0Z/v3/w1440/r1/-/pizza-frutti-di-mare.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 15.50,
    availibility: true
},
{
    name: "Pizza Capricciosa",
    image: "https://www.italianstylecooking.net/wp-content/uploads/2022/01/Pizza-capricciosa-1200x900.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 14.70,
    availibility: true
},
{
    name: "Pizza al Tonno",
    image: "https://www.kuechengoetter.de/uploads/media/630x630/01/4221-pizza-al-tonno.jpg?v=1-0",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 16.20,
    availibility: false
},
{
    name: "Pizza Margerita",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 11.00,
    availibility: false
},
{
    name: "Pizza Prosciutto",
    image: "https://www.gutekueche.at/storage/media/recipe/107283/AT_546_Pizza-al-prosciutto_Depositphotos_250749500_XL.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 14.50,
    availibility: true
},
{
    name: "Penne al Gorgonzola",
    image: "https://primochef.it/wp-content/uploads/2022/07/SH_pizza_al_gorgonzola.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 17.90,
    availibility: false
},
{
    name: "Spaghetti Carbonara",
    image: "https://www.gutekueche.at/storage/media/recipe/101380/2127_Spaghetti-Carbonara-1.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 10.00,
    availibility: true
},
{
    name: "Tiramisu",
    image: "https://sallysbakingaddiction.com/wp-content/uploads/2019/06/homemade-tiramisu-2.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 5.10,
    availibility: true
}];
