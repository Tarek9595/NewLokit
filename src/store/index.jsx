// import { nanoid } from "nanoid/non-secure";

// // Data
// // Women
// import womenImgOne from "../assets/img/shop/women/shop-1.png";
// import womenImgTwo from "../assets/img/shop/women/shop-2.png";
// import womenImgThree from "../assets/img/shop/women/shop-3.png";
// import womenImgFour from "../assets/img/shop/women/shop-4.png";
// import womenImgFive from "../assets/img/shop/women/shop-5.png";
// import womenImgSix from "../assets/img/shop/women/shop-6.png";
// import womenImgSeven from "../assets/img/shop/women/shop-7.png";
// import womenImgEight from "../assets/img/shop/women/shop-8.png";
// import womenImgNine from "../assets/img/shop/women/shop-9.png";
// //   Men
// import menImgOne from "../assets/img/shop/men/shop-1.png";
// import menImgTwo from "../assets/img/shop/men/shop-2.png";
// import menImgThree from "../assets/img/shop/men/shop-3.png";
// import menImgFour from "../assets/img/shop/men/shop-4.png";
// import menImgFive from "../assets/img/shop/men/shop-5.png";
// import menImgSix from "../assets/img/shop/men/shop-6.png";
// import menImgSeven from "../assets/img/shop/men/shop-7.png";
// import menImgEight from "../assets/img/shop/men/shop-8.png";
// import menImgNine from "../assets/img/shop/men/shop-9.png";
// // Unisex
// import unisexImgOne from "../assets/img/shop/unisex/shop-1.png";
// import unisexImgTwo from "../assets/img/shop/unisex/shop-2.png";
// import unisexImgThree from "../assets/img/shop/unisex/shop-3.png";
// import unisexImgFour from "../assets/img/shop/unisex/shop-4.png";
// import unisexImgFive from "../assets/img/shop/unisex/shop-5.png";
// import unisexImgSix from "../assets/img/shop/unisex/shop-6.png";
// import unisexImgSeven from "../assets/img/shop/unisex/shop-7.png";
// import unisexImgEight from "../assets/img/shop/unisex/shop-8.png";
// import unisexImgNine from "../assets/img/shop/unisex/shop-9.png";
// // Kids
// import kidsImgOne from "../assets/img/shop/kids/shop-1.png";
// import kidsImgTwo from "../assets/img/shop/kids/shop-2.png";
// import kidsImgThree from "../assets/img/shop/kids/shop-3.png";
// import kidsImgFour from "../assets/img/shop/kids/shop-4.png";
// import kidsImgFive from "../assets/img/shop/kids/shop-5.png";
// import kidsImgSix from "../assets/img/shop/kids/shop-6.png";
// import kidsImgSeven from "../assets/img/shop/kids/shop-7.png";
// import kidsImgEight from "../assets/img/shop/kids/shop-8.png";
// import kidsImgNine from "../assets/img/shop/kids/shop-9.png";
// // Sports Wear
// import sportsImgOne from "../assets/img/shop/sports/shop-1.png";
// import sportsImgTwo from "../assets/img/shop/sports/shop-2.png";
// import sportsImgThree from "../assets/img/shop/sports/shop-3.png";
// import sportsImgFour from "../assets/img/shop/sports/shop-4.png";
// import sportsImgFive from "../assets/img/shop/sports/shop-5.png";
// import sportsImgSix from "../assets/img/shop/sports/shop-6.png";
// import sportsImgSeven from "../assets/img/shop/sports/shop-7.png";
// import sportsImgEight from "../assets/img/shop/sports/shop-8.png";
// import sportsImgNine from "../assets/img/shop/sports/shop-9.png";

// const COMMON_SIZES = [
//   "medium",
//   "W26",
//   "W32",
//   "OSFA",
//   "x small",
//   "x large",
//   "small",
//   "large",
// ];
// const COMMON_COLORS = ["#292A2D", "#F3ECE2", "#24426A", "#18574A", "#CBA13E"];

