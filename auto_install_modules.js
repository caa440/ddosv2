const fs = require('fs');
const child_process = require('child_process');

const scriptFilePath = process.argv[2];

if (!scriptFilePath) {
  console.error('Usage: node auto_install_modules.js <scriptFilePath>');
  process.exit(1);
}

// Baca isi file skrip
fs.readFile(scriptFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Failed to read script file ${scriptFilePath}: ${err}`);
    process.exit(1);
  }

  // Temukan modul-modul yang direquire dalam skrip
  const requiredModules = data.match(/require\s*\(\s*['"]([^'"]+)['"]\s*\)/g);

  if (!requiredModules) {
    console.log('No modules required in the script.');
    process.exit(0);
  }

  // Ekstrak nama modul dari hasil pencarian
  const moduleNames = requiredModules.map((requireStatement) => {
    return requireStatement.match(/require\s*\(\s*['"]([^'"]+)['"]\s*\)/)[1];
  });

  // Instalasi modul-modul yang ditemukan
  if (moduleNames.length > 0) {
    console.log(`Installing modules: ${moduleNames.join(', ')}`);

    // Jalankan perintah shell untuk menginstal modul
    const installCommand = `npm install ${moduleNames.join(' ')}`;
    const installationProcess = child_process.spawnSync(installCommand, { shell: true, stdio: 'inherit' });

    // Tampilkan pesan apakah instalasi berhasil atau tidak
    if (installationProcess.status === 0) {
      console.log('Modules installed successfully.');
    } else {
      console.error('Failed to install modules.');
    }
  } else {
    console.log('No modules found in the script.');
  }
});

