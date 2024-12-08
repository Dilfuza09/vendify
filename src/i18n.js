import i18n from "i18next";

import { initReactI18next } from "react-i18next";
const resources = {
    uz: {
        translation: {
            "Haqida": "Haqida",
            "Foiz": "Sotish",
            "Kontakt": "Kontakt",
            "biz": "Tasodifiy hayot uchun yaratilgan yaxshi narsalar sizga foydalanish quvonchini olib keladi",
            "hammasi": "Hammasi",
            "soat": "Soat",
            "akk": "Akksessuarlar",
            "uy": "Uy",
            "narx": "Narx",
            "soft": "Yumshoq",
            "taxta": "Taxtali",
            "mus": "Mustahkam",
            "yen": "Yengil",
            "qu": "Qulay",
            "kichik": "Kichik",
            "bor": "Mavjudlik",
            "mahsulotlar": " Bor Mahsulotlar",
            "foo": "Bizni ijtimoiy tarmoqlarda ham kuzatib boring va tashrif buyuring Bryusseldagi ko'rgazma zalimiz.",
            "biza": "Biz Haqimizda",
            "ijod": "Ijodkorlik va innovatsiyalar dunyomizga xush kelibsiz. Biz ta'minlashga ishonamiz oddiy, samarali va chiroyli orqali foydalanuvchilarimiz uchun eng yaxshi echimlar dizaynlar. Bizning jamoamiz tajribangizni silliq va qulay qilish uchun bag'ishlangan esda qolarli.",
            "missiya": "Bizning Missiyamiz",
            "servis": "Bizning vazifamiz foydalanuvchilarga ajoyib tajribani taqdim etishdir texnologiyani hamma uchun ochiq qilish. Biz sizga erishishga yordam berishni maqsad qilganmiz mahsulotlarimiz va xizmatlarimiz bilan maqsadlaringiz va orzularingiz",
            "jamoa": "Jamoamiz bilan tanishing",
            "dir": "Bosh Direktor va asoschi",
            "veb": "Bosh dasturchi",
            "contact": "Biz bilan Bog'lanish",
            "do": "Savollaringiz bormi? Shaklni to'ldiring va biz sizga tez orada javob beramiz.",
            "ism": "Ism",
            "mes": "Xabar",
            "button": "Xabar Yuborish"
        }
    },
    en: {
        translation: {
            "Haqida": "About",
            "Foiz": "Sale",
            "Kontakt": "Contact",
            "biz": "Nice things for casual life created to bring you joy of usage",
            "hammasi": "All",
            "soat": "Clock",
            "akk": "Accessories",
            "uy": "Home",
            "narx": "Price",
            "soft": "Soft",
            "taxta": "Roofy",
            "mus": "Strong",
            "yen": "light",
            "qu": "Comfortable",
            "kichik": "Small",
            "bor": "Have",
            "mahsulotlar": "existing products",
            "foo": "Follow and visit us on social media as well Our showroom in Brussels.",
            "biza": "About Us",
            "ijod": "Welcome to our world of creativity and innovation. We believe in providing the best solutions for our users through simple, effective and beautiful designs. Our team is dedicated to making your experience smooth and memorable.",
            "missiya": "Our Mission",
            "servis": "Our mission is to provide a great user experience by making technology accessible to everyone. We aim to help you achieve your goals and dreams with our products and services.",
            "jamola": "Meet our team",
            "dir": "CEO and founder",
            "veb": "Lead Programmer",
            "contact": "Contact us",
            "do": "Do you have any questions? Fill out the form and we will get back to you soon.",
            "ism": "Name",
            "mes": "Message",
            "button": "Send Message"




        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;