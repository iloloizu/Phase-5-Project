# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(username: "ilolo", password: "1234", address: "123 Main Street, Sugar Land, TX", email: "iloloizu97@gmail.com", size: "11", color1: "#85C1E9" , color2: "#8E44AD", phone: "8176820158")

s1 = Sneaker.create(name:"Nike Dunk Low", colorway: "Medium Curry", description: "Before cementing its status as a streetwear icon and skateboarding staple,
    the Dunk began its journey on the hardwood as Nike's first-team basketball shoe before cementing its status as a sportswear legend. This low-top 
    edition of the timeless silhouette features neutral hues of sail and fossil with spicy hits of medium curry.", 
    price: 110, image:"https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/6c13023d-1771-4db5-b651-9c1798185268/dunk-low-medium-curry-release-date.jpg",
    link: "https://www.nike.com/launch/t/dunk-low-medium-curry" )

s2 = Sneaker.create(name:"Nike x sacai VaporWaffle", colorway: "Black and White", description: "This one is for the visionaries—those who recognize the importance of yesterday when building a better tomorrow. Combining the innovative Vaporfly with the classic Pegasus from 1983, the Nike x sacai VaporWaffle doubles up on the details, merging the past and future of Running. A comfortable, secure upper combines with the classic waffle outsole for a fit and feel you love with the boundary-pushing look of sacai.", 
    price: 180, image:"https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/26292e87-b63b-4e8c-b889-d1da841288fe/nike-x-sacai-vaporwaffle-black-and-white-release-date.jpg",
    link: "https://www.nike.com/launch/t/sacai-vaporwaffle-black-and-white" )

s3= Sneaker.create(name:"Nike Air Max 1/97", colorway: "Sean Wotherspoon", description: "As one of the world's foremost collectors of vintage shoes and apparel, Sean Wotherspoon created the Air Max 1/97 SW for 2017's Vote Forward competition—and won. The voter-approved design channels his passion for '80s culture while drawing influence from vintage corduroy caps, his native Virginia and LA, and his two favorite sneakers: the Air Max 1 and the Air Max 97.", 
    price: 1350, image:"https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/ajklcmz0ixdnqbh5a9zf/nike-air-max-197-sean-wotherspoon-release-date.jpg",
    link: "https://stockx.com/nike-air-max-1-97-sean-wotherspoon-na")

s4 = Sneaker.create(name:"Air Jordan 1", colorway: "Turbo Green", description: "Taking inspiration from the 90s and Charlotte Hornets, the Air Jordan I “Flight Nostalgia” pays tribute to the city for hosting its first NBA All Star game. Delivering a vintage aesthetic, this Air Jordan I arrives in a suede and leather upper, with the text “SP 19 AIR JORDAN 1 HIGH OG” engraved below the swoosh.", 
    price: 160, image:"https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/renl4oohpqduft3vccwf/air-jordan-1-turbo-green-white-light-smoke-grey-release-date.jpg",
    link: "https://www.nike.com/launch/t/air-jordan-1-turbo-green-white-light-smoke-grey" )

# s4 = Sneaker.create(name:"", colorway: "", description: "", 
#     price: 180, image:"",
#     link: "" )

# s4 = Sneaker.create(name:"", colorway: "", description: "", 
#     price: 180, image:"",
#     link: "" )

# s4 = Sneaker.create(name:"", colorway: "", description: "", 
#     price: 180, image:"",
#     link: "" )