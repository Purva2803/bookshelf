import { v4 as uuid } from "uuid";

export const books = [
    {
        _id:uuid(),
        title:"2 states",
        image:"https://rukminim1.flixcart.com/image/1408/1408/book/5/2/0/2-states-original-imaeyg6ywfrehnhz.jpeg?q=90",
        author:"Chetan Bhagat",
        category:"currentlyreading",

    },
    {
        _id:uuid(),
        title:"The Alchemist",
        image:"https://th.bing.com/th/id/OIP.8JA93Vx9Q0edjQjopBAWSwHaLL?pid=ImgDet&w=1200&h=1812&rs=1",
        author:"Paulo Coelho",
        category:"currentlyreading",



    },
    {
        _id:uuid(),
        title:"The Monk who sold his Ferrari",
        image:"https://www.bing.com/th?id=OIP.qjgni7NS9FjR_cXppR1uTAHaL-&w=150&h=243&c=8&rs=1&qlt=30&o=6&pid=3.1&rm=2",
        author:"Robin Sharma",
        category:"read",
    },
    {
        _id:uuid(),

        title:"The 5 AM Club",
        image:"https://th.bing.com/th/id/OIP.2-H7vCYGEC3T9qsxcRVAxwHaLQ?pid=ImgDet&rs=1",
        author:"Robin Sharma",
        category:"read",
    },
    {
        _id:uuid(),
        title:"The 7 Habits of Highly Effective People",
        image:"https://th.bing.com/th/id/OIP.COHS4i2AnQC_FKWczziIIwHaLS?w=185&h=282&c=7&r=0&o=5&pid=1.7",
        author:"Stephen R. Covey",
        category:"wanttoread"

    },
    {
        _id:uuid(),
        title:"The Power of Habit",
        image:"https://th.bing.com/th/id/OIP.yZX9p3kUwD4v_dD853v5QQHaLb?w=185&h=285&c=7&r=0&o=5&pid=1.7",
        author:"Charles Duhigg",
        category:"wanttoread"

    },


]