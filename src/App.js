import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beautyreg from "./Beautyfolder/Beautyreg";
import Beautytable from "./Beautyfolder/Beautytable";
import Beautyview from "./Beautyfolder/Beautyview";
import Beautyedit from "./Beautyfolder/Beautyedit";
import Beautylogin from "./Beautyfolder/Beautylogin";
import Beautycategory from "./Beautyfolder/Beautycategory";
import BeautyRegistration from "./Beautyfolder/BeautyRegistration";
import Navbar from "./verticalnavbar/Navbar";
import Verticalcategory from "./verticalnavbar/Verticalcatergory";















const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/beautyreg" element={<Beautyreg />} />
      <Route path="/beautytable" element={<Beautytable />} />
      <Route path="/beautyview/:id" element={<Beautyview />} />
      <Route path="/beautyedit/:id" element={<Beautyedit />} />
      <Route path="/beautylogin" element={<Beautylogin />} />
      <Route path="/beautycategory" element={<Beautycategory />} />
      <Route path="/beautyRegister" element={<BeautyRegistration />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/category" element={<Verticalcategory />}/>
        












      </Routes>
    </Router>
  );
};

export default App;