// const rawProducts = [
//   {
//     brand: "Nike",
//     category: "Women's Fashion",
//     img: womenImgOne,
//     price: "95.50",
//     name: "Nike Women’s Tracksuit",
//     rate: 5,
//     soldOut: false,
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "tops",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "980.00",
//     rate: 4,
//     soldOut: false,
//     img: womenImgTwo,
//     category: "Women's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: womenImgThree,
//     category: "Women's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Gucci",
//     price: "30.500",
//     rate: 5,
//     soldOut: false,
//     img: womenImgFour,
//     category: "Women's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "200.00",
//     rate: 5,
//     soldOut: false,
//     img: womenImgFive,
//     category: "Women's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Nike",
//     price: "100.00",
//     rate: 4,
//     soldOut: true,
//     img: womenImgSix,
//     category: "Women's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Nike Women’s Tracksuit",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//     brand: "Nike",
//     price: "95.50",
//     rate: 5,
//     soldOut: false,
//     img: womenImgSeven,
//     category: "Women's Fashion",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "980.00",
//     rate: 4,
//     soldOut: false,
//     img: womenImgEight,
//     category: "Women's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: womenImgNine,
//     category: "Women's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Nike Women’s Tracksuit",
//     brand: "Nike",
//     price: "95.50",
//     rate: 5,
//     soldOut: false,
//     img: womenImgOne,
//     category: "Women's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "980.00",
//     rate: 4,
//     soldOut: false,
//     img: womenImgTwo,
//     category: "Women's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: womenImgThree,
//     category: "Women's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Gucci",
//     price: "30.500",
//     rate: 5,
//     soldOut: false,
//     img: womenImgFour,
//     category: "Women's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "200.00",
//     rate: 5,
//     soldOut: false,
//     img: womenImgFive,
//     category: "Women's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Nike",
//     price: "100.00",
//     rate: 4,
//     soldOut: true,
//     img: womenImgSix,
//     category: "Women's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Nike Women’s Tracksuit",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",

