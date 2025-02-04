const os = require('os');

// Function to get system uptime and format it
function getUptime() {
    const uptimeSeconds = os.uptime(); // System uptime in seconds
    const days = Math.floor(uptimeSeconds / (24 * 3600));
    const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);

    return `${days} days, ${hours} hours, ${minutes} minutes`;
}

// Log the system uptime
console.log(`System Uptime: ${getUptime()}`);
