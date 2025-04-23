import { markRaw } from "vue";
import TheDetaildaychuyen from "../../components/DetailCatagory/Detaildaychuyen/TheDetaildaychuyen.vue";
import TheDetailnhan from "../../components/DetailCatagory/DetailNhan/TheDetailnhan.vue";
import TheDetailvonglac from "../../components/DetailCatagory/DetailVongLac/TheDetailVongLac.vue";
import TheDetailBongTai from "../../components/DetailCatagory/DetailBongTai/TheDetailBongTai.vue";
import TheDetailXuyenXo from "../../components/DetailCatagory/DetailXuyenXo/TheDetailXuyenXo.vue";
import TheDetailTrangSucBo from "../../components/DetailCatagory/DetailTrangSucBo/TheDetailTrangSucBo.vue";
import TheDetailTrangSucDoi from "../../components/DetailCatagory/DetailTrangSucDoi/TheDetailTrangSucDoi.vue";
import TheDetailPhongThuy from "../../components/DetailCatagory/DetailPhongThuy/TheDetailPhongThuy.vue";
import TheDetailQuaTang from "../../components/DetailCatagory/DetailQuaTang/TheDetailQuaTang.vue";
import TheDetailPhuKien from "../../components/DetailCatagory/DetailPhuKien/TheDetailPhuKien.vue";

