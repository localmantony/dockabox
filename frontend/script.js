document.getElementById('generate').addEventListener('click', function() {
    const os = document.getElementById('os').value;
    const database = document.getElementById('database').value;
    const webserver = document.getElementById('webserver').value;
    const command = document.getElementById('command').value;

    let dockerfile = `FROM ${os}\n\n`;

    
    if (database !== 'none') {
        dockerfile += `# Database configuration\n`;
        dockerfile += `# Install ${database}\n\n`;
    }

    dockerfile += `RUN apt-get update\n`;

    if (webserver !== 'none') {
        dockerfile += `RUN apt-get install -y ${webserver}`
    }

    dockerfile += `EXPOSE 8000\n\n`;
    dockerfile += `CMD ${command}\n\n`;
    
// dockerfile += `WORKDIR /app\n\n`;
// dockerfile += `RUN useradd --create-home appuser\n\n`;
// dockerfile += `USER appuser\n\n`;
 //   dockerfile += `COPY app.py .\n\n`;
 //   dockerfile += `ENV API_KEY=hi_mom\n\n`;
 //   dockerfile += `LABEL version="1.0"\n\n`;
 //   dockerfile += `HEALTHCHECK CMD curl --fail http://localhost:8000/ || exit 1\n\n`;
 //   dockerfile += `VOLUME ["/data"]`;

    document.getElementById('dockerfile-content').textContent = dockerfile;
});
