const mongoose = require('mongoose');

const floraSchema = mongoose.Schema({
    name: { type: String },
    nameIlmiah: {type: String},
    descriptions: { type: String },
    short_description: { type: String },
    category: { type: String },
    no: { type: Number},
    bentuk: { type: String }, 
    akar: { type: String }, 
    susunanDaun: { type: String }, 
    bentukDaun: { type: String }, 
    ujungDaun: { type: String }, 
    ukuranDaun: { type: String }, 
    tipeBiji: { type: String }, 
    lainnyaUmum: { type: String}, 
    kulitKayu: { type: String }, 
    ciriKhusus: { type: String }, 
    fenologi: { type: String },
    rangkainBunga: { type: String }, 
    mahkotaBunga: { type: String },
    kelopakBunga: { type: String }, 
    benangSari: { type: String },
    ukuranBunga: { type: String }, 
    lainnyaBunga: { type: String }, 
    ukuranBUah: { type: String }, 
    warnaBuah: { type: String }, 
    permukaanBuah: { type: String }, 
    lainnyaBuah: { type: String }, 
    photos: [
        {
            data: Buffer,
            contentType: String
        }
    ]
});

module.exports = mongoose.model('flora', floraSchema);