module.exports = {
  env: {
      DB_LOCAL_URI: 'mongodb://localhost:27017/hotel_tonight',
      DB_URI: 'mongodb://localhost:27017/hotel_tonight',

      CLOUDINARY_CLOUD_NAME: 'sega-soft',
      CLOUDINARY_API_KEY: '477481979624213',
      CLOUDINARY_API_SECRET: '6LrNIMX4m7e7w9t5SV8wFWFANT8',

      SMTP_HOST: "smtp.mailtrap.io",
      SMTP_PORT: "2525",
      SMTP_USER: "a4faf4cbebb3a7",
      SMTP_PASSWORD: "adc08a5c2ba7f0",
      SMTP_FROM_EMAIL: "hotel_tonight",
      SMTP_FROM_NAME: "noreply@hotel_tonight.com",

  },
  images: {
    domains: ['res.cloudinary.com'],
}
}