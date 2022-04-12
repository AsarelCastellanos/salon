import React from "react";

const Services = () => {
  return (
    <section id="service" className="bg-primary body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
            Our Services
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-white text-base">
            It is high encouraged to first book a consult so we may discuss
            specifics and so I can also better grasp the nature of your
            appointment. Below are our starting prices. They may vary depeding
            on hair length, volume and texture.
          </p>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-black text-sm bg-neutral rounded-tl rounded-bl">
                  Service
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-black text-sm bg-neutral rounded-tr rounded-br">
                  Pricing
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-black bg-white px-4 py-3">
                  Root Color
                </td>
                <td className="text-black bg-white px-4 py-3">
                  $70+
                </td>
              </tr>
              <tr>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  Haircut
                </td>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  $60+
                </td>
              </tr>
              <tr>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  Full Color
                </td>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  $150+
                </td>
              </tr>
              <tr>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  Partial Balayage
                </td>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  $150+
                </td>
              </tr>
              <tr>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  Balayage
                </td>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  $210+
                </td>
              </tr>
              <tr>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  Partial Foil
                </td>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  $85+
                </td>
              </tr>
              <tr>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  Full Foil
                </td>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                 $125+
                </td>
              </tr>
              <tr>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  Full Babylight
                </td>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  $250+
                </td>
              </tr>
              <tr>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  Full Bleach Out
                </td>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  $300+
                </td>
              </tr>
              <tr>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  Bleach Root Touch Up (6 Weeks)
                </td>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  $100+
                </td>
              </tr>
              <tr>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  Root Shadow
                </td>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  $25+
                </td>
              </tr>
              <tr>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  For Additional Toners
                </td>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  $30 - $60
                </td>
              </tr>
              <tr>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  For Additional Vidids
                </td>
                <td className="text-black border-t-2 bg-white border-neutral px-4 py-3">
                  $80 - $150
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Button
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
