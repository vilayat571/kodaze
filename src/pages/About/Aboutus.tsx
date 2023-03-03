import Aboutsolution from "../../components/About/Aboutsolution";
import Coverofpages from "../../components/About/Coverofpages";
import Information from "../../components/About/Information";
import Ourteam from "../../components/About/Ourteam";
import Promoblocks from "../../components/About/Promoblocks";
import Layout from "../../layout/Layout";
import Latestblogs from "../../parts/Famousblogs/Latestblogs";

export default function Aboutus() {
  return (
    <Layout>
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <Coverofpages
          src={"https://tfhtml.themepul.com/restly/assets/images/banner.jpg"}
          title={"About us"}
          text={"About us"}
        />
        <Aboutsolution />
        <Promoblocks />
        <Information />
        <Ourteam />
        <Latestblogs />
      </div>
    </Layout>
  );
}
