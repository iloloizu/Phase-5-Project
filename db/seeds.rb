# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(username: "ilolo", password: "1234", address: "123 Main Street, Sugar Land, TX", email: "iloloizu97@gmail.com", size: "11", color1: "#85C1E9" , color2: "#8E44AD", phone: "8176820158")

s1 = Sneaker.create(brand: "Nike", name:"Nike Dunk Low", colorway: "Medium Curry", description: "Before cementing its status as a streetwear icon and skateboarding staple,
    the Dunk began its journey on the hardwood as Nike's first-team basketball shoe before cementing its status as a sportswear legend. This low-top 
    edition of the timeless silhouette features neutral hues of sail and fossil with spicy hits of medium curry.", 
    price: 110, image:"https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/6c13023d-1771-4db5-b651-9c1798185268/dunk-low-medium-curry-release-date.jpg",
    link: "https://www.nike.com/launch/t/dunk-low-medium-curry" )

s2 = Sneaker.create(brand: "Nike", name:"Nike x sacai VaporWaffle", colorway: "Black and White", description: "This one is for the visionaries—those who recognize the importance of yesterday when building a better tomorrow. Combining the innovative Vaporfly with the classic Pegasus from 1983, the Nike x sacai VaporWaffle doubles up on the details, merging the past and future of Running. A comfortable, secure upper combines with the classic waffle outsole for a fit and feel you love with the boundary-pushing look of sacai.", 
    price: 180, image:"https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/26292e87-b63b-4e8c-b889-d1da841288fe/nike-x-sacai-vaporwaffle-black-and-white-release-date.jpg",
    link: "https://www.nike.com/launch/t/sacai-vaporwaffle-black-and-white" )

s3= Sneaker.create(brand: "Nike", name:"Nike Air Max 1/97", colorway: "Sean Wotherspoon", description: "As one of the world's foremost collectors of vintage shoes and apparel, Sean Wotherspoon created the Air Max 1/97 SW for 2017's Vote Forward competition—and won. The voter-approved design channels his passion for '80s culture while drawing influence from vintage corduroy caps, his native Virginia and LA, and his two favorite sneakers: the Air Max 1 and the Air Max 97.", 
    price: 1350, image:"https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/ajklcmz0ixdnqbh5a9zf/nike-air-max-197-sean-wotherspoon-release-date.jpg",
    link: "https://stockx.com/nike-air-max-1-97-sean-wotherspoon-na")

s4 = Sneaker.create(brand: "Jordan", name:"Air Jordan 1", colorway: "Turbo Green", description: "Taking inspiration from the 90s and Charlotte Hornets, the Air Jordan I “Flight Nostalgia” pays tribute to the city for hosting its first NBA All Star game. Delivering a vintage aesthetic, this Air Jordan I arrives in a suede and leather upper, with the text “SP 19 AIR JORDAN 1 HIGH OG” engraved below the swoosh.", 
    price: 160, image:"https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/renl4oohpqduft3vccwf/air-jordan-1-turbo-green-white-light-smoke-grey-release-date.jpg",
    link: "https://www.nike.com/launch/t/air-jordan-1-turbo-green-white-light-smoke-grey" )

s4 = Sneaker.create(brand: "Jordan", name:"SB x Air Jordan 1", colorway: "LA to Chicago", description: "Basketball was not the only culture affected by the Air Jordan I in 1985. As icons like Lance Mountain began skateboarding in the AJI, it became a part of skate culture. This year, the SB x AJI 'Defiant Is' pays homage to parallel cities in Jordan Brand and skateboarding history. 'LA to Chicago' brings together two cities who kicked off the origins of modern-day skateboarding and greatness while tying in iconic colour references.", 
    price: 249, image:"https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/hc12ejzax9vihtldhvmz/air-jordan-1-la-to-chicago.jpg",
    link: "https://stockx.com/air-jordan-1-sb-la-to-chicago" )

s4 = Sneaker.create(brand: "Jordan", name:"Jordan 11 Retro", colorway: "Concord (2018)", description: "This Iconic Jordan 11 colorway is showcasing a white upper with black accents, white midsole, and a freezing cold translucent sole. These sneakers released in December 2018 and retailed for $220. Revisit the dominant legacy MJ left behind.", 
    price: 454, image:"https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/mdunlcqanp0atw14iaam/air-jordan-11-concord-release-date.jpg",
    link: "https://stockx.com/air-jordan-11-retro-concord-2018" )
