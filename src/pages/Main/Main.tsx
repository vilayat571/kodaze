import Layout from "../../layout/Layout";
import CoverDiv from "../../parts/Main/CoverDiv";
import Helpdiv from "../../parts/Main/Helpdiv";
import Latestblogs from "../../parts/Famousblogs/Latestblogs";
import Informationdiver from "../Services/Informationdiver";
import { Helmet } from "react-helmet-async";
export default function Main() {
  return (
    <Layout>
      <Helmet>
        <title>Kodaze || Main Page</title>
      </Helmet>
      <div className="lg:mb-48 md:mb-48 xl:mb-32 sm:mb-12 flex w-full h-auto justify-center items-center">
        <CoverDiv />
      </div>
      <Helpdiv />
      <Informationdiver />
      <Latestblogs />
    </Layout>
  );
}
