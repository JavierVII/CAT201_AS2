import React from "react";
import { useParams } from "react-router-dom";
import "./FoodDetails.css";  // 引入CSS文件

const FoodDetails = () => {
    const { foodId } = useParams();

    const foodDetails = {
        "asam-laksa": {
            title: "asam-laksa",
            image: `${process.env.PUBLIC_URL}/images/penang-laksa.jpg`,
            description: "Penang Laksa is a traditional Malaysian dish originating from Penang. It is a popular noodle soup known for its distinctive tangy and spicy fish-based broth. The broth is made with a variety of spices and fresh fish, featuring ingredients such as chili, ginger, lemongrass, galangal, and kaffir lime leaves.\n" +
                "\n" +
                "The noodles used in Penang Laksa are typically thin rice noodles, sometimes mixed with yellow noodles. The dish is garnished with fresh fish slices, chili, cucumber, onion, water spinach, and cilantro, topped with a dollop of shrimp paste to enhance the flavor. The unique combination of sour, spicy, and aromatic elements along with the freshness of the fish creates a stimulating and layered taste experience.\n" +
                "\n" +
                "Penang Laksa is not just a common street food but also an essential part of festive and special occasions in the region. Each family or vendor may have their unique recipe and secrets, making each bowl of Laksa distinctively flavorful. It enjoys widespread popularity and recognition both in Malaysia and in places around the world with Malaysian communities."
        },
        "char-kway-teow": {
            title: "char-kway-teow",
            image: `${process.env.PUBLIC_URL}/images/char-kway-teow.jpg`,
            description: "Penang Char Kway Teow is a famous street food from Penang, Malaysia, beloved by locals and tourists alike. Known for its unique aroma and texture, this dish is primarily made from flat rice noodles (kway teow) stir-fried with eggs, shrimp, bean sprouts, chives, and various other ingredients. The distinctiveness of Penang Char Kway Teow lies in its seasoning, which typically includes a copious amount of garlic, chili, sweet soy sauce (a sweet Malaysian soy sauce), fish sauce, and shrimp paste, creating a mouthwatering sauce.\n" +
                "\n" +
                "During cooking, chefs typically stir-fry the ingredients quickly over high heat, which imparts a slightly charred flavor to the noodles, a technique known as \"wok hei\" or the breath of the wok, adding a special smoky nuance. The finished dish usually has a dark color, a sweet taste profile with subtle hints of spiciness and umami.\n" +
                "\n" +
                "Penang Char Kway Teow is not only a staple of Penang street cuisine but is also popular in other parts of Malaysia and Malaysian restaurants abroad. It's a perfect meal for lunch or dinner, offering a rich sensory and nutritious experience."
        },
        "nasi-lemak": {
            title: "nasi-lemak",
            image: `${process.env.PUBLIC_URL}/images/nasi-lemak.jpg`,
            description: "Penang Nasi Lemak is a beloved Malaysian dish, often enjoyed as a hearty breakfast or satisfying meal at any time of the day. This iconic dish is celebrated for its rich and aromatic flavors, which are achieved by cooking rice in coconut milk, infusing it with a creamy texture and fragrant coconut aroma. It's typically served with a variety of side dishes that complement the rice perfectly.\n" +
                "\n" +
                "The essential components of Penang Nasi Lemak include the fragrant coconut rice, crispy anchovies, roasted peanuts, hard-boiled or fried egg, slices of cucumber, and a spicy chili paste known as 'sambal'. This sambal, made from a blend of chili peppers, shrimp paste, garlic, and other ingredients, is the heart of the dish, offering a fiery kick that contrasts with the richness of the coconut rice.\n" +
                "\n" +
                "In Penang, Nasi Lemak can also be accompanied by a choice of other side dishes like fried chicken, squid, or fish, making it a versatile dish that caters to different tastes. The combination of all these flavors and textures—creamy, crunchy, spicy, and savory—makes Penang Nasi Lemak a delightful and balanced meal, representing the culinary diversity and cultural richness of Malaysia."
        },
        "teochew-cendol": {
            title: "Penang Chaozhou Jian Dui ",
            image: `${process.env.PUBLIC_URL}/images/teochew-cendol.jpg`,
            description: "Penang Chaozhou Jian Dui (Teochew Jian Dui) is a popular snack in Penang, Malaysia, originating from the Teochew cuisine of the Chinese community. Jian Dui, also known as sesame balls, is a deep-fried pastry made from glutinous rice flour, coated with sesame seeds on the outside, and commonly filled with a sweet paste.\n" +
                "\n" +
                "In Penang, the Chaozhou Jian Dui stands out because of its traditional preparation and filling choices. The most typical filling is sweetened red bean paste, but variations might include lotus seed paste or even a mix of crushed peanuts and sugar. The dough is shaped into balls, rolled in sesame seeds, and then deep-fried until they expand and the exterior turns golden and crispy. The result is a delightful contrast between the crunchy exterior and the soft, sweet interior.\n" +
                "\n" +
                "This snack is not only a favorite during the Chinese New Year celebrations but is also a common sight at local markets and street food stalls around Penang. Its sweet flavor and satisfying texture make it a perfect treat to enjoy at any time of the day. Chaozhou Jian Dui is a testament to the rich cultural tapestry of Penang, where traditional Chinese culinary practices continue to thrive and evolve."
        },
        "curry-noodles": {
            title: "curry-noodles",
            image: `${process.env.PUBLIC_URL}/images/curry-noodles.jpg`,
            description: "Penang Curry Mee is a quintessential dish from Penang, Malaysia, celebrated for its complex and flavorful curry soup base. This noodly delight is a staple in Malaysian cuisine, particularly famous in Penang for its unique blend of spices that create a rich and creamy broth.\n" +
                "\n" +
                "The base of Penang Curry Mee consists of a coconut milk curry soup, which is aromatic and mildly spicy, infused with spices like lemongrass, galangal, shallots, and garlic. Chili paste is often added into the soup to enhance its depth of flavor and heat. The noodles used in this dish are usually a combination of yellow noodles and vermicelli, providing a satisfying mix of textures.\n" +
                "\n" +
                "Accompaniments in Curry Mee include tofu puffs, which absorb the flavorful broth, prawns, cuttlefish, and cockles for a seafood touch, and boiled eggs, which add richness to the dish. Bean sprouts and mint leaves are also common garnishes that add a crunch and freshness, balancing the creamy curry soup.\n" +
                "\n" +
                "Penang Curry Mee is not just a meal; it's an experience of bold flavors and diverse textures, reflecting the multicultural culinary landscape of Malaysia. This dish is a favorite in local hawker centers, where it's enjoyed by locals and tourists alike, eager to taste the authentic flavors of Penang."
        },
        "teh-tarik": {
            title: "teh-tarik",
            image: `${process.env.PUBLIC_URL}/images/teh-tarik.jpg`,
            description: "Penang Teh Tarik, commonly known as \"pulled tea,\" is a popular Malaysian beverage that has become a cultural icon in Penang and across Malaysia. This hot milk tea is celebrated for its dramatic preparation and deliciously creamy taste.\n" +
                "\n" +
                "Ingredients and Preparation: Teh Tarik combines strong black tea with condensed milk and sometimes sugar, which is vigorously \"pulled\" between two containers to mix the ingredients thoroughly and to create a light, frothy top. This pulling action, performed with skillful, often flamboyant arm movements, not only cools the tea down to a drinkable temperature but also enhances its flavor by aerating the mixture.\n" +
                "\n" +
                "Cultural Significance: The name \"Teh Tarik\" literally means \"pulled tea\" in Malay, referring to the unique preparation method. It is a staple at local coffee shops known as \"kopitiams\" and \"mamak\" stalls (Indian Muslim eateries), where it is enjoyed throughout the day. Teh Tarik serves not only as a refreshing beverage but also as a social drink, often accompanying leisurely chats among friends and colleagues.\n" +
                "\n" +
                "Flavor Profile: The taste of Teh Tarik is rich and creamy, with a balanced sweetness that complements its robust tea flavor. The frothy top adds a smooth texture that makes each sip enjoyable.\n" +
                "\n" +
                "In Penang, Teh Tarik is more than just a beverage; it is part of the social fabric, enjoyed by a diverse population, reflecting the multicultural makeup of the region. Whether you're starting your day or winding down in the evening, a cup of Teh Tarik is always a comforting choice."
        }
    };

    const food = foodDetails[foodId];

    return (
        <div className="food-details">
            {food ? (
                <div>
                    <h2>{food.title}</h2>
                    <img src={food.image} alt={food.title} />
                    <p>{food.description}</p>
                </div>
            ) : (
                <p>No relevant food information found.</p>
            )}
        </div>
    );
};

export default FoodDetails;