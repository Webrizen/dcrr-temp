export default function App() {
  return (
    <>
      <div className="bg-white container mx-auto p-10">
        <div className="flex items-center border-b-4 border-blue-600 pb-4">
          <img src="/logo.png" alt="DCRR Logo" className="h-16 mr-4" />
          <div>
            <h1 className="text-2xl font-bold">
              INSPECTION PLAN FOR A REFRIGERATION SYSTEM
            </h1>
            <h2 className="text-xl">EG Group 1</h2>
          </div>
        </div>
        <form className="w-full">
          {/* second-section */}
          <div className="flex mt-5">
            <div className="w-1/5 border p-2 bg-blue-800 text-white">
              <p>Installation :</p>
            </div>
            <div className="w-4/5 border p-2">
              <p>Groupe EG 1</p>
            </div>
          </div>

          {/* third-section */}
          <div className="border">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="border p-2 bg-blue-800 text-white">Rédacteur</th>
                  <th className="border p-2 bg-blue-800 text-white">Coordonées Rédacteur</th>
                  <th className="border p-2 bg-blue-800 text-white">Date de rédaction</th>
                  <th className="border p-2 bg-blue-800 text-white">Agence / Siege</th>
                  <th className="border p-2 bg-blue-800 text-white">Adresse Agence / Siege</th>
                  <th className="p-2"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="Tony CIATTI"
                      className="w-full p-2 border"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="email"
                      name="yourmail"
                      id="yourmail"
                      placeholder="tony.ciatty@dcrr.fr"
                      className="w-full p-2 border"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="date"
                      id="currentDate"
                      className="w-full p-2 border"
                    />
                  </td>
                  <td className="border p-2 text-center">
                    <p>SIEGE</p>
                  </td>
                  <td className="p-2 text-center">
                    <p>36 Avenue Adrien Raynal, Orly 94310</p>
                  </td>
                  <td className="p-2"></td>
                </tr>
                <tr>
                  <td className="border p-2">
                    <p>Date rédaction PI :</p>
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      id="latestDate"
                      className="w-full p-2 border"
                    />
                  </td>
                  <td className="border p-2">
                    <p>Référence PI :</p>
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      name="refrencePi"
                      id="refrencePi"
                      placeholder=": PI-DV-TC-DCRR-003/1"
                      className="w-full p-2 border"
                    />
                  </td>
                  <td className="border p-2 flex flex-row items-center gap-3">
                    <p>Rev:</p>
                    <input
                      type="text"
                      name="number"
                      id="number"
                      placeholder="0"
                      className="w-full p-2 border"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* fourth-section */}
          <div className="mt-5">
            <div className="flex">
              <div className="w-1/5 border p-2 bg-gray-100">
                <p>Intervention du :</p>
              </div>
              <div className="w-4/5 border p-2">
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full p-2 border"
                />
              </div>
            </div>
            <table className="w-full mt-4">
              <thead>
                <tr>
                  <th className="p-2">
                    <p>Nom du site</p>
                  </th>
                  <th className="p-2">
                    <p>Lieu d'intervention</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">
                    <input
                      type="text"
                      name="siteName"
                      id="siteName"
                      placeholder="HALL 5, Parc des Expositions Paris le Bourget"
                      className="w-full p-2 border"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      name="interventionPlace"
                      id="interventionPlace"
                      placeholder="Carrefour Charles Lindbergh, 93350 Le Bourget"
                      className="w-full p-2 border"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            type="button"
            id="printBtn"
            className="btn btn-primary mx-auto block mt-5"
          >
            Print PDF
          </button>
        </form>
      </div>
    </>
  );
}
