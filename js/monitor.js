// 模拟从服务器获取数据的函数
function getServerMetrics() {
    // 在实际应用中，你需要替换成 API 请求，例如：fetch('/api/server-metrics')
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                cpuUsage: Math.floor(Math.random() * 100), // 模拟随机 CPU 使用率
                memoryUsage: Math.floor(Math.random() * 100), // 模拟随机内存使用率
                networkUsage: Math.floor(Math.random() * 1000), // 模拟网络流量（KB/s）
            });
        }, 1000);
    });
}

// 更新仪表盘的函数
function updateDashboard() {
    getServerMetrics().then((metrics) => {
        // 更新 CPU 使用率
        const cpuFill = document.getElementById('cpu-fill');
        const cpuText = document.getElementById('cpu-text');
        cpuFill.style.width = metrics.cpuUsage + '%';
        cpuText.textContent = metrics.cpuUsage + '%';

        // 更新内存使用率
        const memoryFill = document.getElementById('memory-fill');
        const memoryText = document.getElementById('memory-text');
        memoryFill.style.width = metrics.memoryUsage + '%';
        memoryText.textContent = metrics.memoryUsage + '%';

        // 更新网络流量
        const networkFill = document.getElementById('network-fill');
        const networkText = document.getElementById('network-text');
        networkFill.style.width = (metrics.networkUsage / 10) + '%'; // 限制最大为 100%
        networkText.textContent = metrics.networkUsage + ' KB/s';
    });
}

// 每 10 秒钟更新一次仪表盘
setInterval(updateDashboard, 1000);

// 初始加载一次
updateDashboard();
