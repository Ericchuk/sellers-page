import Header from "../components/header";
import Datas from "../components/orders";
import { UserProvider } from "../context";

export default function LandingPage() {
  return (
    <UserProvider>
      <article>
        <Header />
        <Datas />
      </article>
    </UserProvider>
  );
}
