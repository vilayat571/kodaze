import Coverofpages from "../../components/About/Coverofpages";
import Formservice from "../../components/Services/Formservice";
import Servicesmessage from "../../components/Services/Servicesmessage";
import Layout from "../../layout/Layout";
import Latestblogs from "../../parts/Famousblogs/Latestblogs";
import Firsterinformationdiver from "../../parts/Main/Firsterinformationdiver";
import Informationdiver from "./Informationdiver";

export default function Services() {
  return (
    <Layout>
      <div className="w-full h-auto flex justify-center">
        <Coverofpages
          src={
            "https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/page-banner.jpg"
          }
          title={"Services"}
          text={"Services"}
        />
      </div>
      <Servicesmessage />
      <Informationdiver />
      <Formservice />
      <Firsterinformationdiver />
      <Latestblogs />
    </Layout>
  );
}
