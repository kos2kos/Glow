# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bomb = Emoji.create({img:"bomb.png"})

checkBox = Emoji.create({img:"checkBox.png"})

devilSmile = Emoji.create({img:"devilSmile.png"})

fire = Emoji.create({img:"fire.png"})

heart = Emoji.create({img:"heart.png"})

runningShirt = Emoji.create({img:"runningShirt.png"})

star = Emoji.create({img:"star.png"})

trophy = Emoji.create({img:"trophy.png"})

test1 = Conversation.create({title: "Group Chat 1"})
test2 = Conversation.create({title: "Group Chat 2"})

nkosi = User.create({username: "kos2kos"})
tony = User.create({username: "tonyTiga", conversation_id:2})
natsuki = User.create({username: "ms.Mashroom", conversation_id:2})
isiah = User.create({username: "sneakyGuy", conversation_id: 2})
