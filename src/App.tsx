import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import SelectUserType from "./routes/SelectUserType";
import BuyerOnboarding from "./routes/buyer-onboarding/BuyerOnboarding";
import EmailVerification from "./components/EmailVerification";
import SupplierOnboarding from "./routes/supplier-onboarding/SupplierOnboarding";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<SelectUserType/>}/>
        <Route path="buyer-onboarding" element={<BuyerOnboarding/>}/>
        <Route path="email-verification" element={<EmailVerification/>}/>

        <Route path="supplier-onboarding" element={<SupplierOnboarding/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
