import React from "react";
import Dash from "@/components/Dash";
import Image from "next/image";

const MeatFish = () => {
  return (
    <section className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our <span className="text-accent">Meat & Fish</span>
        </h2>
        <p className="text-gray-700 max-w-[900px]">
          Indulge in the rich and authentic flavors of Korean cuisine at
          <span className="text-accent text-xl"> Taste of Seoul</span>. Our menu
          is carefully crafted to bring you a delightful culinary experience,
          showcasing a wide range of traditional dishes made with love and
          expertise. From savory appetizers to satisfying main courses,
          we&lsquo;re here to take you on a journey through the vibrant tastes
          of Korea.
        </p>
        <div className="w-fit">
          <Dash />
        </div>
      </div>
      <div className="text-gray-600 body-font py-10">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/menu_recipe/meat_fish/bulgogi.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Bulgogi
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/menu_recipe/meat_fish/fish_cake_stirfried.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Fish Cake Stir Fried
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/menu_recipe/meat_fish/fried_chicken.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Fried Chicken
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/menu_recipe/meat_fish/fried_fish.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Fried Fish
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/menu_recipe/meat_fish/kimchi_friedrice.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Kimchi Fried Rice
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/menu_recipe/meat_fish/pigs_feet.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Pig&lsquo;s Feet
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/menu_recipe/meat_fish/samgaetang.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Samgaetang
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/menu_recipe/meat_fish/samgyupsal.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Samgyupsal
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/grid_1.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Bibimbap
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/grid_2.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Gimbap
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeatFish;
