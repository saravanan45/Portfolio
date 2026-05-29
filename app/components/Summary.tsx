import { getSummary } from "@/common/helper";

const Summary = () => {
  return (
    <section className="my-16 scroll-mt-20 mx-auto" id="summary">
      <h2 className="text-4xl font-bold mb-4">Summary</h2>
      <p>
       {getSummary()}
      </p>
    </section>
  );
};

export default Summary;
