const VC_COLORS = ['`#06b6d4`', '`#a855f7`', '`#22c55e`', '`#f59e0b`'];

const vcState = {
  numNodes: 3,
  clocks: [],
  lamport: [],
  events: [],
  pendingSend: null,
};

function vcRenderTimeline() {
  var canvas = document.getElementById('vcTimelineCanvas');
  if (!canvas) return;
  var wrap = canvas.parentElement;
  var W = Math.max(wrap.clientWidth, 500);
  var H = vcState.numNodes * 70 + 40;
  canvas.width = W; canvas.height = H;
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, W, H);

  var laneY = {};
  for (let n = 0; n < vcState.numNodes; n++) laneY[n] = 40 + n * 70;

  for (let n = 0; n < vcState.numNodes; n++) {
    ctx.strokeStyle = 'rgba(148,163,184,0.15)'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(30, laneY[n]); ctx.lineTo(W - 20, laneY[n]); ctx.stroke();
    ctx.fillStyle = VC_COLORS[n % VC_COLORS.length]; ctx.font = 'bold 10px Fira Code,monospace'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText('N' + n, 5, laneY[n]);
  }
}