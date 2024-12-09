// components/PageBanner.tsx
import BreadCrumb from "./Breadcrumb";

const PageBanner = () => {
  return (
    <div className="relative w-full h-96 py-20 px-6">
      {/* Banner Background Image (Optional) */}
      <div
        className="absolute inset-0 bg-cover bg-center dark:opacity-50 opacity-80"
        style={{ backgroundImage: "url('/images/banner-image.jpg')" }}
      ></div>
      {/* Breadcrumb at the Bottom Left */}
      <div className="absolute bottom-4 left-6 z-20">
        <BreadCrumb />
      </div>
    </div>
  );
};

export default PageBanner;
