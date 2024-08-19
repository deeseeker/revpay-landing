import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuretwoData from "./featuresData";

const FeatureTwo = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <p>One platform. All your solutions.</p>
          <SectionTitle
            title="Supercharge your payment workflows"
            paragraph=""
            width="100%"
          />

          <div className="grid grid-cols-1 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuretwoData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureTwo;
