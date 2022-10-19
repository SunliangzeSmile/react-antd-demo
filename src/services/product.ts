export function queryProductList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      //案例结构体,此结构中无data字段,使用useRequest后无法解析此数据
      // resolve( [
      //     {
      //       id: 1,
      //       key: 1,
      //       name: 'dva',
      //     },
      //     {
      //       id: 2,
      //       key: 2,
      //       name: 'antd',
      //     },
      //   ],
      // );
      resolve({
        data: [
          {
            id: 1,
            key: 1,
            name: 'dva',
          },
          {
            id: 2,
            key: 2,
            name: 'antd',
          },
        ],
      });
    }, 500);
  });
}
