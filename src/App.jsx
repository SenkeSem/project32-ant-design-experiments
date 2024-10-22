import { Layout, theme } from 'antd';
const { Header, Content, Footer } = Layout;

import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}></Header>
      <Content
        style={{
          padding: '20px',
        }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}>
          <Space>
            <HomeOutlined style={{ fontSize: '50px', color: '#08c' }} />
            <SettingFilled />
            <SmileOutlined />
            <SyncOutlined spin />
            <SmileOutlined rotate={180} />
            <LoadingOutlined />
          </Space>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
