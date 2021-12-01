// import React, { useState, useEffect } from "react";
// import { db } from "./Firebase";


// function ProductsFromFire() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await db.collection("ProductWithImage").get();
//       setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {items.map((prod) => [
//         <ol>
//           <b>Consumer Details :</b> {<br />}
//           {prod.product},{<br />}
//           {prod.desc},{<br />}
//           {prod.price},{<br />}
//           {prod.url},{<br />}
//         </ol>,
//       ])}
//     </div>
//   );
// }

// export default ProductsFromFire;
