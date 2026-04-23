const fs = require('fs');
const path = require('path');

async function downloadImages() {
  console.log("📸 Doğaçlama resim robotu (Bölüm 2) çalışıyor...");

  // SADECE 4, 5 ve 6. klasörleri hedef alıyoruz
  const folders = ['hotel4', 'hotel5', 'hotel6'];
  const publicPath = path.join(__dirname, 'public');

  if (!fs.existsSync(publicPath)) {
    fs.mkdirSync(publicPath);
  }

  for (const folder of folders) {
    const folderPath = path.join(publicPath, folder);
    
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
      console.log(`📁 Yeni klasör açıldı: ${folder}`);
    }

    // Her klasöre 4'er tane rastgele 1000x1000 boyutunda resim
    for (let i = 1; i <= 4; i++) {
      const filePath = path.join(folderPath, `image-${i}.jpg`);
      
      if (fs.existsSync(filePath)) {
        console.log(`  ⏩ Zaten var, atlandı: ${folder}/image-${i}.jpg`);
        continue;
      }

      try {
        const response = await fetch(`https://picsum.photos/seed/${folder}hotel${i}/1000/1000`);
        const buffer = await response.arrayBuffer();
        
        fs.writeFileSync(filePath, Buffer.from(buffer));
        console.log(`  ✅ İndirildi (1000x1000): ${folder}/image-${i}.jpg`);
      } catch (error) {
        console.error(`  ❌ Hata oluştu (${folder}/image-${i}.jpg):`, error.message);
      }
    }
  }
  
  console.log("🎉 Yeni otellerin resimleri 1000x1000 formatında başarıyla klasörlere yerleştirildi!");
}

downloadImages();