import { nanoid } from "nanoid/non-secure";

// Data
// Women
import womenImgOne from "../assets/img/shop/women/shop-1.png";
import womenImgTwo from "../assets/img/shop/women/shop-2.png";
import womenImgThree from "../assets/img/shop/women/shop-3.png";
import womenImgFour from "../assets/img/shop/women/shop-4.png";
import womenImgFive from "../assets/img/shop/women/shop-5.png";
import womenImgSix from "../assets/img/shop/women/shop-6.png";
import womenImgSeven from "../assets/img/shop/women/shop-7.png";
import womenImgEight from "../assets/img/shop/women/shop-8.png";
import womenImgNine from "../assets/img/shop/women/shop-9.png";
//   Men
import menImgOne from "../assets/img/shop/men/shop-1.png";
import menImgTwo from "../assets/img/shop/men/shop-2.png";
import menImgThree from "../assets/img/shop/men/shop-3.png";
import menImgFour from "../assets/img/shop/men/shop-4.png";
import menImgFive from "../assets/img/shop/men/shop-5.png";
import menImgSix from "../assets/img/shop/men/shop-6.png";
import menImgSeven from "../assets/img/shop/men/shop-7.png";
import menImgEight from "../assets/img/shop/men/shop-8.png";
import menImgNine from "../assets/img/shop/men/shop-9.png";
// Unisex
import unisexImgOne from "../assets/img/shop/unisex/shop-1.png";
import unisexImgTwo from "../assets/img/shop/unisex/shop-2.png";
import unisexImgThree from "../assets/img/shop/unisex/shop-3.png";
import unisexImgFour from "../assets/img/shop/unisex/shop-4.png";
import unisexImgFive from "../assets/img/shop/unisex/shop-5.png";
import unisexImgSix from "../assets/img/shop/unisex/shop-6.png";
import unisexImgSeven from "../assets/img/shop/unisex/shop-7.png";
import unisexImgEight from "../assets/img/shop/unisex/shop-8.png";
import unisexImgNine from "../assets/img/shop/unisex/shop-9.png";
// Kids
import kidsImgOne from "../assets/img/shop/kids/shop-1.png";
import kidsImgTwo from "../assets/img/shop/kids/shop-2.png";
import kidsImgThree from "../assets/img/shop/kids/shop-3.png";
import kidsImgFour from "../assets/img/shop/kids/shop-4.png";
import kidsImgFive from "../assets/img/shop/kids/shop-5.png";
import kidsImgSix from "../assets/img/shop/kids/shop-6.png";
import kidsImgSeven from "../assets/img/shop/kids/shop-7.png";
import kidsImgEight from "../assets/img/shop/kids/shop-8.png";
import kidsImgNine from "../assets/img/shop/kids/shop-9.png";
// Sports Wear
import sportsImgOne from "../assets/img/shop/sports/shop-1.png";
import sportsImgTwo from "../assets/img/shop/sports/shop-2.png";
import sportsImgThree from "../assets/img/shop/sports/shop-3.png";
import sportsImgFour from "../assets/img/shop/sports/shop-4.png";
import sportsImgFive from "../assets/img/shop/sports/shop-5.png";
import sportsImgSix from "../assets/img/shop/sports/shop-6.png";
import sportsImgSeven from "../assets/img/shop/sports/shop-7.png";
import sportsImgEight from "../assets/img/shop/sports/shop-8.png";
import sportsImgNine from "../assets/img/shop/sports/shop-9.png";

const COMMON_SIZES = [
  "medium",
  "W26",
  "W32",
  "OSFA",
  "x small",
  "x large",
  "small",
  "large",
];
const COMMON_COLORS = ["#292A2D", "#F3ECE2", "#24426A", "#18574A", "#CBA13E"];

