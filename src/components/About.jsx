
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          WHY WE ARE THE BEST IN THE BUSINESS 
        </h1>
        <p>
        KFC, a subsidiary of Yum! Brands, Inc. (NYSE: YUM.), is a global chicken restaurant brand with a rich, decades-long history of success and innovation. It all started with one cook, Colonel Harland Sanders, who created a finger lickin’ good recipe more than 80 years ago, a list of secret herbs and spices scratched out on the back of the door to his kitchen. Today we still follow his formula for success, with real cooks breading and freshly preparing our delicious chicken by hand in more than 26,000 restaurants in over 150 countries and territories around the world.
        </p>
        <p>
        © 2023 Yum! Ltd. All rights reserved. The KFC name, logos and similar signs are registered trademarks of Yum! Ltd.
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
