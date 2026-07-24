import type { StaticImageData } from "next/image";

import tray from "@/public/images/tray.jpg";
import guest from "@/public/images/guest.jpg";

import back2 from "@/public/images/back2.jpg";
import back4 from "@/public/images/back4.jpg";
import booth2 from "@/public/images/booth2.jpg";
import neonWall from "@/public/images/neon-wall.jpg";

import bigmo from "@/public/images/bigmo.jpg";
import bigmo2 from "@/public/images/bigmo2.jpg";
import bigmo3 from "@/public/images/bigmo3.jpg";
import bigmo4 from "@/public/images/bigmo4.jpg";
import bigmo5 from "@/public/images/bigmo5.jpg";

import galery1 from "@/public/images/galery1.jpg";
import galery2 from "@/public/images/galery2.jpg";
import galery3 from "@/public/images/galery3.jpg";
import galery4 from "@/public/images/galery4.jpg";
import galery5 from "@/public/images/galery5.jpg";
import galery6 from "@/public/images/galery6.jpg";
import galery12 from "@/public/images/galery12.jpg";
import galery8 from "@/public/images/galery8.jpg";
import galery9 from "@/public/images/galery9.jpg";
import galery10 from "@/public/images/galery10.jpg";
import galery11 from "@/public/images/galery11.jpg";
import galery15 from "@/public/images/galery15.jpg";
import galery16 from "@/public/images/galery16.jpg";

import instagramGuest from "@/public/images/ig_bigmo_burgershack_DTF0AXFjKd6_002_image.jpg";

export type GalleryCategory =
  | "food"
  | "interior"
  | "people"
  | "brand"
  | "moments";

export type GalleryImage = {
  src: StaticImageData | string;
  alt: string;
  category: GalleryCategory;
  mediaType?: "image" | "video";
};

export const galleryImages: GalleryImage[] = [
  {
    src: tray,
    alt: "A BIG MO burger meal served on the signature tray",
    category: "food",
  },
  {
    src: guest,
    alt: "A guest enjoying a burger and drink inside BIG MO",
    category: "people",
  },
  {
    src: booth2,
    alt: "Red leather booth seating and warm wooden tables",
    category: "interior",
  },
  {
    src: back2,
    alt: "A BIG MO dining area with checkerboard floors and booth seating",
    category: "interior",
  },
  {
    src: "/videos/vid0.mp4",
    alt: "A BIG MO dining room video moment",
    category: "interior",
    mediaType: "video",
  },
  {
    src: neonWall,
    alt: "Neon lighting reflecting across the BIG MO interior",
    category: "interior",
  },
  {
    src: galery1,
    alt: "A moment captured inside the BIG MO burger shack",
    category: "moments",
  },
  {
    src: galery10,
    alt: "Food and atmosphere at BIG MO",
    category: "moments",
  },
  {
    src: "/videos/vid1.mp4",
    alt: "A BIG MO food and atmosphere video",
    category: "moments",
    mediaType: "video",
  },
  {
    src: bigmo2,
    alt: "BIG MO burger photographed up close",
    category: "food",
  },
  {
    src: galery12,
    alt: "A candid scene from the BIG MO dining room",
    category: "moments",
  },
  {
    src: bigmo3,
    alt: "Freshly prepared BIG MO food",
    category: "food",
  },
  {
    src: galery11,
    alt: "A late-night BIG MO restaurant moment",
    category: "moments",
  },
  {
    src: galery15,
    alt: "A fresh BIG MO gallery moment inside the restaurant",
    category: "moments",
  },
  {
    src: galery16,
    alt: "Another BIG MO interior and dining atmosphere shot",
    category: "interior",
  },
  {
    src: galery2,
    alt: "A view from inside the BIG MO restaurant",
    category: "moments",
  },
  {
    src: bigmo4,
    alt: "BIG MO burger meal photographed in detail",
    category: "food",
  },
  {
    src: instagramGuest,
    alt: "A BIG MO guest photographed inside the restaurant",
    category: "people",
  },
  {
    src: "/videos/vid2.mp4",
    alt: "A BIG MO restaurant experience video",
    category: "moments",
    mediaType: "video",
  },
  {
    src: galery3,
    alt: "BIG MO restaurant atmosphere and interior details",
    category: "moments",
  },
  {
    src: bigmo,
    alt: "BIG MO restaurant branding and atmosphere",
    category: "brand",
  },
  {
    src: back4,
    alt: "A wide interior view inside BIG MO Burger Shack",
    category: "interior",
  },
  {
    src: galery4,
    alt: "A candid moment from the BIG MO shack",
    category: "moments",
  },
  {
    src: bigmo5,
    alt: "A BIG MO burger and fries close-up",
    category: "food",
  },
  {
    src: galery5,
    alt: "Neon-lit atmosphere inside BIG MO",
    category: "moments",
  },
  {
    src: galery6,
    alt: "A restaurant detail photographed at BIG MO",
    category: "interior",
  },
  {
    src: "/videos/vid3.mp4",
    alt: "A BIG MO interior and service video",
    category: "people",
    mediaType: "video",
  },
  {
    src: galery8,
    alt: "The BIG MO dining experience",
    category: "moments",
  },
  {
    src: galery9,
    alt: "A warm restaurant scene inside BIG MO",
    category: "interior",
  },
];
