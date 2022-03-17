# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(username: "ilolo", password: "1234", address: "123 Main Street, Sugar Land, TX", email: "iloloizu97@gmail.com", size: "11", color1: "#85C1E9" , color2: "#8E44AD", phone: "8176820158")

s1 = Sneaker.create(name:"Dunk Low", colorway: "Medium Curry", description: "
    Before cementing its status as a streetwear icon and skateboarding staple, the Dunk began its journey on the hardwood as Nike's first-team basketball shoe before cementing its status as a sportswear legend. This low-top edition of the timeless silhouette features neutral hues of sail and fossil with spicy hits of medium curry.", price: 110, image:"https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/6c13023d-1771-4db5-b651-9c1798185268/dunk-low-medium-curry-release-date.jpg", link: "https://www.nike.com/launch/t/dunk-low-medium-curry" )