# s4 = Sneaker.create(brand: "Nike", name:"", colorway: "", description: "", 
#     price: 180, image:"",
#     link: "https://stockx.com/air-jordan-11-retro-concord-2018" )

s4 = Sneaker.create(brand: "Jordan", name:"Jordan 4 Retro", colorway: "Bred (2019)", description: "This AJ 4, also known as 'Black Cement 4,' comes with a black upper plus grey accents, white midsole plus black, white and grey accents, and a red sole. These sneakers released in May 2019 and retailed for $200. Thrive in one of Jordan’s most iconic sneakers ever, so make sure you have a pair of your own.", 
    price: 600, image:"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F04%2Fair-jordan-brand-4-bred-2019-retro-stockx-0.jpg?w=960&cbr=1&q=90&fit=max",
    link: "https://stockx.com/air-jordan-4-retro-golf-bred?country=US&currencyCode=USD&size=12.5" )

s4 = Sneaker.create(brand: "New Balance", name:"New Balance 550", colorway: "Aime Leon Dore White Grey", description: "Aimè Leon Dore teamed up with New Balance to bring back the New Balance 550, a low-top basketball silhouette originally introduced in 1989 as the New Balance P550.
    The New Balance 550 Aimè Leon Dore features a white leather upper with grey cracked New Balance logos and mesh collars. A thick, woven New Balance Basketball tongue tag with ALD branding adds a custom touch. At the base, a yellowed sole provides a vintage feel.", 
    price: 370, image:"https://images.stockx.com/images/New-Balance-550-Aime-Leon-Dore-White-Grey-1.png?fit=fill&bg=FFFFFF&w=480&h=320&fm=avif&auto=compress&q=90&dpr=2&trim=color&updated_at=1607668787",
    link: "https://stockx.com/new-balance-550-aime-leon-dore-white-grey" )

s4 = Sneaker.create(brand: "adidas", name:"adidas Yeezy Boost 750", colorway: "Light Grey Glow In the Dark", description: "The Yeezy Boost 750 brings the worlds of high fashion and performance technology together effortlessly. The upper is made from a robust, luxurious suede. The sole uses adidas' famously comfortable Boost cushioning. The Yeezy Boost 750 made its debut in February of 2015, albeit in a very limited release.", 
    price: 885, image:"https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/adidas-yeezy-boost-750-glow-in-dark-hero_birldf.jpg",
    link: "https://stockx.com/adidas-yeezy-boost-750-light-grey-glow-in-the-dark" )

s4 = Sneaker.create(brand: "adidas", name:"adidas Yeezy Boost 350 V2", colorway: "Dazzling Blue", description: "The adidas Yeezy 350 V2 Dazzling Blue is reminiscent of the 2016 Yeezy 350 V2 Black Friday Pack. Instead of featuring a marbled pattern and sheer side stripe, it opts for a solid black Primeknit upper and blue side stripe with 'SPLY-350' text. At the base, a muted Boost sole offers comfort and support.", 
    price: 311, image:"https://sneakernews.com/wp-content/uploads/2021/12/adidas-YEEZY-BOOST-350-V2-DAZZLING-BLUE-0.jpg",
    link: "https://stockx.com/adidas-yeezy-boost-350-v2-dazzling-blue?country=US&currencyCode=USD&size=11&g_network=g&g_productchannel=online&g_adid=244607812448&g_campaign=OD+-+Segment+-+Sneakers+-+Adult+Sizes+-+%28US%29&g_keyword=&g_adtype=pla&g_keywordid=pla-424142573907&g_acctid=709-098-4271&g_ifcreative=&gclsrc=aw.ds&g_adgroupid=50672857117&g_productid=72765a16-0229-4e24-8c77-3abda54750f2&g_merchantid=111829866&g_partition=424142573907&g_campaignid=1032998786&g_ifproduct=product&&gclsrc=aw.ds&&utm_source=google&utm_medium=cpc&utm_campaign=OD-Segment-Sneakers-AdultSizes-(US)&utm_campaignid=1032998786&content=244607812448&keyword&gclid=CjwKCAjwxOCRBhA8EiwA0X8hi4SAlGmbdAhK0QoODePRCwFhHVRFjCIRIJFXWRk4FeIqxZp05HdPfBoCu8oQAvD_BwE" )