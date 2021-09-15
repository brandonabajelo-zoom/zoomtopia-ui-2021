import React from 'react';
import useAxios from 'axios-hooks';
import { Table, Tag, Layout } from 'antd';
import qs from 'query-string';
import { useHistory } from 'react-router-dom';
import { VideoCameraOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

export default function Meetings() {
  const { REACT_APP_USER_ID } = process.env;
  const { push } = useHistory();

  const [{ data = {}, loading }] = useAxios(`/users/${REACT_APP_USER_ID}/meetings`);

  const columns = [
    {
      title: 'Topic',
      dataIndex: 'topic',
    },
    {
      title: 'Meeting ID',
      dataIndex: 'id',
      render: (text, row) => <Tag color="purple">{row.id}</Tag>,
    },
    {
      title: '',
      align: 'center',
      render: (text, row) => (
        <UserOutlined
          className="table-icon"
          onClick={() => push(`/participants/${row.id}`)}
        />
      )
    },
    {
      title: '',
      align: 'center',
      render: (text, row) => (
        <VideoCameraOutlined
          className="table-icon"
          onClick={() => push(`/websdk?${qs.stringify({ meetingNumber: row.id, userName: 'zoomtopia user' })}`)}
        />
      ),
    },
  ];

  return (
    <Layout className="layout-container">
      <Header className="header-flex">
        <h1>Meetings</h1>
      </Header>
      <Content>
        <Table
          columns={columns}
          dataSource={data.meetings}
          loading={loading}
          rowKey="id"
          pagination={false}
          showSorterTooltip={false}
        />
      </Content>
    </Layout>
  );

}