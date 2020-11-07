import {Fragment} from "react";


function App() {
  return (
      <Fragment>

          <div className="flex bg-gray-200  w-5/12 h-64 ">
              <div className="w-2/6 flex flex-col ">
                  <div className="bg-green-500 w-full flex-1">1</div>
                  <div className="bg-pink-500 w-full h-32">2</div>
              </div>
              <div className="w-4/6 flex flex-col ">
                  <div className="bg-blue-200 w-8/12 h-32">3</div>
                  <div className="w-full flex flex-1">
                      <div className="bg-orange-500 w-2/3">4</div>
                      <div className="w-1/3 flex flex-col">
                          <div className="bg-green-500 w-20 flex-1">5</div>
                          <div className=" bg-gray-500 w-20 flex-1">6</div>
                      </div>
                  </div>
              </div>
          </div>
      </Fragment>
  );
}

export default App;
