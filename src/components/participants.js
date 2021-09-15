import React from 'react';
import useAxios from 'axios-hooks';
import { useParams } from 'react-router-dom';
import { List, Tag, Layout } from 'antd';
import { DateTime } from 'luxon';
import {
  UserOutlined, FieldTimeOutlined,
} from '@ant-design/icons';

const { Header, Content } = Layout;
const { Item } = List;

export default function Participants() {
  const { meetingId } = useParams();
  const { REACT_APP_USER_ID } = process.env;

  const [{ data = {}, loading, error }] = useAxios(`/users/${REACT_APP_USER_ID}/report/${meetingId}/participants`);

  if (error) {
    return (
      <div className="align-center">
        <h1>Error</h1>
      </div>
    )
  }

  return (
    <Layout className="layout-container">
      <Header>
        <h1>Participants</h1>
      </Header>
      <Content>
        <List
          itemLayout="horizontal"
          className="participant-list"
          loading={loading}
          dataSource={data.participants}
          rowKey="user_id"
          header={(
            <div className="flex-end">
              <Tag icon={<FieldTimeOutlined />} color="blue">
                Time Spent (hh:mm:ss)
              </Tag>
            </div>
          )}
          renderItem={({ name, user_email, join_time, leave_time, duration }) => (
            <>
              <Item>
                <Item.Meta
                  avatar={<UserOutlined />}
                  title={name}
                  description={user_email || 'n/a'}
                />
                <Tag style={{ marginRight: 20 }}>
                  {`
                  ${DateTime.fromISO(join_time).toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)}
                  -
                  ${DateTime.fromISO(leave_time).toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)}
                  `}
                </Tag>
                <div>
                  <Tag style={{ fontSize: 14 }} color="blue">
                    {new Date(duration * 1000).toISOString().substr(11, 8)}
                  </Tag>
                </div>
              </Item>
            </>
          )}
        />
        </Content>
      </Layout>
  );
}