import { useModel } from 'umi';
import ProductList from '@/components/ProductList';

const Products = () => {
  const { datasource, reload, deleteProducts } = useModel('useProductList');
  return (
    <div>
      <a
        onClick={() => {
          reload();
        }}
      >
        刷新
      </a>
      <ProductList onDelete={deleteProducts} products={datasource} />
    </div>
  );
};
export default Products;
// export default function Page() {
//   return (
//     <div>
//       <h1 className={styles.title}>This's is a Page products</h1>
//     </div>
//   );
// }
