/* eslint-disable no-unused-vars */
import { Layout } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sider from "../../components/sider/Sider";
import Header from "../../components/header/Header";

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsed={collapsed} />
            <Layout>
                <Header />
                <Layout.Content style={{ padding: '20px' }}>
                    <Outlet />
                </Layout.Content>
            </Layout>
        </Layout>
    );
}

export default Dashboard;
