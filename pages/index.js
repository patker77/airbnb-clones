import Head from "next/head";
import Banner from "../components/Banner";
import City from "../components/City";
import Header from "../components/Header";
import steden from "../Utils/smallCardApi";
const images = require.context("../image/stad");

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb-Clone</title>
      </Head>
      <header>
        <Header />
        <Banner />
      </header>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* city */}
        <section className="py-6">
          <h2 className="font-bold text-3xl md:text-4xl py-3">
            De regio ontdekken
          </h2>
          <div className="grid grid-rows-2 grid-flow-col md:grid-flow-col md:grid-rows-2  lg:grid-flow-col gap-x-2 md:gap-x-[12px] overflow-scroll scrollbar-hide">
            {steden.map((items) => (
              <City
                key={images(items.img)}
                img={images(items.img)}
                location={items.location}
                distance={items.distance}
              />
            ))}
          </div>
        </section>
        <section>
          <div className="m-20">
            <h3>hi</h3>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
