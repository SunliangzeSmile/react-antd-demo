import { message } from 'antd';
import { useRequest } from 'umi';
import { queryProductList } from '@/services/product';

export default function useProductList(params: {
  pageSize: number;
  concurrent: number;
}) {
  const msg = useRequest(() => queryProductList());
  const deleteProducts = () => {};
  return {
    datasource: msg.data,
    reload: msg.run,
    loading: msg.loading,
    deleteProducts,
  };
}