const rawProducts = [
  {
    name: "Nike Women’s Tracksuit",
    brand: "Nike",
    price: "95.50",
    rate: 5,
    soldOut: false,
    img: womenImgOne,
    category: "Women's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "tops",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "980.00",
    rate: 4,
    soldOut: false,
    img: womenImgTwo,
    category: "Women's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: womenImgThree,
    category: "Women's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Gucci",
    price: "30.500",
    rate: 5,
    soldOut: false,
    img: womenImgFour,
    category: "Women's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "200.00",
    rate: 5,
    soldOut: false,
    img: womenImgFive,
    category: "Women's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Nike",
    price: "100.00",
    rate: 4,
    soldOut: true,
    img: womenImgSix,
    category: "Women's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Nike Women’s Tracksuit",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
    brand: "Nike",
    price: "95.50",
    rate: 5,
    soldOut: false,
    img: womenImgSeven,
    category: "Women's Fashion",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "980.00",
    rate: 4,
    soldOut: false,
    img: womenImgEight,
    category: "Women's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: womenImgNine,
    category: "Women's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Nike Women’s Tracksuit",
    brand: "Nike",
    price: "95.50",
    rate: 5,
    soldOut: false,
    img: womenImgOne,
    category: "Women's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "980.00",
    rate: 4,
    soldOut: false,
    img: womenImgTwo,
    category: "Women's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: womenImgThree,
    category: "Women's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Gucci",
    price: "30.500",
    rate: 5,
    soldOut: false,
    img: womenImgFour,
    category: "Women's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "200.00",
    rate: 5,
    soldOut: false,
    img: womenImgFive,
    category: "Women's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Nike",
    price: "100.00",
    rate: 4,
    soldOut: true,
    img: womenImgSix,
    category: "Women's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Nike Women’s Tracksuit",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",

    brand: "Nike",
    price: "95.50",
    rate: 5,
    soldOut: false,
    img: womenImgSeven,
    category: "Women's Fashion",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "980.00",
    rate: 4,
    soldOut: false,
    img: womenImgEight,
    category: "Women's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: womenImgNine,
    category: "Women's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  //   Men
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: menImgOne,
    category: "Men's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: menImgTwo,
    category: "Men's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: menImgThree,
    category: "Men's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: menImgFour,
    category: "Men's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: menImgFive,
    category: "Men's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: menImgSix,
    category: "Men's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: menImgSeven,
    category: "Men's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: menImgEight,
    category: "Men's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: menImgNine,
    category: "Men's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: menImgOne,
    category: "Men's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: menImgTwo,
    category: "Men's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: menImgThree,
    category: "Men's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: menImgFour,
    category: "Men's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: menImgFive,
    category: "Men's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: menImgSix,
    category: "Men's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: menImgSeven,
    category: "Men's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: menImgEight,
    category: "Men's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: menImgNine,
    category: "Men's Fashion",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  // Unisex
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: unisexImgOne,
    category: "Unisex",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: unisexImgTwo,
    category: "Unisex",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: unisexImgThree,
    category: "Unisex",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: unisexImgFour,
    category: "Unisex",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: unisexImgFive,
    category: "Unisex",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: unisexImgSix,
    category: "Unisex",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: unisexImgSeven,
    category: "Unisex",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: unisexImgEight,
    category: "Unisex",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: unisexImgNine,
    category: "Unisex",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: unisexImgOne,
    category: "Unisex",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: unisexImgTwo,
    category: "Unisex",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: unisexImgThree,
    category: "Unisex",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: unisexImgFour,
    category: "Unisex",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: unisexImgFive,
    category: "Unisex",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: unisexImgSix,
    category: "Unisex",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: unisexImgSeven,
    category: "Unisex",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: unisexImgEight,
    category: "Unisex",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: unisexImgNine,
    category: "Unisex",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  // Kids
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: kidsImgOne,
    category: "Kids",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: kidsImgTwo,
    category: "Kids",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: kidsImgThree,
    category: "Kids",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: kidsImgFour,
    category: "Kids",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: kidsImgFive,
    category: "Kids",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: kidsImgSix,
    category: "Kids",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: kidsImgSeven,
    category: "Kids",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: kidsImgEight,
    category: "Kids",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: kidsImgNine,
    category: "Kids",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: kidsImgOne,
    category: "Kids",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: kidsImgTwo,
    category: "Kids",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: kidsImgThree,
    category: "Kids",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: kidsImgFour,
    category: "Kids",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: kidsImgFive,
    category: "Kids",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: kidsImgSix,
    category: "Kids",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: kidsImgSeven,
    category: "Kids",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: kidsImgEight,
    category: "Kids",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: kidsImgNine,
    category: "Kids",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  // Sports Wear
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: sportsImgOne,
    category: "Sports Wear",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: sportsImgTwo,
    category: "Sports Wear",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: sportsImgThree,
    category: "Sports Wear",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: sportsImgFour,
    category: "Sports Wear",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: sportsImgFive,
    category: "Sports Wear",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: sportsImgSix,
    category: "Sports Wear",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: sportsImgSeven,
    category: "Sports Wear",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: sportsImgEight,
    category: "Sports Wear",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: sportsImgNine,
    category: "Sports Wear",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: sportsImgOne,
    category: "Sports Wear",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: sportsImgTwo,
    category: "Sports Wear",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: sportsImgThree,
    category: "Sports Wear",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: sportsImgFour,
    category: "Sports Wear",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: sportsImgFive,
    category: "Sports Wear",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: sportsImgSix,
    category: "Sports Wear",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: sportsImgSeven,
    category: "Sports Wear",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: sportsImgEight,
    category: "Sports Wear",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
  {
    name: "Roller Rabbit",
    brand: "Zara",
    price: "300.50",
    rate: 4,
    soldOut: false,
    img: sportsImgNine,
    category: "Sports Wear",
    size: COMMON_SIZES,
    Color: COMMON_COLORS,
    department: "null",
  },
];
export const products = rawProducts.map((product) => ({
  ...product,
  id: nanoid(),
}));
// Data

import i18n from "../i18n";

export const useLangStore = create((set) => ({
  lang: i18n.language || "en",
  toggleLang: () =>
    set((state) => {
      const newLang = state.lang.includes("en") ? "ar" : "en";
      i18n.changeLanguage(newLang);

      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = newLang;

      return { lang: newLang };
    }),
}));

import { create } from "zustand";

export const useLinks = create(() => ({
  Links: [
    {
      id: 1,
      name: "Orders",
      path: "orders",
    },
    {
      id: 2,
      name: "Wishlist",
      path: "/account",
    },
    {
      id: 3,
      name: "Address",
      path: "address",
    },
    {
      id: 4,
      name: "Password",
      path: "password",
    },
    {
      id: 5,
      name: "Account Detail",
      path: "details",
    },
    {
      id: 6,
      name: "Logout",
      path: "/",
    },
  ],
}));

export const useActiveInfo = create((set) => ({
  activeInfo: {
    id: 2,
    name: "Wishlist",
    path: "",
  },

  setActiveInfo: (newActivInfo) => set({ activeInfo: newActivInfo }),
}));

export const useFilterStore = create((set) => ({
  appliedFilters: {
    brands: [],
    departments: [],
    categories: [],
    sizes: [],
    color: "",
    priceRange: 0,
  },
  setFilters: (newFilters) => set({ appliedFilters: newFilters }),
  resetFilters: () => set({ appliedFilters: {} }),
}));

export const useWishlist = create((set) => ({
  wishlist: [],

  setWishListProduct: (product) =>
    set((state) =>
      state.wishlist.some((item) => item.Id === product.id)
        ? state
        : { wishlist: [...state.wishlist, product] },
    ),
  removeWishlistProduct: (productID) =>
    set((state) => ({
      wishlist: state.wishlist.filter((el) => el.id != productID),
    })),
}));

export const useCurrentProduct = create((set) => ({
  currentProduct: {},
  setProduct: (newProduct) => set({ currentProduct: newProduct }),
}));

export const useReviews = create((set) => ({
  reviews: [
    {
      id: 1,
      name: "Emily Davis",
      date: "1 WEEK AGO",
      comment:
        "This company always goes above and beyond to satisfy their customers.",
      rating: 4,
    },
    {
      id: 2,
      name: "Daniel Smith",
      date: "2 MONTH AGO",
      comment: "I can't believe how affordable and high-quality this item is!",
      rating: 4,
    },
    {
      id: 3,
      name: "Benjamin Clark",
      date: "23 APRIL",
      comment: "These guys know their stuff, and it shows in their products.",
      rating: 4,
    },
    {
      id: 4,
      name: "Sarah Parker",
      date: "10 MAY",
      comment: "Absolutely love the fit and the material is so soft.",
      rating: 5,
    },
    {
      id: 5,
      name: "John Doe",
      date: "12 JUNE",
      comment: "Great quality for the price. Will buy again.",
      rating: 4,
    },
    {
      id: 6,
      name: "Anna Lee",
      date: "5 JULY",
      comment: "Customer service was very helpful when I needed to exchange.",
      rating: 5,
    },
    {
      id: 7,
      name: "Michael Brown",
      date: "18 AUGUST",
      comment: "Good, but shipping took a bit longer than expected.",
      rating: 3,
    },
    {
      id: 8,
      name: "Emma Wilson",
      date: "2 SEPTEMBER",
      comment: "The design is flawless! Highly recommend.",
      rating: 5,
    },
  ],

  openReview: false,

  setOpenReview: (value) => set({ openReview: value }),

  setReview: (newReview) =>
    set((state) => ({ reviews: [...state.reviews, newReview] })),
}));

export const useCart = create((set, get) => ({
  cart: [],

  setCartProduct: (product) =>
    set((state) => {
      const isExist = state.cart.find((item) => item.id === product.id);

      if (isExist) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
          ),
        };
      }

      return {
        cart: [...state.cart, { ...product, qty: 1 }],
      };
    }),

  removeCartProduct: (productID) =>
    set((state) => ({
      cart: state.cart.filter((el) => el.id !== productID),
    })),

  increaseQty: (productID) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productID ? { ...item, qty: item.qty + 1 } : item,
      ),
    })),

  decreaseQty: (productID) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === productID ? { ...item, qty: item.qty - 1 } : item,
        )
        .filter((item) => item.qty > 0),
    })),

  clearCart: () => set({ cart: [] }),

  getCartTotal: () => {
    const { cart } = get();

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    const tax = subtotal * 0.14;
    const total = subtotal + tax;

    return {
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      total: total.toFixed(2),
    };
  },

  ordersHistory: [],
  confirmOrder: (customerValues) => {
    const { cart, getCartTotal } = get();
    const { total } = getCartTotal();

    const newOrder = {
      orderId: `#ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      status: "Processing",
      items: [...cart],
      totalPrice: total,
      customerDetails: customerValues,
    };

    set((state) => ({
      ordersHistory: [newOrder, ...state.ordersHistory],
    }));
  },
}));

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoggedIn: !!localStorage.getItem("user"),

  login: (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    set({ user: userData, isLoggedIn: true });
  },

  logout: () => {
    localStorage.removeItem("user");
    set({ user: null, isLoggedIn: false });
  },

  updateUser: (newDetails) =>
    set((state) => {
      const updatedUser = { ...state.user, ...newDetails };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return { user: updatedUser };
    }),
}));

export const useOrderProgress = create((set) => ({
  orderProgress: false,

  setOrderProgress: (newValue) => set({ orderProgress: newValue }),

  resetOrderProgress: () => set({ orderProgress: false }),
}));

export const useCurrentOrder = create((set) => ({
  selectedOrder: null,

  setSelectedOrder: (order) => set({ selectedOrder: order }),

  clearSelectedOrder: () => set({ selectedOrder: null }),
}));
