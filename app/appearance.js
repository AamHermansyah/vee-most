import bg_1 from "../assets/bg_1.jpeg";
import bg_5 from "../assets/bg_5.png";
import bg_6 from "../assets/bg_6.png";
import bg_7 from "../assets/bg_7.png";
import bg_8 from "../assets/bg_8.png";
import bg_9 from "../assets/bg_9.png";
import bg_2 from "../assets/bg2.png";
import bg_3 from "../assets/bg3.png";
import bg_4 from "../assets/bg4.png";

const appearance = [
  {
    id: 1,
    isActive: true,
    isVisibleBackground: true,
    background: bg_1,
    title: "The smart store for digital transformation",
    desc: "Transform your business with our products and services.",
  },
  {
    id: 2,
    isActive: false,
    isVisibleBackground: true,
    background: bg_2,
    title: "The smart store for digital transformation",
    desc: "Transform your business with our products and services.",
    position: "bg-top",
  },
  {
    id: 3,
    isActive: false,
    isVisibleBackground: true,
    background: bg_3,
    title: "The smart store for digital transformation",
    desc: "Transform your business with our products and services.",
    position: "bg-top",
  },
  {
    id: 4,
    isActive: false,
    imageUrl: bg_4,
    title: "Accelerate your business",
    desc: "Shop Next-Generation and Legacy servers.\
    Select Servers and Specifications that meet your business needs or have us do the work for you.",
  },
  {
    id: 5,
    isActive: false,
    imageUrl: bg_5,
    title: "Secure your business",
    desc: "Buy new and refurbished Next Generation Firewalls to Secure your business operations, network and users.",
    isLeft: true,
  },
  {
    id: 6,
    isActive: false,
    imageUrl: bg_6,
    title: "Connect with confidence ",
    desc: "Empower your network with reliable switches.",
  },
  {
    id: 7,
    isActive: false,
    imageUrl: bg_7,
    title: "Go wireless",
    desc: "Stay connected, stay productive - experience seamless wireless with our access points.",
    isLeft: true,
  },
  {
    id: 8,
    isActive: false,
    imageUrl: bg_8,
    title: "Work & play",
    desc: "Stay productive and kick back with desktop computers and laptops that meet your job and fun descriptions.",
  },
  {
    id: 9,
    isActive: false,
    imageUrl: bg_9,
    title: "Unified communications",
    desc: "Unified communications and collaboration endpoints at your fingertips",
    isLeft: true,
  },
];

export default appearance;
