import {
  Header,
  Footer,
  FeaturesCard,
  PlanCard,
  Button,
  ReviewCard,
} from "./components/index";
import MainImage from "./assets/Frame 3.png";
import { interactiveFeatures, plans, Reviews } from "./data/index";
function App() {
  return (
    <div className="px-[10rem] ">
      <Header />
      <section className="flex mt-[7rem] items-center">
        <div>
          <h1 className="text-[3rem] font-bold leading-[3rem]">
            Learn how to launch a successful podcast
          </h1>
          <p className="w-[27.0625rem] text-[1rem] mt-[1.5rem] mb-[5.1rem]">
            Lorem Ipsum is simply dummy text of the printing and typesetting in
            ustry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s
          </p>
          <Button label="Sign up Now" />
        </div>
        <div>
          <img src={MainImage} alt="" />
        </div>
      </section>
      <section className="flex space-x-[7rem] mt-[8rem]">
        <div className="grid grid-cols-2 gap-4 ">
          {interactiveFeatures?.map((item, index: any) => (
            <div
              key={index}
              className={`${index == 1 || index == 3 ? "mt-4" : ""}`}
            >
              <FeaturesCard
                heading={item?.heading}
                description={item?.description}
              />
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-[3rem] font-bold mb-[1.5rem]">
            About the Course
          </h1>
          <p className="text-[0.875rem] w-[22.9375rem] mb-[3rem]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unkno
          </p>
          <Button label="Explore Now" />
        </div>
      </section>
      <section className="mt-[9rem]">
        <div className="mx-auto mb-[155px]">
          <h1 className="text-[2rem] font-bold mx-auto w-max">
            Choose your plan
          </h1>
          <p className="text-[14px]  w-[455px] mx-auto text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <div className="flex space-x-[90px]">
          {plans.map((item, index) => (
            <div key={index}>
              <PlanCard
                heading={item?.heading}
                description={item?.description}
                price={item?.price}
                features={item?.features}
                buttonTitle={item?.buttonTitle}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="mt-[95px] overflow-hidden">
        <div className="space-y-[24px]">
          <h1 className="text-[40px] font-bold">Review from customers</h1>
          <p className="w-[399px] text-[12px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry
          </p>
        </div>
        <div className="flex gap-8 mt-[32px]">
          {Reviews.map((item, index) => (
            <ReviewCard
              name={item?.name}
              company={item?.company}
              description={item?.description}
              star={item?.star}
              key={index}
            />
          ))}
        </div>
      </section>
      <section className=" mx-auto grid place-content-center text-center mt-[8rem] ">
        <h1 className="mx-auto w-max text-[2rem] font-bold mb-[1.5rem]">
          We have what you’re looking for
        </h1>
        <p className="text-[0.75rem] w-[37.25rem] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type
        </p>
        <div className="w-max  mx-auto mt-[5rem]">
          <Button label="Get Started Now" />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
