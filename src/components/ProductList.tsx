import React from 'react';
import { Table, Popconfirm, Button } from 'antd';

const ProductList: React.FC<{
  products: { id: number; name: string }[];
  onDelete: (id: string) => void;
}> = ({ onDelete, products }) => {
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '操作',
      render: (text, record) => {
        return (
          <Popconfirm
            title="Delete"
            onConfirm={() => {
              onDelete(record.id);
            }}
          >
            <Button>删除</Button>
          </Popconfirm>
        );
      },
      dataIndex: 'actions',
    },
  ];
  return <Table dataSource={products} columns={columns}></Table>;
};
export default ProductList;