//     brand: "Nike",
//     price: "95.50",
//     rate: 5,
//     soldOut: false,
//     img: womenImgSeven,
//     category: "Women's Fashion",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "980.00",
//     rate: 4,
//     soldOut: false,
//     img: womenImgEight,
//     category: "Women's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: womenImgNine,
//     category: "Women's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   //   Men
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: menImgOne,
//     category: "Men's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: menImgTwo,
//     category: "Men's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: menImgThree,
//     category: "Men's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: menImgFour,
//     category: "Men's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: menImgFive,
//     category: "Men's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: menImgSix,
//     category: "Men's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: menImgSeven,
//     category: "Men's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: menImgEight,
//     category: "Men's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: menImgNine,
//     category: "Men's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: menImgOne,
//     category: "Men's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: menImgTwo,
//     category: "Men's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: menImgThree,
//     category: "Men's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: menImgFour,
//     category: "Men's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: menImgFive,
//     category: "Men's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: menImgSix,
//     category: "Men's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: menImgSeven,
//     category: "Men's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: menImgEight,
//     category: "Men's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: menImgNine,
//     category: "Men's Fashion",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   // Unisex
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: unisexImgOne,
//     category: "Unisex",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: unisexImgTwo,
//     category: "Unisex",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: unisexImgThree,
//     category: "Unisex",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: unisexImgFour,
//     category: "Unisex",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: unisexImgFive,
//     category: "Unisex",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: unisexImgSix,
//     category: "Unisex",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: unisexImgSeven,
//     category: "Unisex",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: unisexImgEight,
//     category: "Unisex",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: unisexImgNine,
//     category: "Unisex",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: unisexImgOne,
//     category: "Unisex",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: unisexImgTwo,
//     category: "Unisex",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: unisexImgThree,
//     category: "Unisex",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: unisexImgFour,
//     category: "Unisex",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: unisexImgFive,
//     category: "Unisex",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: unisexImgSix,
//     category: "Unisex",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: unisexImgSeven,
//     category: "Unisex",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: unisexImgEight,
//     category: "Unisex",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: unisexImgNine,
//     category: "Unisex",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   // Kids
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: kidsImgOne,
//     category: "Kids",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: kidsImgTwo,
//     category: "Kids",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: kidsImgThree,
//     category: "Kids",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: kidsImgFour,
//     category: "Kids",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: kidsImgFive,
//     category: "Kids",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: kidsImgSix,
//     category: "Kids",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: kidsImgSeven,
//     category: "Kids",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: kidsImgEight,
//     category: "Kids",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: kidsImgNine,
//     category: "Kids",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: kidsImgOne,
//     category: "Kids",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: kidsImgTwo,
//     category: "Kids",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: kidsImgThree,
//     category: "Kids",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: kidsImgFour,
//     category: "Kids",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: kidsImgFive,
//     category: "Kids",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: kidsImgSix,
//     category: "Kids",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: kidsImgSeven,
//     category: "Kids",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: kidsImgEight,
//     category: "Kids",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: kidsImgNine,
//     category: "Kids",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   // Sports Wear
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: sportsImgOne,
//     category: "Sports Wear",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: sportsImgTwo,
//     category: "Sports Wear",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: sportsImgThree,
//     category: "Sports Wear",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: sportsImgFour,
//     category: "Sports Wear",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: sportsImgFive,
//     category: "Sports Wear",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: sportsImgSix,
//     category: "Sports Wear",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: sportsImgSeven,
//     category: "Sports Wear",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: sportsImgEight,
//     category: "Sports Wear",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: sportsImgNine,
//     category: "Sports Wear",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: sportsImgOne,
//     category: "Sports Wear",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: sportsImgTwo,
//     category: "Sports Wear",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: sportsImgThree,
//     category: "Sports Wear",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: sportsImgFour,
//     category: "Sports Wear",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: sportsImgFive,
//     category: "Sports Wear",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: sportsImgSix,
//     category: "Sports Wear",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: sportsImgSeven,
//     category: "Sports Wear",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: sportsImgEight,
//     category: "Sports Wear",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
//   {
//     name: "Roller Rabbit",
//     brand: "Zara",
//     price: "300.50",
//     rate: 4,
//     soldOut: false,
//     img: sportsImgNine,
//     category: "Sports Wear",
//     size: COMMON_SIZES,
//     Color: COMMON_COLORS,
//     department: "null",
//   },
// ];
// export const products = rawProducts.map((product) => ({
//   ...product,
//   id: nanoid(),
// }));
// Data
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";
import i18n from "../i18n";
export const domain = "https://lokit-production.up.railway.app/";

const formatProductsVariants = (variantsList, rawProductsList) => {
  const grouped = variantsList.reduce((acc, current) => {
    const name = current.productName;
    if (!acc[name]) {
      acc[name] = {
        id: current.id,
        productName: name,
        price: current.price,
        colorsSet: new Set(),
        sizesSet: new Set(),
      };
    }
    if (current.colorName) acc[name].colorsSet.add(current.colorName);
    if (current.sizeName) acc[name].sizesSet.add(current.sizeName);
    return acc;
  }, {});

  return Object.values(grouped).map((product) => {
    const matchingProduct = rawProductsList.find(
      (p) => p.name === product.productName,
    );
    return {
      id: matchingProduct ? matchingProduct.id : product.id,
      productName: product.productName,
      price: product.price,
      colors: Array.from(product.colorsSet),
      sizes: Array.from(product.sizesSet),
      brandName: matchingProduct ? matchingProduct.brandName : "",
      categoryName: matchingProduct ? matchingProduct.categoryName : "",
      departmentName: matchingProduct ? matchingProduct.departmentName : "",
      images: [],
      rate: 5, // قيمة افتراضية من عندنا بما إنها مش جاية من الباك إند
      soldOut: false, // قيمة افتراضية
    };
  });
};

