import { Switch, Route } from "react-router-dom";
import CounterPage from "../pages/CounterPage";
import MainPage from "../pages/MainPage";
import WhoWeArePage from "../pages/WhoWeArePage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import LoginPage from "../pages/LoginPage";
import ProtectedPage from "../pages/ProtectedPage";

const PageBody = ({ userName }) => {
  return (
    <div className="p-3 flex-grow-1">
      <Switch>
        <Route path="/counter" exact>
          <ProtectedPage pageComponent={CounterPage} from={"/counter"} />
        </Route>
        <Route path="/whoweare" exact>
          <WhoWeArePage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/products" exact>
          <ProtectedPage pageComponent={ProductsPage} from={"/products"} />
        </Route>
        <Route path="/products/:productId" exact>
          <ProductDetailPage />
        </Route>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="*">
          <div style={{ color: "red" }}>
            <h1>404 - Aradığınız sayfa bulunamadı!</h1>
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default PageBody;
