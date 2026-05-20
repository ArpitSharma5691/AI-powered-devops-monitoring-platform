const express = require('express');
const { exec } = require('child_process');

const app = express();

app.get('/metrics', (req, res) => {

exec('kubectl top nodes --no-headers', (err, stdout) => {

let cpu = "0";
let memory = "0";

if (!err && stdout) {

const data = stdout.trim().split(/\s+/);

cpu = data[2] || "0";
memory = data[4] || "0";

}

exec('kubectl get pods --no-headers | find /c /v ""', (err2, stdout2) => {

let pods = stdout2 ? stdout2.trim() : "0";

exec('docker ps -q | find /c /v ""', (err3, stdout3) => {

let containers = stdout3 ? stdout3.trim() : "0";

res.json({
cpu,
memory,
pods,
containers
});

});

});

});

});

app.get('/', (req, res) => {

res.send(`

<!DOCTYPE html>

<html>

<head>

<title>DevOps Monitoring Platform</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial;
}

body{
background:#0f172a;
color:white;
}

.header{
background:#111827;
padding:25px;
text-align:center;
}

.header h1{
font-size:40px;
color:#38bdf8;
}

.header p{
margin-top:10px;
color:#cbd5e1;
}

.container{
padding:30px;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
margin-top:30px;
}

.card{
background:#1e293b;
padding:30px;
border-radius:18px;
text-align:center;
box-shadow:0 4px 10px rgba(0,0,0,0.4);
}

.card h2{
font-size:48px;
margin:15px 0;
color:#38bdf8;
}

.card p{
color:#cbd5e1;
}

.pipeline{
margin-top:40px;
background:#1e293b;
padding:30px;
border-radius:18px;
}

.pipeline h2{
margin-bottom:20px;
color:#38bdf8;
}

.step{
display:flex;
justify-content:space-between;
background:#0f172a;
padding:15px;
margin:10px 0;
border-radius:10px;
}

.success{
color:#22c55e;
font-weight:bold;
}

.live{
color:#22c55e;
font-weight:bold;
animation:blink 1s infinite;
}

@keyframes blink{
50%{
opacity:0.5;
}
}

</style>

</head>

<body>

<div class="header">

<h1>DevOps CI/CD Monitoring Platform</h1>

<p>Docker • Kubernetes • Jenkins • Prometheus • Grafana</p>

<br>

<p class="live">● LIVE REAL-TIME MONITORING</p>

</div>

<div class="container">

<div class="cards">

<div class="card">
<h3>Running Pods</h3>
<h2 id="pods">0</h2>
<p>Kubernetes Pods</p>
</div>

<div class="card">
<h3>CPU Usage</h3>
<h2 id="cpu">0%</h2>
<p>Cluster CPU</p>
</div>

<div class="card">
<h3>Memory Usage</h3>
<h2 id="memory">0%</h2>
<p>Cluster Memory</p>
</div>

<div class="card">
<h3>Containers</h3>
<h2 id="containers">0</h2>
<p>Docker Containers</p>
</div>

</div>

<div class="pipeline">

<h2>CI/CD Pipeline Status</h2>

<div class="step">
<span>GitHub Integration</span>
<span class="success">SUCCESS</span>
</div>

<div class="step">
<span>Jenkins Build</span>
<span class="success">SUCCESS</span>
</div>

<div class="step">
<span>Docker Build</span>
<span class="success">SUCCESS</span>
</div>

<div class="step">
<span>Kubernetes Deployment</span>
<span class="success">SUCCESS</span>
</div>

<div class="step">
<span>Prometheus Monitoring</span>
<span class="success">ACTIVE</span>
</div>

<div class="step">
<span>Grafana Dashboard</span>
<span class="success">RUNNING</span>
</div>

</div>

</div>

<script>

async function loadMetrics(){

const response = await fetch('/metrics');

const data = await response.json();

document.getElementById('cpu').innerText = data.cpu;
document.getElementById('memory').innerText = data.memory;
document.getElementById('pods').innerText = data.pods;
document.getElementById('containers').innerText = data.containers;

}

loadMetrics();

setInterval(loadMetrics,3000);

</script>

</body>

</html>

`);

});

app.listen(3000, () => {

console.log('Server running on port 3000');

});