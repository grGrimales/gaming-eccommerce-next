
import { BasicLayout } from "@/layouts";
import { Info } from "@/app/components/Account";
import { TabPage } from "../components/Account/TabPage/TabPage";


export const metadata = {
  title: "Account",
  description: "Account page",
};

export default function AccountPage() {
  return (
    <>
      <BasicLayout isContainer relative>
        <Info />
        <TabPage />
      </BasicLayout>
    </>
  );
}
