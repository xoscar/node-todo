const { trace } = require("@opentelemetry/api");

const Tracer = {
  getTracer() {
    return trace.getTracer(process.env.OTEL_SERVICE_NAME);
  },
  createSpanFromContext(name) {
    const tracer = this.getTracer();

    return tracer.startSpan(name);
  },
};

module.exports = Tracer;
