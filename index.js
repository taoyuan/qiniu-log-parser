const RX_LOG = /([\d.]+) (\w+) (\d+) \[([^\[\]]+)] "(\w+) ([^"]+) (\w+)" (\d+) (\d+) "([^"]+)" "([^"]+)"/;

exports.parse = function (log) {
  if (!log) return;
  if (Buffer.isBuffer(log)) {
    log = log.toString();
  }
  return log.split('\n').filter(line => line).map(line => line.trim()).map(line => {
    const m = RX_LOG.exec(line);
    if (m) {
      return {
        ip: m[1],
        hitcode: m[2],
        responseTime: m[3],
        ts: m[4],
        method: m[5],
        url: m[6],
        protocol: m[7],
        status: m[8],
        size: m[9],
        referer: m[10],
        ua: m[11]
      }
    }
  }).filter(item => item);
};
