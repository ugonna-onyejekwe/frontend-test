import { BsArrowRight } from "react-icons/bs";
import { Hero } from "./components/hero_section";
import "./styles.scss";
import { Polygon, Polygon2, Triangle_icon } from "../../assets/icons";
import { M_A_I } from "./components/M_A_I";
import { A_I } from "./components/A_I";
import { Swiper_con } from "./components/swiper_con";
import { heroImage1 } from "../../assets/images";
import { TbClock } from "react-icons/tb";
import { IoPlay } from "react-icons/io5";
import { Swiper_con2 } from "./components/swiper_con2";
import { studios } from "../../components/data";

export const Home = () => {
  return (
    <div className="home_page">
      <section className="hero_section ">
        <Hero />
      </section>

      <section className="container quote">
        <div className="wrapper">
          <p>
            "Nigeria and Africa has a massive network effect that have not be
            fully utilized. With Nigerians/Africans in every country and
            territory of the world, we can scale an African business to 100+
            countries in few weeks"
          </p>
          <h5>Daniel Izeghs Oratokhai</h5>
          <h6>Managing Partner at SINC Partners Ltd</h6>
        </div>
      </section>

      <section className="section3 container">
        <div className="header">
          <h2>Network of builders helping startup scale</h2>
        </div>
        <div className="wrapper">
          <div className="box">
            <h3>
              Work with Service Incubators to expedite your time-to-market
            </h3>
            <p>
              Collaborate with our meticulously chosen service partners, each
              with a vested interest, ensuring a shared commitment to success in
              the game of venture building. For 7.5% equity, you get a product
              manager, product designer, frontend engineer, software engineer
              and growth marketer to build the MVP of your app or web
              application and validate it.
            </p>

            <button>
              learn more{" "}
              <span>
                <BsArrowRight />
              </span>
            </button>
          </div>
          <div className="box">
            <h3>Access funding after your mvp is validated</h3>
            <p>
              Startups that have built and validated their product can take
              advantage of the financial resources of the SINC Investors
              Network, elevating their potential for success in the venture
              capital landscape.
              <br />
              <b>
                Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12
                months
              </b>
            </p>

            <button>
              learn more{" "}
              <span>
                <BsArrowRight />
              </span>
            </button>
          </div>
        </div>
      </section>

      <div className="section4 container">
        <div className="header">
          <h2>Our Area of Focus</h2>
          <p className="subtitle">
            In our quest to help make success available to everyone, we have
            initial strategic direction to focus on these five (5) key areas at
            the lab
          </p>
        </div>

        <div className="wrapper">
          <div className="box">
            <h3>01</h3>
            <p>Business Support & Incubation</p>
          </div>

          <div className="box">
            <h3>02</h3>
            <p>On-Demand & As-A-Service</p>
          </div>

          <div className="box">
            <h3>03</h3>
            <p>Marketplace & Crowdsourcing</p>
          </div>

          <div className="box">
            <h3>04</h3>
            <p>Aggregation & Shared Economy</p>
          </div>

          <div className="box">
            <h3>05</h3>
            <p>
              {" "}
              <p>Aggregation & Shared Economy</p>
            </p>
          </div>
        </div>
      </div>

      <section className="section5 container">
        <div className="header">
          <h2>Our Concept Innovations</h2>
          <p className="subtitle">
            We have proprietary concept innovations that will support the
            startup ecosystem, support solution-providers/entrepreneurs and
            ultimately help democratize success;
          </p>
        </div>

        <div className="wrapper">
          <div className="box">
            <h3> Service Incubator</h3>
            <p>
              A service-for-shares model of incubating pre-product startups and
              early-stage companies by building their early stage product and
              MVP
            </p>
          </div>

          <div className="box">
            <h3>Virtualting</h3>
            <p>
              A resource share model that allows companies share the time of
              resources (employees, consultants, technical advisers or
              influencers) while also splitting the service cost of the resource
            </p>
          </div>

          <div className="box">
            <h3>diiming</h3>
            <p>
              A progressive investment model that allows you to put aside income
              (disposable or non-disposable) as investment over a period towards
              an investment or spend of your choice 
            </p>
          </div>
        </div>
      </section>

      <section className="section6 container">
        <div className="header">
          <h2>Our service Incubation Modal</h2>
          <p>
            The Service Incubation model is an alternate funding model for
            startup that allows professionals to offer their services to
            startups in return for a minute equity (usually between 0.5% to
            1.5%) in the startup. As a service incubator, you will see your
            share grow as much as 1000% in 12 – 24 months as been first to
            invest.
          </p>
        </div>

        <div className="main_wrapper">
          <div className="sub_header">
            <h3>hypothesis</h3>
            <p className="breif">
              Just a few reasons we know its time for this model
              within the ecosystem
            </p>
          </div>

          <div className="wrapper">
            <div className="box">
              <div className="icon">
                <Triangle_icon />
              </div>

              <p>
                Most early-stage companies and pre-product startups cannot
                afford professional services especially those who don’t have
                family and friends’ network that can support
              </p>
            </div>

            <div className="box">
              <div className="icon">
                <Polygon />
              </div>

              <p>
                If startups can seed 5-10% in equity to incubators for $20k to
                $200k funding most times, they will be willing to seed 10%
                equity for a $25k service investment
              </p>
            </div>
            <div className="box">
              <div className="icon">
                <Polygon2 />
              </div>

              <p>
                Young professionals who don’t have a lot of money to invest nor
                an accredited investors will have opportunities to take equity
                at the early stage of their career, usually been the first to
                invest and almost guaranteed of return
              </p>
            </div>
          </div>

          <div className="sub_header">
            <h3>Case Study</h3>
            <p>
              See what Service Incubators get, the maths behind Service Equity
              (SEEQ) and what the value of your share equity can be over time
            </p>
          </div>

          <div className="wrapper2">
            <p>Service Incubator Equity</p>
            <p>SEEQ Maths Equation</p>
            <p>Value of my Equity Over Time</p>
          </div>
        </div>

        <div className="btn">
          <button className="no_outline">
            Become a service Incubator{" "}
            <span>
              <BsArrowRight />
            </span>
          </button>
        </div>
      </section>

      <section className="section7 container">
        <div className="header">
          <h2>Our Studio Portfolio </h2>
          <p>Our 2024 Service Incubator Portfolio Companies</p>

          <div className="wrapper">
            {studios.map((i, key) => {
              return (
                <div key={key} className="img_con">
                  <img src={i} alt="image" />
                </div>
              );
            })}
          </div>
          <div className="btn">
            <button className="no_outline">
              view all companies{" "}
              <span>
                <BsArrowRight />
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="section8 container">
        <div className="header">
          <h2>Co-found With Us</h2>
          <p>
            We seek to collaborate with visionary individuals who are solving
            similar problems of helping entrepreneurs succeed{" "}
          </p>
        </div>

        <div className="wrapper">
          <div className="box">
            <h3>1</h3>
            <h4>we ideate</h4>
            <p>
              We internally generate concepts and ideas that help solve problems
              in our thesis areas, after which we proceed to develop a
              nano/micro MVP (usually having as low as 30 functions to as high
              as 100 functions) of the product that we take to the market.
            </p>
          </div>
          <div className="box">
            <h3>2</h3>
            <h4>your validate</h4>
            <p>
              {" "}
              You join our 3 months inResidence program as a business expert to
              run the operations or as a technical expert to further the
              development and validate the idea with an average monthly revenue
              of $1k or 10,000 users and/or an MVP of at least 150 functions{" "}
            </p>
          </div>
          <div className="box">
            <h3>3</h3>
            <h4>you co-own</h4>
            <p>
              After successful validation and demo day at the end of the EIR
              program, we move those with perfect fit to become co-founders of
              the product they validated as CEO & CTO, each owning
              20% of the venture.
            </p>
          </div>
        </div>

        <div className="btn">
          <button className="no_outline">
            build your dream{" "}
            <span>
              <BsArrowRight />
            </span>
          </button>
        </div>
      </section>

      <section className="section9 container">
        <div className="header">
          <h2>Join Our Entrepreneur In Residence (EIR) Program</h2>

          <p>
            Our EIR program is our structured 3 months un-paid program designed
            to help us have a pipeline of business and technical cofounders who
            can run the venture of choice as CEO & CTO owning 20% equity each.
          </p>
        </div>

        <Swiper_con />
      </section>

      <section className="section10 container">
        <div className="header">
          <h2>SINC Investors Network</h2>
          <p>
            Our deals are structured not just to take in investments but to
            onboard owners passionate about our solutions. Our portfolio
            companies are valued at $50k at start, with these low valuation, you
            are guaranteed at least 2x-5x, usually been the first to invest.
            <br />
            <br />
            <b>Disclaimer: </b>These deal flows is a statement of our
            projections and may differ from stage to stage and from venture to
            venture and the guarantee is for deal 1, usually the first to invest
          </p>
        </div>

        <div className="m_a_i_con box_con">
          <M_A_I />
        </div>
        <div className="a_i_con box_con">
          <A_I />
        </div>
      </section>

      <section className="section11 container">
        <div className="box_con">
          <div className="box">
            <div className="img_con">
              <img src={heroImage1} alt="img" />

              <h4>
                Top Ten Most Powerful Startup{" "}
                <p>
                  {" "}
                  <span>
                    <TbClock />
                  </span>{" "}
                  2min{" "}
                </p>
              </h4>

              <div className="play_icon">
                <IoPlay />
              </div>
            </div>

            <div className="txt_con">
              <div className="txt">
                <h3>Top Ten Most Powerful Startup</h3>
                <p>
                  Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.
                  Top Ten Most Powerful Startup
                </p>
              </div>

              <div className="img">
                <img src={heroImage1} alt="img" />
              </div>
            </div>
          </div>

          <div className="box">
            <div className="img_con">
              <img src={heroImage1} alt="img" />

              <h4>
                Top Ten Most Powerful Startup{" "}
                <p>
                  {" "}
                  <span>
                    <TbClock />
                  </span>{" "}
                  2min{" "}
                </p>
              </h4>

              <div className="play_icon">
                <IoPlay />
              </div>
            </div>

            <div className="txt_con">
              <div className="txt">
                <h3>Top Ten Most Powerful Startup</h3>
                <p>
                  Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.
                  Top Ten Most Powerful Startup
                </p>
              </div>

              <div className="img">
                <img src={heroImage1} alt="img" />
              </div>
            </div>
          </div>

          <div className="box">
            <div className="img_con">
              <img src={heroImage1} alt="img" />

              <h4>
                Top Ten Most Powerful Startup{" "}
                <p>
                  {" "}
                  <span>
                    <TbClock />
                  </span>{" "}
                  2min{" "}
                </p>
              </h4>

              <div className="play_icon">
                <IoPlay />
              </div>
            </div>

            <div className="txt_con">
              <div className="txt">
                <h3>Top Ten Most Powerful Startup</h3>
                <p>
                  Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.
                  Top Ten Most Powerful Startup
                </p>
              </div>

              <div className="img">
                <img src={heroImage1} alt="img" />
              </div>
            </div>
          </div>
        </div>

        <div className="btn">
          <button className="no_outline">
            build your dream{" "}
            <span>
              <BsArrowRight />
            </span>
          </button>
        </div>
      </section>

      <section className="section12 container">
        <div className="header">
          <h2>As featured In</h2>
        </div>
        <Swiper_con2 />
      </section>

      <section className="section13 container">
        <h1>Let's build companies that help everyone succeed</h1>

        <div className="btns">
          <button>SINC With Us</button>
          <button>Apply to SIP 1.0</button>
        </div>
      </section>
    </div>
  );
};
