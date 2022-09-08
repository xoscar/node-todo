const { resolve } = require("path");
const dotEnv = require("dotenv");
const {
  OTLPTraceExporter,
} = require("@opentelemetry/exporter-trace-otlp-grpc");
const {
  getNodeAutoInstrumentations,
} = require("@opentelemetry/auto-instrumentations-node");
const { NodeSDK, api } = require("@opentelemetry/sdk-node");
// const { ConsoleSpanExporter } = require('@opentelemetry/sdk-trace-base');
// const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');
// diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);

if (process.env.NODE_ENV !== "production") {
  dotEnv.config({
    path: resolve(__dirname, "../.env"),
  });
}

const sdk = new NodeSDK({
  traceExporter: new OTLPTraceExporter(),
  // traceExporter: new ConsoleSpanExporter(),
  instrumentations: getNodeAutoInstrumentations({
    "@opentelemetry/instrumentation-express": {
      enabled: false,
    }
  }),
});

sdk.start();
