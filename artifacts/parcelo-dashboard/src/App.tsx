import { Switch, Route, Router as WouterRouter } from "wouter";
import NotFound from "@/pages/not-found";
import DashboardShell from "@/components/DashboardShell";
import Home from "@/pages/Home";
import Orders from "@/pages/Orders";
import Wishlist from "@/pages/Wishlist";

function Router() {
  return (
    <DashboardShell>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/orders" component={Orders} />
        <Route path="/wishlist" component={Wishlist} />
        <Route component={NotFound} />
      </Switch>
    </DashboardShell>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
