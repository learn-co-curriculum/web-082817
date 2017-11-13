# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(username: "johann", password:"learnlovecode")
10.times do |c|
  Lab.create(title: "#{Faker::Educator.course} #{c}")
end
25.times do |i|
  user = User.create(username: Faker::Name.first_name.downcase, password: "learnlovecode")
  3.times do |u|
    user.labs << Lab.all.sample
  end
  
end
