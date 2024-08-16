// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// export function useNavigationLoadingBar() {
//   const router = useRouter();
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     router.events.on("routeChangeStart", () => {
//       setProgress(40);
//     });
//     router.events.on("routeChangeComplete", () => {
//       setProgress(100);
//     });
//     router.events.on("routeChangeError", () => {
//       setProgress(100);
//     });

//     return () => {
//       router.events.off("routeChangeStart", () => {
//         setProgress(40);
//       });
//       router.events.off("routeChangeComplete", () => {
//         setProgress(100);
//       });
//       router.events.off("routeChangeError", () => {
//         setProgress(100);
//       });
//     };
//   }, [router.events]);

//   return { progress, setProgress };
// }
