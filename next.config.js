module.exports = {
  env: {
      DB_LOCAL_URI: 'mongodb://localhost:27017/hotel_tonight',
      DB_URI: 'mongodb://localhost:27017/hotel_tonight',

      STRIPE_API_KEY: '',
      STRIPE_SECRET_KEY: '',

      STRIPE_WEBHOOK_SECRET: '',
      
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
const removeUndefined = (obj) => {
  let newObj = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] === Object(obj[key])) newObj[key] = removeUndefined(obj[key]);
    else if (obj[key] !== undefined) newObj[key] = obj[key];
  });
  return newObj;
};
const next = require('next/dist/lib/is-serializable-props');
const isSerializableProps = next.isSerializableProps;
next.isSerializableProps = (page, method, input) => isSerializableProps(page, method, removeUndefined(input));