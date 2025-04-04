import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({
 children,
 products,
 analytics,
}: {
 children: React.ReactNode;
 products: React.ReactNode;
 analytics: React.ReactNode;
}) => {
 return (
  <div className="flex">
   <Sidebar />
   <div className="flex flex-col w-full ml-64  p-5">
    <div>{children}</div>
    <div className="flex mt-5 justify-center items-center">
     {products}
     {analytics}
    </div>
   </div>
  </div>
 );
};

export default DashboardLayout;
