import Button from "../layouts/Button";


const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/Skyline.png')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h4 className=" text-[black] font-semibold text-6xl">
          Elevate Your Inner Foodie with Every Bite.
        </h4>
        <p className=" text-[black]">
          <h1>Finger Licking Good</h1>
        </p>
        <div className=" lg:pl-44">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;
