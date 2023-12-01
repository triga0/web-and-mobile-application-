
import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/menu6.jpg";
import menu2 from "../assets/img/menu5.jpg";
import menu3 from "../assets/img/menu7.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        DRINKS MENU
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={menu1} title="Minute Maid " price="$16.99" />
        <DishesCard img={menu2} title=" Water " price="$18.99" />
        <DishesCard img={menu3} title="Sode" price="$14.99" />
       
      </div>
    </div>
  );
};

export default Menu;
