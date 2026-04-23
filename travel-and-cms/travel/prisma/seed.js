/* eslint-disable */
require("dotenv").config(); 
const { PrismaClient } = require("../lib/generated/prisma");
const prisma = new PrismaClient(); 

const fs = require('fs');
const path = require('path');

const publicPath = path.join(__dirname, '../public');

function getHotelImages(hotelFolder) {
  const hotelPath = path.join(publicPath, hotelFolder);
  if (!fs.existsSync(hotelPath)) {
      console.warn(`Uyarı: ${hotelPath} klasörü bulunamadı, resimler boş geçilecek.`);
      return [];
  }

  return fs.readdirSync(hotelPath)
    .filter(file => file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg'))
    .map(file => `/${hotelFolder}/${file}`);
}

function getRandomPrice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const roomTypes = [
  'Deluxe Suite', 'Executive Room', 'Standard Room', 'Family Suite',
  'Penthouse Suite', 'Ocean View Room', 'Mountain View Room', 
  'Presidential Suite', 'Single Room', 'Double Room'
];

const amenitiesList = [
  'WiFi', 'TV', 'Minibar', 'Sea View', 'Breakfast Included', 'Air Conditioner',
  'Balcony', 'Private Pool', 'Kitchen', 'Hot Tub'
];

async function main() {
  console.log("🧹 Eski veriler temizleniyor...");
  await prisma.room.deleteMany();
  await prisma.hotel.deleteMany();

  console.log("🌱 Yeni veritabanı doldurma işlemi başlatılıyor...");

  // 6 Adet Fake Otel
  const hotels = [
    {
      name: 'Grand Palace Hotel',
      description: 'Luxury hotel with an amazing sea view.',
      location: 'Istanbul, Turkey',
      address: '123 Bosphorus Street, Istanbul',
      rating: 4.8,
      photos: getHotelImages('hotel1'), // Senin fotoğrafların
      pricePerNight: 250.0,
    },
    {
      name: 'Mountain View Resort',
      description: 'Perfect place to relax with a scenic mountain view.',
      location: 'Alps, Switzerland',
      address: '45 Alpine Road, Switzerland',
      rating: 4.5,
      photos: getHotelImages('hotel2'), // Senin fotoğrafların
      pricePerNight: 180.0,
    },
    {
      name: 'Ocean Breeze Hotel',
      description: 'Enjoy a breathtaking view of the ocean.',
      location: 'Malibu, USA',
      address: '678 Pacific Coast Highway, Malibu',
      rating: 4.7,
      photos: getHotelImages('hotel3'), // Senin fotoğrafların
      pricePerNight: 220.0,
    },
    {
      name: 'City Center Inn',
      description: 'A modern inn right in the heart of the bustling city.',
      location: 'New York City, USA',
      address: '123 Broadway, NYC',
      rating: 4.4,
      photos: getHotelImages('hotel4'), // Robotun fotoğrafları
      pricePerNight: 150.0,
    },
    {
      name: 'Desert Oasis Resort',
      description: 'Experience the magic of the desert with luxurious amenities.',
      location: 'Dubai, UAE',
      address: '45 Desert Dune Blvd, Dubai',
      rating: 4.9,
      photos: getHotelImages('hotel5'), // Robotun fotoğrafları
      pricePerNight: 300.0,
    },
    {
      name: 'Forest Retreat',
      description: 'A quiet cabin-style hotel surrounded by lush green forests.',
      location: 'Black Forest, Germany',
      address: '78 Pine Tree Lane, Germany',
      rating: 4.6,
      photos: getHotelImages('hotel6'), // Robotun fotoğrafları
      pricePerNight: 210.0,
    },
  ];

  for (const [index, hotelData] of hotels.entries()) {
    console.log(`🏨 Oluşturuluyor: ${hotelData.name}...`);
    const hotel = await prisma.hotel.create({ data: hotelData });

    for (let i = 0; i < 10; i++) {
      const randomAmenities = amenitiesList.sort(() => 0.5 - Math.random()).slice(0, 4);
      const randomRoomType = roomTypes[i % roomTypes.length];
      const randomPrice = getRandomPrice(100, 500);
      
      const currentHotelFolder = `hotel${index + 1}`;
      const roomPhotos = getHotelImages(currentHotelFolder); 

      await prisma.room.create({
        data: {
          hotelId: hotel.id,
          type: randomRoomType,
          price: randomPrice,
          amenities: randomAmenities,
          photos: roomPhotos,
          isAvailable: Math.random() > 0.2,
        },
      });
    }
    console.log(`✅ ${hotelData.name} ve 10 adet odası başarıyla eklendi!`);
  }
  
  console.log("🎉 6 Otel ve tüm odalar MongoDB'ye başarıyla yüklendi!");
}

main()
  .catch((e) => {
    console.error("❌ BİR HATA OLUŞTU:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });