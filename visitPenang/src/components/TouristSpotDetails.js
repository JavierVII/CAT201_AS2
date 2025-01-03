import React from "react";
import { useParams } from "react-router-dom";
import "./TouristSpotDetails.css"; // 引入CSS文件

const TouristSpotDetails = () => {
    const { spotId } = useParams();

    const spotDetails = {
        "penang-hill": {
            title: "Penang Hill",
            image: "/images/penang-hill.jpg",
            description: "Penang Hill, locally known as Bukit Bendera, is one of the most popular attractions in Penang, Malaysia. Situated about 6 kilometers from the city center of George Town, it stands as a colonial hill station established by the British during their time in Malaysia. Rising 833 meters above sea level, it offers a refreshing getaway with cooler temperatures compared to the city below.\n" +
                "\n" +
                "The hill is accessible via the Penang Hill Railway, a funicular system that climbs the hill from Air Itam. This railway, one of the oldest in Asia, provides a scenic ride to the summit in about five to ten minutes, depending on the train's speed. At the top, visitors are treated to breathtaking panoramic views of George Town, the east coast of Penang Island, and even parts of the mainland on clear days.\n" +
                "\n" +
                "Penang Hill is not only about the views; it's also rich in history and biodiversity. The summit hosts a range of colonial-era buildings, including David Brown’s Restaurant and bungalows that date back to the late 18th century. These structures reflect the British architectural style and offer a glimpse into the colonial past of Penang.\n" +
                "\n" +
                "In terms of natural beauty, the hill is surrounded by lush tropical rainforest that is home to a diverse array of flora and fauna. The habitat supports a variety of species, some of which are endemic to the area. Trails like the Habitat Walk offer guided nature tours that allow visitors to explore the rich biodiversity of the hill.\n" +
                "\n" +
                "Additionally, Penang Hill features modern attractions such as the Skywalk, a cantilevered viewing platform that offers visitors the thrill of walking above the trees while enjoying unobstructed views of the island and beyond.\n" +
                "\n" +
                "Whether you are a history enthusiast, nature lover, or just looking for a place to relax and take in the views, Penang Hill offers a rich blend of attractions that make it a must-visit destination in Penang.\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n"
        },
        "george-town": {
            title: "George-town",
            image: "/images/george-town.jpg",
            description: "George Town, the capital city of the Malaysian state of Penang, is one of the most interesting and vibrant cities in Southeast Asia. Founded in 1786 by British trader Francis Light, it's renowned for its rich history, well-preserved colonial architecture, and a multicultural population predominantly consisting of Chinese, Malay, and Indian communities.\n" +
                "\n" +
                "Historical Significance: George Town was one of the first British settlements in Southeast Asia and played a significant role in the spread of British colonial influence in the region. Named after King George III of Britain, it became a bustling port that attracted traders from around the world, contributing to its diverse cultural heritage.\n" +
                "\n" +
                "Cultural Heritage: In 2008, George Town was inscribed as a UNESCO World Heritage Site along with Malacca City due to its unique architectural and cultural townscape, which is unparalleled anywhere in East and Southeast Asia. The city is celebrated for its well-preserved heritage buildings and old town center. Streets like Armenian Street and Chulia Street offer glimpses into the past with their traditional shophouses and colonial buildings.\n" +
                "\n" +
                "Cuisine: George Town is famous for its diverse and flavorful food, which reflects its multicultural history. Street food in Penang is considered some of the best in Malaysia and includes dishes like Char Kway Teow, Penang Laksa, and Nasi Kandar. The city's food culture has been shaped by Malay, Chinese, Indian, and European influences, making it a gastronomic paradise.\n" +
                "\n" +
                "Art and Festivals: The city is also known for its vibrant arts scene and numerous festivals. Its walls are adorned with famous street art, particularly mural paintings that vividly capture the essence of local life. Major festivals such as the George Town Festival and Penang Chinese New Year highlight the city's artistic and cultural diversity, drawing visitors from across the globe.\n" +
                "\n" +
                "Economy: Historically a trading port, George Town today has a diversified economy with tourism as a major economic driver. However, the city is also emerging as a hub for education, finance, and technology in the region, underscored by initiatives like the Penang Digital Library that push towards modernization and digital industries.\n" +
                "\n" +
                "George Town expertly combines the charm of its colonial past with the vibrancy of modern urban living, making it a unique and dynamic city to visit or reside in."
        },
        "kek-lok-si": {
            title: "Kek Lok Si",
            image: "/images/kek-lok-si-temple.jpg",
            description: "Kek Lok Si Temple, located in Air Itam, Penang, stands as one of the largest and most significant Buddhist temples in Southeast Asia. Founded in 1890 by the devout Chinese Buddhist, Beow Lean, the temple began as a modest monastery on a hilltop overlooking George Town and has since expanded into a sprawling complex of prayer halls, pavilions, and bell towers.\n" +
                "\n" +
                "Architectural Splendor: Kek Lok Si is renowned for its stunning architecture, which blends Chinese, Thai, and Burmese design elements, reflecting the pan-Asian spirit of Buddhism in the region. The temple is dominated by the towering Pagoda of Ten Thousand Buddhas, a seven-tiered structure that combines a Chinese octagonal base with a middle tier of Thai design, and a Burmese crown, symbolizing the harmony among different Buddhist cultural influences.\n" +
                "\n" +
                "Spiritual Significance: The temple serves as a center of Chinese culture and Buddhist teaching. During major festivals like Chinese New Year and Vesak Day, it becomes a focal point for celebrations, drawing thousands of devotees and tourists who come to witness the rituals, enjoy the vibrant displays, and participate in the communal prayers.\n" +
                "\n" +
                "Tourist Attraction: Visitors to Kek Lok Si are greeted by the imposing statue of Kuan Yin, the Goddess of Mercy, which was completed in 2002. Standing at 30.2 meters, it is one of the tallest statues of its kind in the world and a testament to the temple's ongoing development and importance as a pilgrimage site. The temple also features a 'Liberation Pond' (Tortoise Pond) where devotees release creatures as an act of merit, which is believed to bring good fortune and spiritual growth.\n" +
                "\n" +
                "Cultural Impact: The temple not only serves as a place of worship but also as a cultural hub, where traditional Chinese arts and practices are preserved and celebrated. It hosts various cultural performances and religious activities throughout the year, contributing significantly to the cultural tapestry of Penang.\n" +
                "\n" +
                "Kek Lok Si Temple beautifully encapsulates the essence of cultural fusion and religious devotion, making it a beacon of spiritual heritage and architectural beauty in Malaysia. Its presence enhances the cultural richness of George Town, making it a cherished landmark that attracts both pilgrims and tourists from around the world.\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n"
        },
        "nyonya-museum": {
            title: "Nyonya-museum",
            image: "/images/nyonya-museum.jpg",
            description: "The Pinang Peranakan Mansion, often referred to as the Nyonya Museum, is a vibrant showcase of the culture and heritage of the Peranakan, or Straits Chinese, community of Penang. Housed in a restored mansion that once belonged to a wealthy Peranakan merchant, this museum in George Town is both a tribute to and a preservation site for the unique fusion of Chinese, Malay, and colonial influences that define the Peranakan lifestyle.\n" +
                "\n" +
                "Historical Background: The mansion itself is a splendid example of 19th-century architecture, featuring the eclecticism typical of the colonial era but with a distinct Peranakan flair. The building is adorned with intricate carvings, gilded woodwork, and hand-painted tiles, all hallmarks of the affluent homes of Peranakan families of the time.\n" +
                "\n" +
                "Cultural Exhibits: Inside, the museum is filled with over a thousand antiques and collectibles, which were part of everyday Peranakan life. These include traditional attire, beaded slippers, handcrafted jewelry, ornate furniture, and ceremonial items, all elaborately designed and painstakingly preserved. The museum's layout and its exhibits offer a window into the opulent lifestyle and cultural practices of the Peranakans, including their unique wedding ceremonies and the elaborate feasts they are known for.\n" +
                "\n" +
                "Educational Tours: Guided tours are available, providing visitors with in-depth information about the history of the Peranakans in Penang, their social customs, and their hybrid cuisine, which blends Chinese ingredients with Malay spices and cooking techniques. These tours are essential for understanding the complex identity and rich heritage of the Peranakan community.\n" +
                "\n" +
                "Cultural Impact: The museum not only serves as a center for cultural preservation but also plays a crucial role in educating both locals and tourists about the significant contributions of the Peranakan community to the cultural mosaic of Malaysia. It's a place where history is both displayed and lived, with occasional cultural performances and even themed dinners that allow visitors to experience Peranakan culture first-hand.\n" +
                "\n" +
                "The Pinang Peranakan Mansion is a captivating cultural institution that not only preserves but also celebrates the Peranakan heritage, making it a must-visit for anyone interested in the history and culture of Penang. It exemplifies how the Peranakans have shaped, and been shaped by, the Southeast Asian region."
        },
        "chew-jetty": {
            title: "chew-jetty",
            image: "/images/chew-jetty.jpg",
            description: "Chew Jetty, part of the Clan Jetties of George Town, is a unique historical site that offers a glimpse into the lives of Chinese settlers in Penang. It's one of several waterfront settlements established by Chinese immigrants in the late 19th century and is named after the Chew clan, who were among the first to build homes on stilts along the Penang shoreline.\n" +
                "\n" +
                "Historical Significance: The jetties were initially established as a part of George Town's bustling port, providing easy access for loading and unloading goods. Over time, these jetties transformed into close-knit residential communities. Chew Jetty, in particular, has become notable for its well-preserved wooden houses and rustic, over-water walkways.\n" +
                "\n" +
                "Cultural Heritage: Chew Jetty remains a vibrant example of the living heritage of Penang’s Chinese community. The jetty is still home to descendants of the original Chew clan, maintaining their traditional way of life, albeit adapted to modern times. The stilt houses, many of which are over a century old, line a wooden walkway that runs down the center of the jetty, leading to a temple at its end.\n" +
                "\n" +
                "Visitor Experience: Tourists visiting Chew Jetty can explore the wooden pathway lined with residences, some of which have been converted into shops selling souvenirs, handicrafts, and snacks. The site is particularly picturesque at sunset when the fading light casts long shadows and illuminates the wooden structures in a warm glow.\n" +
                "\n" +
                "Cultural Activities: Chew Jetty is not only a residential area but also a cultural site that hosts various Chinese festivals and celebrations. During events like the Chinese New Year and the Mid-Autumn Festival, the jetty is adorned with lanterns and decorations, and visitors can witness traditional festivities and performances.\n" +
                "\n" +
                "Preservation Efforts: Recognized as part of the George Town UNESCO World Heritage Site, efforts have been made to preserve the authentic character of Chew Jetty while accommodating the needs of its residents and the influx of tourists. This delicate balance aims to protect the historical integrity of the site while allowing it to thrive as a living community.\n" +
                "\n" +
                "Chew Jetty is a testament to the enduring cultural traditions and communal lifestyle of the Chinese diaspora in Southeast Asia, making it a captivating stop for those exploring the rich tapestry of Penang’s multicultural history."
        },
        "batu-feringgi": {
            title: "Batu Ferringhi",
            image: "/images/batu-feringgi.jpg",
            description: "Batu Ferringhi is a popular beach destination located along the northern coast of Penang Island, Malaysia. Known for its long stretch of soft, sandy beach and vibrant night market, Batu Ferringhi offers a combination of scenic natural beauty and lively tourist activity, making it one of Penang’s most beloved spots for both relaxation and entertainment.\n" +
                "\n" +
                "Scenic Beauty: Batu Ferringhi is renowned for its stunning coastline that features miles of golden sand against a backdrop of lush green hills. The beach is ideal for a variety of water sports, including parasailing, jet skiing, and windsurfing, or simply for basking in the sun and enjoying the gentle sea breeze.\n" +
                "\n" +
                "Tourist Amenities: The area is well-equipped to cater to international tourists, boasting a range of accommodations from luxury resorts to budget hotels. These beachfront properties often provide guests with direct access to the beach and beautiful sea views. Additionally, Batu Ferringhi is home to numerous restaurants and cafes that offer everything from local Malaysian fare to international cuisine, ensuring that there’s something to suit every palate.\n" +
                "\n" +
                "Night Market: Every evening, the Batu Ferringhi Night Market comes alive along the main road running through the town. This bustling bazaar is a favorite among visitors, who can shop for local handicrafts, souvenirs, clothes, and artwork. The market is also a great place to sample street food, including local specialties and treats.\n" +
                "\n" +
                "Recreational Activities: Aside from beach activities, Batu Ferringhi offers various recreational options such as the Escape Theme Park, where adventure-seekers can enjoy eco-friendly outdoor activities like rope courses and zip-lining. The nearby Tropical Spice Garden is an eco-tourism site where visitors can learn about tropical spices and herbs in a lush, natural setting.\n" +
                "\n" +
                "Cultural Exposure: Batu Ferringhi reflects the multicultural makeup of Penang, with influences visible in its food, architecture, and daily life. The area is also a melting pot of cultures, hosting various cultural festivals and events throughout the year that celebrate the diversity of its residents and visitors.\n" +
                "\n" +
                "Accessibility and Connectivity: Batu Ferringhi is easily accessible from George Town, the capital of Penang, by road. Public buses, taxis, and rideshare services provide convenient transport options for getting to and from Batu Ferringhi, making it easy for tourists to explore other parts of the island as well.\n" +
                "\n" +
                "In summary, Batu Ferringhi offers a perfect blend of natural beauty, cultural diversity, and tourist-friendly amenities, making it an essential part of the Penang experience for travelers seeking both relaxation and adventure."
        }
    };

    const spot = spotDetails[spotId];

    return (
        <div className="tourist-spot-details">
            {spot ? (
                <div>
                    <h2>{spot.title}</h2>
                    <img src={spot.image} alt={spot.title} />
                    <p>{spot.description}</p>
                </div>
            ) : (
                <p>No relevant tourist attraction information found.</p>
            )}
        </div>
    );
};

export default TouristSpotDetails;
