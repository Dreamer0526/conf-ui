import React from "react";
import { Table as AntdTable } from 'antd';

const columns = [{
  title: "",
  dataIndex: "firstCol",
},
{
  title: "私人银行",
  dataIndex: "personalBank",
}, {
  title: "钻石",
  dataIndex: "diamond",
}, {
  title: "信用卡",
  dataIndex: "creditCard",
}];

const data = [{
  firstCol: "纯活交叉",
  personalBank: 5,
  diamond: 81,
  creditCard: 0
}, {
  firstCol: "理财到期",
  personalBank: 45,
  diamond: 729,
  creditCard: 0
}, {
  firstCol: "白金提升",
  personalBank: 0,
  diamond: 0,
  creditCard: 0
}, {
  firstCol: "代发工资",
  personalBank: 26,
  diamond: 722,
  creditCard: 0
}];

class Table extends React.Component {
  render() {
    return <AntdTable size="small" pagination={false} columns={columns} dataSource={data} />
  }
}


export default Table;