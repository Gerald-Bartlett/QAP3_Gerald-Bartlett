const express = require('express');
const router = express.Router();

router.use(express.static('public'));

const storesDal = require('../services/stores.dal')
const languageDal = require('../services/languages.dal')

router.get('/', async (req, res) => {
    let stores = await storesDal.getStores();
    if (stores.length === 0)
        res.render('norecord');
    else {
        res.render('stores.ejs', {stores});
    }
});

router.get('/:id', async (req, res) => {
    var store = await storesDal.getStoreById(req.params.id);
    var languages = await languageDal.getLanguages();
    languages.unshift({name:'All'});

    if (req.query.language) {
      var revenue = await storesDal.getLangRevenueByStoreIdLanguage(req.params.id, req.query.language);
      
    } else {
      var revenue = await storesDal.getLangRevenueByStoreId(req.params.id);    
    };

    if (store.length === 0)
        res.render('norecord');
    else {
        res.render('storedetails.ejs', {store, languages, revenue, language: req.query.language});
    };
});

module.exports = router