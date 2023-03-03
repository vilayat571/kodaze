import Coverofpages from "../../components/About/Coverofpages";
import Forminputs from "../../components/Contact/Forminputs";
import Message from "../../components/Contact/Message";
import Layout from "../../layout/Layout";

export default function Contactus() {
  return (
    <Layout>
      <div className="w-full h-auto flex justify-center">
        <Coverofpages
          src={
            "https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/page-banner.jpg"
          }
          title={"Contact us"}
          text={"Contact us"}
        />
      </div>
      <Message />
      <Forminputs />
    </Layout>
  );
}
