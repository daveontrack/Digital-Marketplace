// import { Skeleton } from "@/components/ui/skeleton";

// export default function Loadingfile() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-10">
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-10">
//         <div className="col-span-1">
//           <Skeleton className="h-[250px] lg:h-[400px] w-full" />
//           <Skeleton className="h-[500px] w-full mt-10" />
//         </div>

//         <div className="col-span-1">
//           <Skeleton className="w-full h-[400px]" />
//         </div>
//       </div>
//     </section>
//   );
// }
// app/product/[id]/loading.tsx

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-12">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {/* Left side: images */}
        <div className="space-y-6">
          <Skeleton className="h-[250px] lg:h-[400px] w-full rounded-xl shadow-sm" />
          <Skeleton className="h-[80px] w-full rounded-md" />
          <Skeleton className="h-[80px] w-full rounded-md" />
        </div>

        {/* Right side: product details */}
        <div className="space-y-6">
          <Skeleton className="h-8 w-2/3 rounded-md" /> {/* title */}
          <Skeleton className="h-6 w-1/3 rounded" /> {/* price */}
          <div className="space-y-3">
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-[90%] rounded" />
            <Skeleton className="h-4 w-[80%] rounded" />
          </div>
          <Skeleton className="h-12 w-1/2 rounded-lg mt-4" />{" "}
          {/* fake buy button */}
        </div>
      </div>
    </section>
  );
}
