import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_6 from './menu_6.png'
import rating_starts from './rating_starts.png'
import food_1 from './food_1.png'
import food_2 from './food_2.png'
import food_3 from './food_3.png'
import food_4 from './food_4.png'
import food_5 from './food_5.png'
import food_6 from './food_6.png'
import food_7 from './food_7.png'
import food_8 from './food_8.png'
import food_9 from './food_9.png'
import food_10 from './food_10.png'
import food_11 from './food_11.png'
import food_12 from './food_12.png'
import food_21 from './food_21.png'
import food_22 from './food_22.png'
import food_23 from './food_23.png'
import food_24 from './food_24.png'


import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon
}

export const menu_list = [
    {
        menu_name: "Vegano",
        menu_image: menu_1
    },
    {
        menu_name: "Omnívoro",
        menu_image: menu_2
    },
    {
        menu_name: "Nutricionista",
        menu_image: menu_3
    },
    {
        menu_name: "Vegetariano",
        menu_image: menu_6
    }
];

export const food_list = [
    {
        food_id: 1,
        food_name: "Tacos de lentejas con guacamole",
        food_image: food_1,
        food_price: 80,
        food_desc: "Deliciosos tacos de lentejas sazonadas, acompañados con guacamole fresco y tortillas de maíz.",
        food_category: "Vegano"
    },
    {
        food_id: 2,
        food_name: "Ensalada de garbanzos y quinoa",
        food_image: food_2,
        food_price: 95,
        food_desc: "Ensalada nutritiva con garbanzos, quinoa, vegetales frescos y un aderezo cítrico.",
        food_category: "Vegano"
    },
    {
        food_id: 3,
        food_name: "Ensalada de trébol",
        food_image: food_3,
        food_price: 85,
        food_desc: "Fresca ensalada de trébol con ingredientes ligeros y un toque de limón.",
        food_category: "Vegano"
    },
    {
        food_id: 4,
        food_name: "Falafel al horno con tahini",
        food_image: food_4,
        food_price: 120,
        food_desc: "Crujiente falafel horneado servido con una cremosa salsa tahini.",
        food_category: "Vegano"
    },
    {
        food_id: 5,
        food_name: "Pollo al limón con verduras",
        food_image: food_5,
        food_price: 140,
        food_desc: "Pechuga de pollo jugosa al limón acompañada de verduras al vapor.",
        food_category: "Omnívoro"
    },
    {
        food_id: 6,
        food_name: "Filete de res con puré de papa",
        food_image: food_6,
        food_price: 220,
        food_desc: "Filete de res a la parrilla servido con puré de papa y espárragos salteados.",
        food_category: "Omnívoro"
    },
    {
        food_id: 7,
        food_name: "Tacos de pescado",
        food_image: food_7,
        food_price: 110,
        food_desc: "Tacos de filete de pescado empanizado con salsa de aguacate y ensalada.",
        food_category: "Omnívoro"
    },
    {
        food_id: 8,
        food_name: "Chili con carne",
        food_image: food_8,
        food_price: 120,
        food_desc: "Guiso de carne molida con frijoles, especias y un toque de picante.",
        food_category: "Omnívoro"
    },
    {
        food_id: 9,
        food_name: "Ensalada mediterránea",
        food_image: food_9,
        food_price: 95,
        food_desc: "Fresca mezcla de lechugas, tomate, pepino, aceitunas y queso feta, con aderezo de aceite de oliva.",
        food_category: "Nutricionista"
    },
    {
        food_id: 10,
        food_name: "Filete de salmón con quinoa",
        food_image: food_10,
        food_price: 180,
        food_desc: "Salmón al horno acompañado de quinoa cocida y vegetales al vapor.",
        food_category: "Nutricionista"
    },
    {
        food_id: 11,
        food_name: "Tazón de avena con frutas",
        food_image: food_11,
        food_price: 70,
        food_desc: "Avena cocida con leche de almendra, frutas frescas y un toque de canela.",
        food_category: "Nutricionista"
    },
    {
        food_id: 12,
        food_name: "Wrap de pollo y espinacas",
        food_image: food_12,
        food_price: 85,
        food_desc: "Wrap integral relleno de pollo asado, espinacas frescas y un toque de mostaza.",
        food_category: "Nutricionista"
    },
    {
        food_id: 21,
        food_name: "Champiñón al ajo",
        food_image: food_21,
        food_price: 14,
        food_desc: "La comida proporciona nutrientes esenciales para la salud y el bienestar general",
        food_category: "Vegetariano"
    },
    {
        food_id: 22,
        food_name: "Coliflor frita",
        food_image: food_22,
        food_price: 70,
        food_desc: "Crujientes trozos de coliflor frita, perfectos para acompañar cualquier platillo o disfrutar como snack.",
        food_category: "Vegetariano Puro"
    },
    {
        food_id: 23,
        food_name: "Pulao de vegetales mixtos",
        food_image: food_23,
        food_price: 55,
        food_desc: "Arroz sazonado con una mezcla de vegetales frescos, ideal para una comida ligera y saludable.",
        food_category: "Vegetariano Puro"
    },
    {
        food_id: 24,
        food_name: "Calabacín con arroz",
        food_image: food_24,
        food_price: 60,
        food_desc: "Delicioso calabacín salteado servido con arroz integral, un platillo nutritivo y bajo en calorías.",
        food_category: "Vegetariano Puro"
    }
    
];
