const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactInformationSchema = new Schema({
    email: { type: String, required: true},
    fullName: { type: String, required: true},
    phone: { type: String },
})

const offerSchema = new Schema({
    offeredProductname: { type: String, required: true },
    wantedProductname: { type: String, required: true },
    offeredProductDescription: { type: String },
    offeredProductPhotos: { type: Array },

    contactInformation: {
        type: contactInformationSchema, required: true
      }  
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;