// --- Store المنتجات الجديد والديناميكي ---
export const useProductStore = create((set) => ({
  allProducts: [],
  isLoading: false,
  error: null,

  // الأكشن السحري اللي بيجيب كل حاجة ويدمجها في الـ Store
  fetchAllProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      const urlVariants = domain + "variants";
      const urlProducts = domain + "product";

      // 1. جلب البيانات بالتوازي
      const [variantsRes, productsRes] = await Promise.all([
        axios.get(urlVariants),
        axios.get(urlProducts),
      ]);

      // 2. دمج الـ variants مع الـ products الأساسية
      const cleanProducts = formatProductsVariants(
        variantsRes.data,
        productsRes.data,
      );

      // 3. جلب الصور لكل منتج تم تجميعه
      const imageRequests = cleanProducts.map((product) =>
        axios
          .get(`${domain}product-images/product/${product.id}`)
          .then((res) => ({ productId: product.id, images: res.data }))
          .catch(() => ({ productId: product.id, images: [] })),
      );

      const imagesResults = await Promise.all(imageRequests);

      // 4. دمج الصور مع المنتجات المهيكلة
      const finalProductsWithImages = cleanProducts.map((product) => {
        const productImagesData = imagesResults.find(
          (img) => img.productId === product.id,
        );
        return {
          ...product,
          images: productImagesData
            ? productImagesData.images.map((img) => img.imageUrl)
            : [],
        };
      });

      // حفظ الداتا النهائية في الـ State
      set({ allProducts: finalProductsWithImages, isLoading: false });
    } catch (err) {
      console.error("Error in Main Pipeline:", err);
      set({ error: err.message, isLoading: false });
    }
  },
}));

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
    brandName: [],
    departmentName: [],
    categoryName: [],
    sizes: [],
    colors: [],
    price: 2500,
  },
  setFilters: (newFilters) => set({ appliedFilters: newFilters }),
  resetFilters: () =>
    set({
      appliedFilters: {
        brandName: [],
        departmentName: [],
        categoryName: [],
        sizes: [],
        colors: [],
        price: 2500,
      },
    }),
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
  ],

  openReview: false,

  setOpenReview: (value) => set({ openReview: value }),

  setReview: (newReview) =>
    set((state) => ({ reviews: [...state.reviews, newReview] })),
}));

export const useShare = create((set) => ({
  openShare: false,
  setOpenShare: (value) => set({ openShare: value }),
}));

export const useUpload = create((set) => ({
  openUpload: false,
  setOpenUpload: (value) => set({ openUpload: value }),
}));