const constants = {
  ListTomLuoc: [
    {
      icon: "/src/assets/img/uudai1.png",
      title: "CUSTOMER SATISFACTION",
      detail:
        "Customer satisfaction is our top priority in every thought and action.",
    },
    {
      icon: "/src/assets/img/uudai2.png",
      title: "PREMIUM QUALITY",
      detail: "All products are designed and crafted by top artisans.",
    },
    {
      icon: "/src/assets/img/uudai3.png",
      title: "EASY RETURNS",
      detail: "Return products within 10 days. Get a refund if not satisfied.",
    },
    {
      icon: "/src/assets/img/uudai4.png",
      title: "DEDICATED SUPPORT",
      detail:
        "All your questions will be answered thoroughly by our consultants.",
    },
  ],
  ListInfor: [
    {
      icon: "fas fa-mobile-screen-button",
      title: "0775751954 (Main)",
    },
    {
      icon: "fas fa-mobile-screen-button",
      title: "0775751954 (Secondary)",
    },
    {
      icon: "far fa-envelope",
      title: "duhc1@vmogroup.com",
    },
    {
      icon: "far fa-map",
      title: "Hoai Duc, Hanoi, Vietnam",
    },
    {
      icon: "far fa-clock",
      title: "Mon - Sun: 8:00 AM - 12:00 AM",
    },
  ],
  ListCNC: [
    { icon: "fab fa-facebook", src: "https://www.facebook.com" },
    { icon: "fab fa-instagram", src: "https://www.instagram.com" },
    { icon: "fab fa-twitter", src: "https://www.twitter.com" },
    { icon: "fab fa-youtube", src: "https://www.youtube.com" },
  ],
  ListServies: [
    {
      title: "CUSTOMER SERVICES",
      service: [
        "Terms and Conditions",
        "Return and Refund Policy",
        "Shipping Policy",
        "Privacy Policy",
        "Online Shopping Guide",
      ],
    },
    {
      title: "USAGE TIPS",
      service: [
        "Why choose high-quality silver?",
        "How to clean silver jewelry at home",
        "Differences between S925, S999 silver",
        "Benefits of silver",
        "How to maintain silver jewelry",
      ],
    },
    {
      title: "GENERAL INFORMATION",
      service: [
        "Jewelry News",
        "Membership Benefits",
        "Affiliate Program",
        "Review Rewards",
        "Thank You Gifts",
        "Contact Us",
      ],
    },
    {
      title: "FEEDBACK",
      service: [
        "LiLi values your feedback to enhance products and services.",
        "Please don't hesitate to share your feedback with us. Thank you!",
      ],
    },
  ],
  categories: [
    { name: "Bracelets", component: markRaw(TheDetailvonglac) },
    { name: "Rings", component: markRaw(TheDetailnhan) },
    { name: "Necklaces", component: markRaw(TheDetaildaychuyen) },
    { name: "Earrings", component: markRaw(TheDetailBongTai) },
    { name: "Piercings", component: markRaw(TheDetailXuyenXo) },
    { name: "Couple Jewelry", component: markRaw(TheDetailTrangSucDoi) },
    { name: "Jewelry Sets", component: markRaw(TheDetailTrangSucBo) },
    { name: "Feng Shui", component: markRaw(TheDetailPhongThuy) },
    { name: "Gifts", component: markRaw(TheDetailQuaTang) },
    { name: "Accessories", component: markRaw(TheDetailPhuKien) },
    { name: "New Arrivals" },
  ],
  ListUuDai: [
    {
      icon: "/src/assets/img/uudai1.png",
      title: "MEMBER BENEFITS",
      detail:
        "Members receive a jewelry box worth 224,000₫ and loyalty points...",
    },
    {
      icon: "/src/assets/img/uudai2.png",
      title: "GOOGLE REVIEWS",
      detail: "Rated 5/5 stars by customers who purchased from LiLi on Google.",
    },
    {
      icon: "/src/assets/img/uudai3.png",
      title: "FREE GIFTS",
      detail: "Receive many attractive free gifts for any purchase.",
    },
    {
      icon: "/src/assets/img/uudai4.png",
      title: "AFFILIATE PROGRAM",
      detail:
        "Join to earn up to 17.5% commission on orders and many other benefits.",
    },
  ],
  ListXuhuong: [
    {
      src: "https://lili.vn/wp-content/uploads/2022/06/Lac-tay-cap-doi-bac-dinh-da-CZ-trai-tim-cua-bien-Erasmus-LILI_199377_3.jpg",
      text: "BRACELETS",
    },
    {
      src: "https://lili.vn/wp-content/uploads/2021/12/Nhan-doi-bac-hiep-si-va-cong-chua-dinh-da-CZ-LILI_819229_1.jpg",
      text: "RINGS",
    },
    {
      src: "https://lili.vn/wp-content/uploads/2022/09/Day-chuyen-doi-bac-dinh-da-CZ-hinh-ca-voi-va-buom-Brenna-LILI_123985_4.jpg",
      text: "NECKLACES",
    },
    {
      src: "https://lili.vn/wp-content/uploads/2022/03/Bong-tai-bac-nu-dinh-da-CZ-co-4-la-LILI_453329_1.jpg",
      text: "EARRINGS",
    },
    {
      src: "https://lili.vn/wp-content/uploads/2023/10/Hat-charm-bac-nu-dinh-da-CZ-hinh-cuc-hoa-mi-Eileen-LILI_085652_3.jpg",
      text: "PANDORA CHARMS",
    },
    {
      src: "https://lili.vn/wp-content/uploads/2021/08/Khuyen-ron-bac-nu-dinh-da-Zircon-LILI_868451_5.jpg",
      text: "PIERCINGS",
    },
  ],
  ListYeuThich: [
    {
      src: "https://lili.vn/wp-content/uploads/2021/12/Day-chuyen-bac-nu-phong-cach-co-trang-CZ-LILI_831944_1.jpg",
      text: "Silver necklace with CZ stones",
      hover:
        "https://lili.vn/wp-content/uploads/2021/12/Day-chuyen-bac-nu-phong-cach-co-trang-CZ-LILI_831944_2-400x400.jpg",
      price: "817,000₫",
      original:
        "https://lili.vn/wp-content/uploads/2021/12/Day-chuyen-bac-nu-phong-cach-co-trang-CZ-LILI_831944_1.jpg",
    },
    {
      src: "https://lili.vn/wp-content/uploads/2022/07/Nhan-bac-nu-dinh-kim-cuong-Moissanite-Aidan-LILI_335168_1-400x400.jpg",
      text: "Moissanite silver ring for women",
      hover:
        "https://lili.vn/wp-content/uploads/2022/07/Nhan-bac-nu-dinh-kim-cuong-Moissanite-Aidan-LILI_335168_4-400x400.jpg",
      price: "1,145,000₫",
      original:
        "https://lili.vn/wp-content/uploads/2022/07/Nhan-bac-nu-dinh-kim-cuong-Moissanite-Aidan-LILI_335168_1-400x400.jpg",
    },
    {
      src: "https://lili.vn/wp-content/uploads/2022/09/Lac-chan-bac-nu-dinh-da-CZ-hinh-co-4-la-Mildred-LILI_763298_1-400x400.jpg",
      text: "Silver anklet with CZ stones",
      hover:
        "https://lili.vn/wp-content/uploads/2022/09/Lac-chan-bac-nu-dinh-da-CZ-hình-co-4-la-Mildred-LILI_763298_2-400x400.jpg",
      price: "810,000₫",
      original:
        "https://lili.vn/wp-content/uploads/2022/09/Lac-chan-bac-nu-dinh-da-CZ-hinh-co-4-la-Mildred-LILI_763298_1-400x400.jpg",
    },
    {
      src: "https://lili.vn/wp-content/uploads/2021/08/Day-chuyen-doi-bac-hinh-ca-heo-hong-Forever-Love-LILI_528145_3-400x400.jpg",
      text: "Couple silver necklace with CZ - Forever Love",
      hover:
        "https://lili.vn/wp-content/uploads/2021/08/Day-chuyen-doi-bac-dinh-da-CZ-Forever-Love-LILI_528145_16-400x400.jpg",
      price: "1,598,000₫",
      original:
        "https://lili.vn/wp-content/uploads/2021/08/Day-chuyen-doi-bac-hinh-ca-heo-hong-Forever-Love-LILI_528145_3-400x400.jpg",
    },
    {
      src: "https://lili.vn/wp-content/uploads/2022/06/Nhan-cap-doi-bac-dinh-kim-cuong-Moissanite-Theophilus-LILI_672438_1-400x400.jpg",
      text: "Couple silver ring with Moissanite - Theophilus",
      hover:
        "https://lili.vn/wp-content/uploads/2022/06/Nhan-cap-doi-bac-dinh-kim-cuong-Moissanite-Theophilus-LILI_672438_4-400x400.jpg",
      price: "1,346,000₫",
      original:
        "https://lili.vn/wp-content/uploads/2022/06/Nhan-cap-doi-bac-dinh-kim-cuong-Moissanite-Theophilus-LILI_672438_1-400x400.jpg",
    },
    {
      src: "https://lili.vn/wp-content/uploads/2022/03/Bong-tai-bac-nu-dinh-da-CZ-co-4-la-LILI_453329_1-400x400.jpg",
      text: "Silver earrings with CZ - Four-leaf clover",
      hover:
        "https://lili.vn/wp-content/uploads/2022/03/Bong-tai-bac-nu-dinh-da-CZ-co-4-la-LILI_453329_1-400x400.jpg",
      price: "601,000₫",
      original:
        "https://lili.vn/wp-content/uploads/2022/03/Bong-tai-bac-nu-dinh-da-CZ-co-4-la-LILI_453329_1-400x400.jpg",
    },
    {
      src: "https://lili.vn/wp-content/uploads/2020/11/vong-tay-bac-925-dinh-pha-le-swarovski-1-400x400.jpg",
      text: "Silver bracelet with Swarovski crystal - Heart of the Sea",
      hover:
        "https://lili.vn/wp-content/uploads/2020/11/vong-tay-bac-925-dinh-pha-le-swarovski-1-400x400.jpg",
      price: "901,000₫",
      original:
        "https://lili.vn/wp-content/uploads/2020/11/vong-tay-bac-925-dinh-pha-le-swarovski-1-400x400.jpg",
    },
    {
      src: "https://lili.vn/wp-content/uploads/2022/01/Lac-tay-bac-nam-mat-xich-don-gian-ngau-Cuban-Saint-Laurent-Paris-LILI_746785_38-400x400.jpg",
      text: "Men's silver bracelet - Cuban chain",
      hover:
        "https://lili.vn/wp-content/uploads/2022/01/Lac-tay-bac-nam-mat-xich-don-gian-ngau-Cuban-Saint-Laurent-Paris-LILI_746785_30-400x400.jpg",
      price: "3,066,000₫",
      original:
        "https://lili.vn/wp-content/uploads/2022/01/Lac-tay-bac-nam-mat-xich-don-gian-ngau-Cuban-Saint-Laurent-Paris-LILI_746785_38-400x400.jpg",
    },
  ],
  ListSale: [
    {
      src: "https://lili.vn/wp-content/uploads/2021/01/Day-chuyen-bac-nu-lien-mat-ma-vang-dinh-da-CZ-trai-tim-Double-LILI_583553_50-400x400.jpg",
      text: "Silver necklace with gold-plated CZ heart",
      hover:
        "https://lili.vn/wp-content/uploads/2021/01/Day-chuyen-bac-nu-lien-mat-ma-vang-dinh-da-CZ-trai-tim-Double-LILI_583553_50-400x400.jpg",
      price: "855,000₫",
      sale: "805,000₫",
      original:
        "https://lili.vn/wp-content/uploads/2021/01/Day-chuyen-bac-nu-lien-mat-ma-vang-dinh-da-CZ-trai-tim-Double-LILI_583553_50-400x400.jpg",
    },
    {
      src: "https://lili.vn/wp-content/uploads/2021/12/Bong-tai-bac-nu-dinh-da-CZ-hinh-nhung-bong-hoa-Luu-ly-LILI_148289_30-400x400.jpg",
      text: "CZ floral earrings for women",
      hover:
        "https://lili.vn/wp-content/uploads/2021/12/Bong-tai-bac-nu-dinh-da-CZ-hinh-nhung-bong-hoa-Luu-ly-LILI_148289_34-400x400.jpg",
      price: "743,000₫",
      sale: "683,000₫",
      original:
        "https://lili.vn/wp-content/uploads/2021/12/Bong-tai-bac-nu-dinh-da-CZ-hinh-nhung-bong-hoa-Luu-ly-LILI_148289_30-400x400.jpg",
    },
    {
      src: "https://lili.vn/wp-content/uploads/2021/11/Lac-tay-bac-nu-ca-tinh-mat-xich-vuong-trai-tim-Strong-Heart-LILI_414788_1-400x400.jpg",
      text: "Silver bracelet with heart-shaped design",
      hover:
        "https://lili.vn/wp-content/uploads/2021/11/Lac-tay-bac-nu-ca-tinh-mat-xich-vuong-trai-tim-Strong-Heart-LILI_414788_2-400x400.jpg",
      price: "1,100,000₫",
      sale: "999,000₫",
      original:
        "https://lili.vn/wp-content/uploads/2021/11/Lac-tay-bac-nu-ca-tinh-mat-xich-vuong-trai-tim-Strong-Heart-LILI_414788_1-400x400.jpg",
    },
    {
      src: "https://lili.vn/wp-content/uploads/2020/12/Lac-chan-bac-dang-hat-2-lop-dinh-meo-than-tai-LILI_631735-01-400x400.jpg",
      text: "Silver anklet with double-layer design",
      hover:
        "https://lili.vn/wp-content/uploads/2020/12/Lac-chan-bac-dang-hat-2-lop-dinh-meo-than-tai-LILI_631735-021-400x400.jpg",
      price: "710,000₫",
      sale: "649,000₫",
      original:
        "https://lili.vn/wp-content/uploads/2020/12/Lac-chan-bac-dang-hat-2-lop-dinh-meo-than-tai-LILI_631735-01-400x400.jpg",
    },
    {
      src: "https://lili.vn/wp-content/uploads/2021/01/Bong-tai-bac-ma-vang-dinh-da-Zircon-hoa-hong-do-LILI_762747-04-400x400.jpg",
      text: "Gold-plated silver earrings with zircon - Rose design",
      hover:
        "https://lili.vn/wp-content/uploads/2021/01/Bong-tai-bac-nu-ma-vang-dinh-da-Garnet-hoa-hong-do-LILI_762747_18-400x400.jpg",
      price: "1,800,000₫",
      sale: "1,650,000₫",
      original:
        "https://lili.vn/wp-content/uploads/2021/01/Bong-tai-bac-ma-vang-dinh-da-Zircon-hoa-hong-do-LILI_762747-04-400x400.jpg",
    },
    {
      src: "https://lili.vn/wp-content/uploads/2021/12/Day-chuyen-bac-nu-dang-long-dong-mo-hinh-dong-vat-LILI_975577_1-400x400.jpg",
      text: "Silver necklace with hollow animal design",
      hover:
        "https://lili.vn/wp-content/uploads/2021/12/Day-chuyen-bac-nu-dang-long-dong-mo-hinh-Chuot-Mickey-LILI_975577_2-400x400.jpg",
      price: "1,043,000₫",
      sale: "981,000₫",
      original:
        "https://lili.vn/wp-content/uploads/2021/12/Day-chuyen-bac-nu-dang-long-dong-mo-hinh-dong-vat-LILI_975577_1-400x400.jpg",
    },
    {
      src: "https://lili.vn/wp-content/uploads/2021/08/Day-chuyen-Choker-bac-Magic-LILI_366642_1-400x400.jpg",
      text: "Silver choker necklace - Magic design",
      hover:
        "https://lili.vn/wp-content/uploads/2021/08/Day-chuyen-Choker-bac-Magic-LILI_366642_4-400x400.jpg",
      price: "899,000₫",
      sale: "850,000₫",
      original:
        "https://lili.vn/wp-content/uploads/2021/08/Day-chuyen-Choker-bac-Magic-LILI_366642_1-400x400.jpg",
    },
    {
      src: "https://lili.vn/wp-content/uploads/2021/12/Hop-dung-do-trang-suc-nam-nu-trang-dang-ngan-boc-da-cao-cap-LILI_611947_1-400x400.jpg",
      text: "Premium leather jewelry box",
      hover:
        "https://lili.vn/wp-content/uploads/2021/12/Hop-dung-do-trang-suc-nam-nu-trang-dang-ngan-boc-da-cao-cap-LILI_611947_1-400x400.jpg",
      price: "930,000₫",
      sale: "890,000₫",
      original:
        "https://lili.vn/wp-content/uploads/2021/12/Hop-dung-do-trang-suc-nam-nu-trang-dang-ngan-boc-da-cao-cap-LILI_611947_1-400x400.jpg",
    },
  ],

  detailbongtai: [
    {
      tilte: "Search Trends",
      details: ["Silver earrings for women", "Silver earrings for men"],
    },
    { tilte: "Material", details: ["Silver", "Gemstones", "Pearls", "Gold"] },
    { tilte: "Gender", details: ["Women", "Men"] },
  ],
  detailvonglacs: [
    {
      tilte: "Search Trends",
      details: [
        "Silver bracelets for women",
        "Silver bracelets for men",
        "Couple silver bracelets",
        "Silver anklets for women",
        "Pandora charms - silver beads",
      ],
    },
    {
      tilte: "Type",
      details: ["Hand bracelets", "Anklets", "Pandora charms"],
    },
    { tilte: "Material", details: ["Silver", "Gemstones", "Pearls", "Gold"] },
    { tilte: "Gender", details: ["Women", "Men", "Couples"] },
  ],
  detailnhan: [
    {
      tilte: "Search Trends",
      details: [
        "Silver rings for women",
        "Silver rings for men",
        "Couple silver rings",
      ],
    },
    { tilte: "Material", details: ["Silver", "Gemstones", "Pearls", "Gold"] },
    { tilte: "Gender", details: ["Women", "Men", "Couples"] },
  ],
  detaildaychuyen: [
    {
      tilte: "Search Trends",
      details: [
        "Silver necklaces for women",
        "Silver necklaces for men",
        "Couple silver necklaces",
      ],
    },
    {
      tilte: "Type",
      details: ["Necklaces with pendants", "Pendant only", "Plain necklaces"],
    },
    { tilte: "Material", details: ["Silver", "Gemstones", "Pearls", "Gold"] },
    { tilte: "Gender", details: ["Women", "Men", "Couples"] },
  ],
  detailphongthuy: [
    { tilte: "Fate", details: ["Metal", "Wood", "Water", "Fire", "Earth"] },
    {
      tilte: "Type",
      details: ["Bracelets", "Necklaces", "Rings", "Earrings"],
    },
    { tilte: "Material", details: ["Silver", "Gemstones", "Gold"] },
  ],
  detailphukien: [
    {
      tilte: "Type",
      details: [
        "Jewelry boxes",
        "Gift boxes",
        "Jewelry cleaning tools",
        "Other accessories",
      ],
    },
    { tilte: "Material", details: ["Silver", "Wood", "Synthetic", "Gold"] },
    { tilte: "Gender", details: ["Women", "Men"] },
    {
      tilte: "Price Range",
      details: [
        "Under 1,500,000₫",
        "1,500,000₫ - 3,000,000₫",
        "3,000,000₫ - 5,000,000₫",
        "Over 5,000,000₫",
      ],
    },
  ],
  detailquatang: [
    {
      tilte: "Gift Ideas",
      details: ["For him", "For her", "For dad", "For mom", "For kids"],
    },
    { tilte: "Purpose", details: ["Birthday", "Anniversary", "Appreciation"] },
    {
      tilte: "Price Range",
      details: [
        "Under 1,500,000₫",
        "1,500,000₫ - 3,000,000₫",
        "3,000,000₫ - 5,000,000₫",
        "Over 5,000,000₫",
      ],
    },
  ],
  detailtrangsucbo: [
    { tilte: "Material", details: ["Silver", "Gemstones", "Pearls", "Gold"] },
    { tilte: "Gender", details: ["Women", "Men"] },
    {
      tilte: "Price Range",
      details: [
        "Under 1,500,000₫",
        "1,500,000₫ - 3,000,000₫",
        "3,000,000₫ - 5,000,000₫",
        "Over 5,000,000₫",
      ],
    },
  ],
  detailtrangsucdoi: [
    { tilte: "Type", details: ["Bracelets", "Rings", "Necklaces"] },
    { tilte: "Material", details: ["Silver", "Gemstones", "Pearls", "Gold"] },
    {
      tilte: "Price Range",
      details: [
        "Under 1,500,000₫",
        "1,500,000₫ - 3,000,000₫",
        "3,000,000₫ - 5,000,000₫",
        "Over 5,000,000₫",
      ],
    },
  ],
  detailxuyenxo: [
    {
      tilte: "Type",
      details: [
        "Belly piercings",
        "Nose piercings",
        "Lip piercings",
        "Eyebrow piercings",
        "Earrings",
      ],
    },
    { tilte: "Material", details: ["Silver", "Gemstones", "Pearls", "Gold"] },
    { tilte: "Gender", details: ["Women", "Men"] },
    {
      tilte: "Price Range",
      details: [
        "Under 1,500,000₫",
        "1,500,000₫ - 3,000,000₫",
        "3,000,000₫ - 5,000,000₫",
        "Over 5,000,000₫",
      ],
    },
  ],
  detailbonus: [
    {
      src: "https://lili.vn/wp-content/uploads/2020/10/Anh-hop-san-pham-LiLi-Final.jpg",
      text: "Premium packaging with meaning",
    },
    {
      src: "https://lili.vn/wp-content/uploads/2022/05/Hop-dung-trang-suc-boc-da-vuong-mien-Royal-LILI_719713_1-400x400.jpg",
      text: "Luxury royal jewelry box",
    },
    {
      src: "https://lili.vn/wp-content/uploads/2020/10/Hop-dung-do-trang-suc-mini-nam-nu-trang-boc-da-Zelda-LILI_878639_10-400x400.jpg",
      text: "Velvet multi-purpose jewelry box",
    },
    {
      src: "https://lili.vn/wp-content/uploads/2020/10/Qua-tang-bi-mat-dac-biet-5.png",
      text: "Special secret gift",
    },
  ],
};

export default constants;
