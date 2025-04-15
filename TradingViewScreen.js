import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const TradingViewScreen = () => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <script src="https://s3.tradingview.com/tv.js"></script>
        <style>
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            background-color: #000;
          }
        </style>
      </head>
      <body>
        <div id="tradingview_1" style="height:100%; width:100%;"></div>
        <script type="text/javascript">
          new TradingView.widget({
            container_id: "tradingview_1",
            width: "100%",
            height: "100%",
            symbol: "NASDAQ:AAPL",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            hide_side_toolbar: false,
            allow_symbol_change: true,
            details: true,
            studies: []
          });
        </script>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TradingViewScreen;
