import ComponetHeader from "@/app/components/ComponentHeader/ComponentHeader";
import MoleculeBankTable from "@/app/components/MoleculeBank/MoleculeBankTable";

import DefaultLayout from "@/app/components/Layouts/DefaultLayout";

const Page = () => {
  return (
    <DefaultLayout>
      <ComponetHeader pageName="Molecule Bank" containActionButton={true} />
      <div className="flex flex-col gap-10">
        <MoleculeBankTable />
      </div>
    </DefaultLayout>
  );
};

export default Page;