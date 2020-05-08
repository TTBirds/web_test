import React from 'react';
import { Card, Typography, Alert } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import EchartsLine from '@/components/EchartsLine/index';

import SlidingSelection from '@/components/SlidingSelection/index';


export default () => (
  <div style={{ width: '375', height: '300px' }}>
    {/* <EchartsLine /> */}
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <SlidingSelection
        width="500px"
        height="50px"
        background="gray"
      ></SlidingSelection>
    </div>

  </div>
);