export const useCurrentProduct = create(
  persist(
    (set) => ({
      currentProduct: {},
      setProduct: (newProduct) => set({ currentProduct: newProduct }),
    }),
    {
      name: "currentProduct",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const useCart = create(
  persist(
    (set, get) => ({
      cart: [],
      ordersHistory: [],

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

        const subtotal = cart.reduce(
          (acc, item) => acc + item.price * item.qty,
          0,
        );

        const tax = subtotal * 0.14;
        const total = subtotal + tax;

        return {
          subtotal: subtotal.toFixed(2),
          tax: tax.toFixed(2),
          total: total.toFixed(2),
        };
      },

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
          items: [...cart],
          totalPrice: total,
          customerDetails: customerValues,
        };

        set((state) => ({
          ordersHistory: [newOrder, ...state.ordersHistory],
        }));
      },

      clearOrderHistory: () => set({ ordersHistory: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
      // partialize: (state) => {
      //   const hasUser = !!localStorage.getItem("user");
      //   if (hasUser) {
      //     return { cart: state.cart, ordersHistory: state.ordersHistory };
      //   }
      //   return { cart: [] };
      // },

      partialize: (state) => ({
        cart: state.cart,
        ordersHistory: state.ordersHistory,
      }),
    },
  ),
);

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

export const useStage = create((set) => ({
  stage: 0,
  setStage: (value) => set({ stage: value }),
}));

// After sync with back end

export const userLoginInfo = create(
  persist(
    (set, get) => ({
      loginInfo: null,
      isLoggedIn: false,
      forgetPasswordEmail: "",
      forgetPasswordCode: "",

      login: (userData) => set({ loginInfo: userData, isLoggedIn: true }),
      logout: () =>
        set({
          loginInfo: null,
          isLoggedIn: false,
          forgetPasswordEmail: "",
          forgetPasswordCode: "",
        }),
      updateUser: (newDetails) =>
        set((state) => ({
          loginInfo: state.loginInfo
            ? { ...state.loginInfo, ...newDetails }
            : null,
        })),

      sendResetCode: async (email) => {
        try {
          let url = domain + "auth/forgot-password";
          const res = await axios.post(
            url,
            { email },
            {
              headers: {
                "Content-Type": "application/json",
              },
            },
          );
          set({ forgetPasswordEmail: email });
          return {
            success: true,
            message: res.data?.message || "Code sent successfully!",
          };
        } catch (err) {
          console.error("Forgot password error:", err);

          const errorMsg =
            err.response?.data?.message ||
            "Server Error (500). Please try again later or contact support.";

          return { success: false, message: errorMsg };
        }
      },

      verifyResetCode: async (code) => {
        try {
          let url = domain + "auth/verify-password-code";
          const email = get().forgetPasswordEmail;

          const res = await axios.post(url, { email, code });
          set({ forgetPasswordCode: code });
          return {
            success: true,
            message: res.data?.message || "Code verified successfully!",
          };
        } catch (err) {
          const errorMsg =
            err.response?.data?.message || "Invalid or expired code.";
          return { success: false, message: errorMsg };
        }
      },

      resetPassword: async (newPassword) => {
        try {
          let url = domain + "auth/reset-password";
          const email = get().forgetPasswordEmail;
          const code = get().forgetPasswordCode;

          const res = await axios.post(url, { email, code, newPassword });

          set({ forgetPasswordEmail: "", forgetPasswordCode: "" });
          return {
            success: true,
            message: res.data?.message || "Password reset successfully!",
          };
        } catch (err) {
          const errorMsg =
            err.response?.data?.message || "Failed to reset password.";
          return { success: false, message: errorMsg };
        }
      },
    }),
    {
      name: "userLoginInfo",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const useAccountInfo = create(
  persist(
    (set) => ({
      accountInfo: null,
      isLoadingAccount: false,

      fetchProfile: async () => {
        const token = userLoginInfo.getState().loginInfo?.token;
        if (!token) return;

        set({ isLoadingAccount: true });
        try {
          let url = domain + "account";
          const res = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          set({ accountInfo: res.data, isLoadingAccount: false }); // , isLoadingAccount: false
        } catch (err) {
          console.error("Error fetching account info:", err);
          set({ isLoadingAccount: false });
        }
      },

      updateProfile: async (updatedData) => {
        const token = userLoginInfo.getState().loginInfo?.token;
        if (!token) return false;

        try {
          let url = domain + "account";
          const res = await axios.put(url, updatedData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          set({ accountInfo: res.data });
          return true;
        } catch (err) {
          console.error("Error updating profile:", err);
          return false;
        }
      },

      clearAccountInfo: () => set({ accountInfo: null }),

      changePassword: async (passwordData) => {
        const token = userLoginInfo.getState().loginInfo?.token;
        if (!token)
          return {
            success: false,
            message: "No token found, please login again",
          };

        try {
          let url = domain + "account/password";

          const res = await axios.patch(url, passwordData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });

          return { success: true, data: res.data };
        } catch (err) {
          console.error("Error changing password:", err);
          const errorMsg =
            err.response?.data?.message ||
            "Server configuration error (CORS). Please contact support.";
          return { success: false, message: errorMsg };
        }
      },
    }),
    {
      name: "account-info-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
