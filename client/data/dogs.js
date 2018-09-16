const dogs = [
    // {
    //     "options": {
    //         "option": {
    //             "$t": "hasShots"
    //         }
    //     },
    //     "status": {
    //         "$t": "A"
    //     },
    //     "contact": {
    //         "phone": {
    //             "$t": "(806) 378-9032"
    //         },
    //         "state": {
    //             "$t": "TX"
    //         },
    //         "address2": {},
    //         "email": {
    //             "$t": "mypet@amarillo.gov"
    //         },
    //         "city": {
    //             "$t": "Amarillo"
    //         },
    //         "zip": {
    //             "$t": "79118"
    //         },
    //         "fax": {},
    //         "address1": {
    //             "$t": "3501 S Osage St."
    //         }
    //     },
    //     "age": {
    //         "$t": "Young"
    //     },
    //     "size": {
    //         "$t": "M"
    //     },
    //     "media": {
    //         "photos": {
    //             "photo": [
    //                 {
    //                     "@size": "pnt",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42673025/1/?bust=1536238626&width=60&-pnt.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "fpm",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42673025/1/?bust=1536238626&width=95&-fpm.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "x",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42673025/1/?bust=1536238626&width=500&-x.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "pn",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42673025/1/?bust=1536238626&width=300&-pn.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "t",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42673025/1/?bust=1536238626&width=50&-t.jpg",
    //                     "@id": "1"
    //                 }
    //             ]
    //         }
    //     },
    //     "id": {
    //         "$t": "42673025"
    //     },
    //     "shelterPetId": {
    //         "$t": "COA-A-3426"
    //     },
    //     "breeds": {
    //         "breed": {
    //             "$t": "Rottweiler"
    //         }
    //     },
    //     "name": {
    //         "$t": "stray"
    //     },
    //     "sex": {
    //         "$t": "F"
    //     },
    //     "description": {},
    //     "mix": {
    //         "$t": "yes"
    //     },
    //     "shelterId": {
    //         "$t": "TX2087"
    //     },
    //     "lastUpdate": {
    //         "$t": "2018-09-05T16:18:40Z"
    //     },
    //     "animal": {
    //         "$t": "Dog"
    //     }
    // },
    // {
    //     "options": {
    //         "option": [
    //             {
    //                 "$t": "altered"
    //             },
    //             {
    //                 "$t": "hasShots"
    //             }
    //         ]
    //     },
    //     "status": {
    //         "$t": "A"
    //     },
    //     "contact": {
    //         "phone": {
    //             "$t": "(626) 524-1939"
    //         },
    //         "state": {
    //             "$t": "CA"
    //         },
    //         "address2": {},
    //         "email": {
    //             "$t": "fla@flarescue.org"
    //         },
    //         "city": {
    //             "$t": "Rosemead"
    //         },
    //         "zip": {
    //             "$t": "91770"
    //         },
    //         "fax": {},
    //         "address1": {}
    //     },
    //     "age": {
    //         "$t": "Senior"
    //     },
    //     "size": {
    //         "$t": "L"
    //     },
    //     "media": {
    //         "photos": {
    //             "photo": [
    //                 {
    //                     "@size": "pnt",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42111872/1/?bust=1530939733&width=60&-pnt.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "fpm",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42111872/1/?bust=1530939733&width=95&-fpm.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "x",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42111872/1/?bust=1530939733&width=500&-x.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "pn",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42111872/1/?bust=1530939733&width=300&-pn.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "t",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42111872/1/?bust=1530939733&width=50&-t.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "pnt",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42111872/2/?bust=1530939737&width=60&-pnt.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "fpm",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42111872/2/?bust=1530939737&width=95&-fpm.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "x",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42111872/2/?bust=1530939737&width=500&-x.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "pn",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42111872/2/?bust=1530939737&width=300&-pn.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "t",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42111872/2/?bust=1530939737&width=50&-t.jpg",
    //                     "@id": "2"
    //                 }
    //             ]
    //         }
    //     },
    //     "id": {
    //         "$t": "42111872"
    //     },
    //     "shelterPetId": {},
    //     "breeds": {
    //         "breed": [
    //             {
    //                 "$t": "Shepherd"
    //             },
    //             {
    //                 "$t": "Collie"
    //             }
    //         ]
    //     },
    //     "name": {
    //         "$t": "Elton"
    //     },
    //     "sex": {
    //         "$t": "M"
    //     },
    //     "description": {
    //         "$t": "Carl, the light brown dog, likes to nibble with the front of his teeth on your knee. It tickles and will make you laugh watching him do this. Elton on the other hand will sleep wherever you are if you let him. He isnâ\u0080\u0099t invasive, but he loves to be near you on the floor. These are great boys. Thank you to whoever falls in love with them just as much as we did. Their mom passed away and they are looking for a home together."
    //     },
    //     "mix": {
    //         "$t": "yes"
    //     },
    //     "shelterId": {
    //         "$t": "CA1199"
    //     },
    //     "lastUpdate": {
    //         "$t": "2018-07-07T05:02:31Z"
    //     },
    //     "animal": {
    //         "$t": "Dog"
    //     }
    // },
    // {
    //     "options": {
    //         "option": [
    //             {
    //                 "$t": "altered"
    //             },
    //             {
    //                 "$t": "hasShots"
    //             },
    //             {
    //                 "$t": "housetrained"
    //             }
    //         ]
    //     },
    //     "status": {
    //         "$t": "A"
    //     },
    //     "contact": {
    //         "phone": {
    //             "$t": "605-999-1111"
    //         },
    //         "state": {
    //             "$t": "SD"
    //         },
    //         "address2": {},
    //         "email": {
    //             "$t": "rachaelleighton@yahoo.com"
    //         },
    //         "city": {
    //             "$t": "Sioux Falls"
    //         },
    //         "zip": {
    //             "$t": "57101"
    //         },
    //         "fax": {},
    //         "address1": {
    //             "$t": "PO Box 2321"
    //         }
    //     },
    //     "age": {
    //         "$t": "Young"
    //     },
    //     "size": {
    //         "$t": "M"
    //     },
    //     "media": {
    //         "photos": {
    //             "photo": [
    //                 {
    //                     "@size": "pnt",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41879678/1/?bust=1530294531&width=60&-pnt.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "fpm",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41879678/1/?bust=1530294531&width=95&-fpm.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "x",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41879678/1/?bust=1530294531&width=500&-x.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "pn",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41879678/1/?bust=1530294531&width=300&-pn.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "t",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41879678/1/?bust=1530294531&width=50&-t.jpg",
    //                     "@id": "1"
    //                 }
    //             ]
    //         }
    //     },
    //     "id": {
    //         "$t": "41879678"
    //     },
    //     "shelterPetId": {},
    //     "breeds": {
    //         "breed": {
    //             "$t": "Pit Bull Terrier"
    //         }
    //     },
    //     "name": {
    //         "$t": "Ava"
    //     },
    //     "sex": {
    //         "$t": "F"
    //     },
    //     "description": {
    //         "$t": "PLEASE VISIT OUR WEBSITE AT WWW.PITRESCUE.ORG FOR INFORMATION ON OUR ORGANIZATION, ADOPTION POLICIES AND PROCESS, EDUCATIONAL INFORMATION, AND A FULL LIST OF OUR ADOPTABLE DOGS ALONG WITH PHOTOS AND FULL BIOS!!!\nMore pictures and info on this particular dog visit: https://www.pitrescue.org/ava\n\nApply online: http://fs22.formsite.com/siouxempire/form1/index.html?1316620486706\n\n*Adoption application must be filled out with home visit and references (personal and vet) required prior to any adoption. Filling out an application does not obligate you to adopt, but merely begins the process. SEPR DOES adopt out of state!\n\nAdoption fees:All SEPR adoptions are $300.  This includes: adoption fee (spay/neuter, utd vaccinations, micro-chipping), microchip registration, Gentle Leader, and two tie downs for use in your home. \n\nSEPR requires all adopted dogs attend a training class with their adoptive family within 90 days of their adoption. If an adoptive family completes this training class, they will be refunded $100 of their adoption fee with proof of licensed certificate. SEPR even offers an obedience class called Train-A-Bull to alumni over 1 year of age on a seasonal basis.  These classes are currently free!\n\n*All other pets in the residence must be spayed or neutered and all pets up to date on vaccinations.\n\n*SEPR requires all applicants must be 21 years of age.\n\n*SEPR dogs are adopted to be inside the home, â\u0080\u009cpart of the familyâ\u0080\u009d dogs only.\n\n*Families with children 4 years of age and under wanting to adopt puppies will be reviewed on a case by case basis. Raising a puppy properly takes a lot of time, and we understand that in families with small children, time can be a limited commodity."
    //     },
    //     "mix": {
    //         "$t": "no"
    //     },
    //     "shelterId": {
    //         "$t": "SD41"
    //     },
    //     "lastUpdate": {
    //         "$t": "2018-06-12T19:32:33Z"
    //     },
    //     "animal": {
    //         "$t": "Dog"
    //     }
    // },
    // {
    //     "options": {
    //         "option": [
    //             {
    //                 "$t": "noDogs"
    //             },
    //             {
    //                 "$t": "noCats"
    //             },
    //             {
    //                 "$t": "noKids"
    //             }
    //         ]
    //     },
    //     "status": {
    //         "$t": "A"
    //     },
    //     "contact": {
    //         "phone": {
    //             "$t": "(304) 784-6678"
    //         },
    //         "state": {
    //             "$t": "WV"
    //         },
    //         "address2": {},
    //         "email": {
    //             "$t": "artbar.wv@gmail.com"
    //         },
    //         "city": {
    //             "$t": "Lenore"
    //         },
    //         "zip": {
    //             "$t": "25676"
    //         },
    //         "fax": {},
    //         "address1": {}
    //     },
    //     "age": {
    //         "$t": "Young"
    //     },
    //     "size": {
    //         "$t": "L"
    //     },
    //     "media": {
    //         "photos": {
    //             "photo": [
    //                 {
    //                     "@size": "pnt",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41545587/1/?bust=1534810828&width=60&-pnt.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "fpm",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41545587/1/?bust=1534810828&width=95&-fpm.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "x",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41545587/1/?bust=1534810828&width=500&-x.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "pn",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41545587/1/?bust=1534810828&width=300&-pn.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "t",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41545587/1/?bust=1534810828&width=50&-t.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "pnt",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41545587/2/?bust=1534810832&width=60&-pnt.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "fpm",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41545587/2/?bust=1534810832&width=95&-fpm.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "x",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41545587/2/?bust=1534810832&width=500&-x.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "pn",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41545587/2/?bust=1534810832&width=300&-pn.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "t",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41545587/2/?bust=1534810832&width=50&-t.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "pnt",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41545587/3/?bust=1534810834&width=60&-pnt.jpg",
    //                     "@id": "3"
    //                 },
    //                 {
    //                     "@size": "fpm",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41545587/3/?bust=1534810834&width=95&-fpm.jpg",
    //                     "@id": "3"
    //                 },
    //                 {
    //                     "@size": "x",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41545587/3/?bust=1534810834&width=500&-x.jpg",
    //                     "@id": "3"
    //                 },
    //                 {
    //                     "@size": "pn",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41545587/3/?bust=1534810834&width=300&-pn.jpg",
    //                     "@id": "3"
    //                 },
    //                 {
    //                     "@size": "t",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41545587/3/?bust=1534810834&width=50&-t.jpg",
    //                     "@id": "3"
    //                 }
    //             ]
    //         }
    //     },
    //     "id": {
    //         "$t": "41545587"
    //     },
    //     "shelterPetId": {
    //         "$t": "8626682"
    //     },
    //     "breeds": {
    //         "breed": [
    //             {
    //                 "$t": "Collie"
    //             },
    //             {
    //                 "$t": "Hound"
    //             }
    //         ]
    //     },
    //     "name": {
    //         "$t": "Dover (11 yr 70 lb)"
    //     },
    //     "sex": {
    //         "$t": "M"
    //     },
    //     "description": {
    //         "$t": "Dover is a large (70 lb?) senior dog who would do best as an only dog.\nWe put him into a boarding/training program a few months back because he was acting dog aggressive here. Well he behaved like an angel for them. Go figure!\nSeeking a retirement or hospice foster home for this old guy! He deserves better than living in a kennel. He's healthy right now, just old. We estimated him at 8-9 years on intake and that was in March of 2015.\n\nReduced adoption fee to anyone who can adopt him as an indoor dog and only pet since we can't guarantee he'd do great living with other dogs. 9/12/18 1:42 AM"
    //     },
    //     "mix": {
    //         "$t": "yes"
    //     },
    //     "shelterId": {
    //         "$t": "WV205"
    //     },
    //     "lastUpdate": {
    //         "$t": "2018-05-03T19:22:37Z"
    //     },
    //     "animal": {
    //         "$t": "Dog"
    //     }
    // },
    // {
    //     "options": {
    //         "option": [
    //             {
    //                 "$t": "altered"
    //             },
    //             {
    //                 "$t": "hasShots"
    //             },
    //             {
    //                 "$t": "housetrained"
    //             }
    //         ]
    //     },
    //     "status": {
    //         "$t": "A"
    //     },
    //     "contact": {
    //         "phone": {},
    //         "state": {
    //             "$t": "ME"
    //         },
    //         "address2": {},
    //         "email": {
    //             "$t": "thegratefuldoganimalrescue@gmail.com"
    //         },
    //         "city": {
    //             "$t": "York"
    //         },
    //         "zip": {
    //             "$t": "03909"
    //         },
    //         "fax": {},
    //         "address1": {}
    //     },
    //     "age": {
    //         "$t": "Young"
    //     },
    //     "size": {
    //         "$t": "M"
    //     },
    //     "media": {
    //         "photos": {
    //             "photo": [
    //                 {
    //                     "@size": "pnt",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41712297/1/?bust=1527150883&width=60&-pnt.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "fpm",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41712297/1/?bust=1527150883&width=95&-fpm.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "x",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41712297/1/?bust=1527150883&width=500&-x.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "pn",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41712297/1/?bust=1527150883&width=300&-pn.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "t",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41712297/1/?bust=1527150883&width=50&-t.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "pnt",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41712297/2/?bust=1536711173&width=60&-pnt.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "fpm",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41712297/2/?bust=1536711173&width=95&-fpm.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "x",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41712297/2/?bust=1536711173&width=500&-x.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "pn",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41712297/2/?bust=1536711173&width=300&-pn.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "t",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41712297/2/?bust=1536711173&width=50&-t.jpg",
    //                     "@id": "2"
    //                 }
    //             ]
    //         }
    //     },
    //     "id": {
    //         "$t": "41712297"
    //     },
    //     "shelterPetId": {},
    //     "breeds": {
    //         "breed": {
    //             "$t": "Pit Bull Terrier"
    //         }
    //     },
    //     "name": {
    //         "$t": "Anastasio"
    //     },
    //     "sex": {
    //         "$t": "F"
    //     },
    //     "description": {
    //         "$t": "Anastasio is a sweet 2 year old mixed breed girl who is a real people pleaser. She loves to be around other dogs, but would also do well as a family pet in a home with children. She is gentle, well mannered, house broken, and crate trained. She loves to go for walks, swimming in the kiddie pool, or running around with one of her foster siblings. She is low energy in the house, but is down for whatever adventure you might have in mind. Anastasio would make a great best friend and has been so patient in her wait for her forever home. Want to meet Anastasio? Visit our website to fill out an adoption application!"
    //     },
    //     "mix": {
    //         "$t": "yes"
    //     },
    //     "shelterId": {
    //         "$t": "ME158"
    //     },
    //     "lastUpdate": {
    //         "$t": "2018-05-24T08:35:30Z"
    //     },
    //     "animal": {
    //         "$t": "Dog"
    //     }
    // },
    // {
    //     "options": {
    //         "option": [
    //             {
    //                 "$t": "specialNeeds"
    //             },
    //             {
    //                 "$t": "altered"
    //             },
    //             {
    //                 "$t": "hasShots"
    //             },
    //             {
    //                 "$t": "housetrained"
    //             },
    //             {
    //                 "$t": "noCats"
    //             }
    //         ]
    //     },
    //     "status": {
    //         "$t": "A"
    //     },
    //     "contact": {
    //         "phone": {},
    //         "state": {
    //             "$t": "ME"
    //         },
    //         "address2": {},
    //         "email": {
    //             "$t": "journeyanimalrescue@gmail.com"
    //         },
    //         "city": {
    //             "$t": "Stow"
    //         },
    //         "zip": {
    //             "$t": "04037"
    //         },
    //         "fax": {},
    //         "address1": {
    //             "$t": "PO Box 364"
    //         }
    //     },
    //     "age": {
    //         "$t": "Adult"
    //     },
    //     "size": {
    //         "$t": "M"
    //     },
    //     "media": {
    //         "photos": {
    //             "photo": [
    //                 {
    //                     "@size": "pnt",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41088229/1/?bust=1520038393&width=60&-pnt.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "fpm",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41088229/1/?bust=1520038393&width=95&-fpm.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "x",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41088229/1/?bust=1520038393&width=500&-x.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "pn",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41088229/1/?bust=1520038393&width=300&-pn.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "t",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41088229/1/?bust=1520038393&width=50&-t.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "pnt",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41088229/2/?bust=1520038374&width=60&-pnt.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "fpm",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41088229/2/?bust=1520038374&width=95&-fpm.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "x",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41088229/2/?bust=1520038374&width=500&-x.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "pn",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41088229/2/?bust=1520038374&width=300&-pn.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "t",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41088229/2/?bust=1520038374&width=50&-t.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "pnt",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41088229/3/?bust=1520038426&width=60&-pnt.jpg",
    //                     "@id": "3"
    //                 },
    //                 {
    //                     "@size": "fpm",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41088229/3/?bust=1520038426&width=95&-fpm.jpg",
    //                     "@id": "3"
    //                 },
    //                 {
    //                     "@size": "x",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41088229/3/?bust=1520038426&width=500&-x.jpg",
    //                     "@id": "3"
    //                 },
    //                 {
    //                     "@size": "pn",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41088229/3/?bust=1520038426&width=300&-pn.jpg",
    //                     "@id": "3"
    //                 },
    //                 {
    //                     "@size": "t",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41088229/3/?bust=1520038426&width=50&-t.jpg",
    //                     "@id": "3"
    //                 },
    //                 {
    //                     "@size": "pnt",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41088229/4/?bust=1520038440&width=60&-pnt.jpg",
    //                     "@id": "4"
    //                 },
    //                 {
    //                     "@size": "fpm",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41088229/4/?bust=1520038440&width=95&-fpm.jpg",
    //                     "@id": "4"
    //                 },
    //                 {
    //                     "@size": "x",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41088229/4/?bust=1520038440&width=500&-x.jpg",
    //                     "@id": "4"
    //                 },
    //                 {
    //                     "@size": "pn",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41088229/4/?bust=1520038440&width=300&-pn.jpg",
    //                     "@id": "4"
    //                 },
    //                 {
    //                     "@size": "t",
    //                     "$t": "http://photos.petfinder.com/photos/pets/41088229/4/?bust=1520038440&width=50&-t.jpg",
    //                     "@id": "4"
    //                 }
    //             ]
    //         }
    //     },
    //     "id": {
    //         "$t": "41088229"
    //     },
    //     "shelterPetId": {},
    //     "breeds": {
    //         "breed": {
    //             "$t": "Pit Bull Terrier"
    //         }
    //     },
    //     "name": {
    //         "$t": "Felix and Levi"
    //     },
    //     "sex": {
    //         "$t": "M"
    //     },
    //     "description": {
    //         "$t": "THIS IS A COURTESY LISTING. DIRECT ALL INQUIRIES TO THE EMAIL AT THE BOTTOM OF THE DESCRIPTION \n\nFelix and Levi are one year old and available for adoption in NH. They were rescued together when their owner was shot and killed, they were left out in single digits and rarely fed. \nThey have been through a lot so it is preferred that they are adopted together..but will consider other fitting options. They love everyone, other dogs but no cats. Felix does have a heart murmur and will require an echocardiogram once a year with a board certified cardiologist. Felix would make an amazing service dog, he has a calm temperament and does great out in public regardless of the scenario. Levi is a little more high energy. Levi is 57 pds and Felix is 48. Both are fixed, microchipped and up to date on shots.  Adoption application, home check and vet references will be required.\nPlease email MollySellsNH@gmail.com for information or adoption application. Adoption fee of 600 for the pair.\n\n\n\n\n"
    //     },
    //     "mix": {
    //         "$t": "no"
    //     },
    //     "shelterId": {
    //         "$t": "ME88"
    //     },
    //     "lastUpdate": {
    //         "$t": "2018-03-03T00:55:27Z"
    //     },
    //     "animal": {
    //         "$t": "Dog"
    //     }
    // },
    // {
    //     "options": {
    //         "option": [
    //             {
    //                 "$t": "altered"
    //             },
    //             {
    //                 "$t": "hasShots"
    //             }
    //         ]
    //     },
    //     "status": {
    //         "$t": "A"
    //     },
    //     "contact": {
    //         "phone": {},
    //         "state": {
    //             "$t": "CT"
    //         },
    //         "address2": {},
    //         "email": {
    //             "$t": "packleadersrescueCT@gmail.com"
    //         },
    //         "city": {
    //             "$t": "Manchester"
    //         },
    //         "zip": {
    //             "$t": "06040"
    //         },
    //         "fax": {},
    //         "address1": {}
    //     },
    //     "age": {
    //         "$t": "Adult"
    //     },
    //     "size": {
    //         "$t": "M"
    //     },
    //     "media": {
    //         "photos": {
    //             "photo": [
    //                 {
    //                     "@size": "pnt",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42266473/1/?bust=1532361676&width=60&-pnt.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "fpm",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42266473/1/?bust=1532361676&width=95&-fpm.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "x",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42266473/1/?bust=1532361676&width=500&-x.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "pn",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42266473/1/?bust=1532361676&width=300&-pn.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "t",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42266473/1/?bust=1532361676&width=50&-t.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "pnt",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42266473/2/?bust=1532361684&width=60&-pnt.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "fpm",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42266473/2/?bust=1532361684&width=95&-fpm.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "x",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42266473/2/?bust=1532361684&width=500&-x.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "pn",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42266473/2/?bust=1532361684&width=300&-pn.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "t",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42266473/2/?bust=1532361684&width=50&-t.jpg",
    //                     "@id": "2"
    //                 },
    //                 {
    //                     "@size": "pnt",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42266473/3/?bust=1532361695&width=60&-pnt.jpg",
    //                     "@id": "3"
    //                 },
    //                 {
    //                     "@size": "fpm",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42266473/3/?bust=1532361695&width=95&-fpm.jpg",
    //                     "@id": "3"
    //                 },
    //                 {
    //                     "@size": "x",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42266473/3/?bust=1532361695&width=500&-x.jpg",
    //                     "@id": "3"
    //                 },
    //                 {
    //                     "@size": "pn",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42266473/3/?bust=1532361695&width=300&-pn.jpg",
    //                     "@id": "3"
    //                 },
    //                 {
    //                     "@size": "t",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42266473/3/?bust=1532361695&width=50&-t.jpg",
    //                     "@id": "3"
    //                 }
    //             ]
    //         }
    //     },
    //     "id": {
    //         "$t": "42266473"
    //     },
    //     "shelterPetId": {},
    //     "breeds": {
    //         "breed": {
    //             "$t": "Hound"
    //         }
    //     },
    //     "name": {
    //         "$t": "Tyler"
    //     },
    //     "sex": {
    //         "$t": "M"
    //     },
    //     "description": {
    //         "$t": "This sweet boy is Tyler, a smiling 2-year-old male hound mix who weighs 45 lbs full grown, a nice medium size.\nPoor Tyler was found roaming with two other dogs, all of them skinny and covered with ticks. Tyler is now a healthy and happy-go-lucky dog.  He loves other dogs He can be a little shy when he meets new people, but is constantly wagging his tail.  He loves to be petted and loved on.  He would benefit from a family that could spoil him with lots of attention, make him feel safe and boost his confidence. A home with a canine sibling would be ideal!\nTyler is neutered, vaccinated, microchipped and comes with a month of pet health insurance. Please apply to adopt at www.packleadersrescue.com\n\n\n"
    //     },
    //     "mix": {
    //         "$t": "yes"
    //     },
    //     "shelterId": {
    //         "$t": "CT477"
    //     },
    //     "lastUpdate": {
    //         "$t": "2018-07-23T16:04:57Z"
    //     },
    //     "animal": {
    //         "$t": "Dog"
    //     }
    // },
    // {
    //     "options": {
    //         "option": [
    //             {
    //                 "$t": "altered"
    //             },
    //             {
    //                 "$t": "hasShots"
    //             },
    //             {
    //                 "$t": "housetrained"
    //             },
    //             {
    //                 "$t": "noCats"
    //             },
    //             {
    //                 "$t": "noKids"
    //             }
    //         ]
    //     },
    //     "status": {
    //         "$t": "A"
    //     },
    //     "contact": {
    //         "phone": {
    //             "$t": "(315) 738-4357"
    //         },
    //         "state": {
    //             "$t": "NY"
    //         },
    //         "address2": {},
    //         "email": {
    //             "$t": "info@stevens-swan.org"
    //         },
    //         "city": {
    //             "$t": "Utica"
    //         },
    //         "zip": {
    //             "$t": "13501"
    //         },
    //         "fax": {},
    //         "address1": {
    //             "$t": "5664 Horatio Street"
    //         }
    //     },
    //     "age": {
    //         "$t": "Adult"
    //     },
    //     "size": {
    //         "$t": "M"
    //     },
    //     "media": {
    //         "photos": {
    //             "photo": [
    //                 {
    //                     "@size": "pnt",
    //                     "$t": "http://photos.petfinder.com/photos/pets/40389206/1/?bust=1513793869&width=60&-pnt.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "fpm",
    //                     "$t": "http://photos.petfinder.com/photos/pets/40389206/1/?bust=1513793869&width=95&-fpm.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "x",
    //                     "$t": "http://photos.petfinder.com/photos/pets/40389206/1/?bust=1513793869&width=500&-x.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "pn",
    //                     "$t": "http://photos.petfinder.com/photos/pets/40389206/1/?bust=1513793869&width=300&-pn.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "t",
    //                     "$t": "http://photos.petfinder.com/photos/pets/40389206/1/?bust=1513793869&width=50&-t.jpg",
    //                     "@id": "1"
    //                 }
    //             ]
    //         }
    //     },
    //     "id": {
    //         "$t": "40389206"
    //     },
    //     "shelterPetId": {
    //         "$t": "W1519"
    //     },
    //     "breeds": {
    //         "breed": {
    //             "$t": "Pit Bull Terrier"
    //         }
    //     },
    //     "name": {
    //         "$t": "Harvey"
    //     },
    //     "sex": {
    //         "$t": "M"
    //     },
    //     "description": {
    //         "$t": "Name: Harvey\nAge: 5 years old\nFriendly with dogs: unknown, not tested yet \nFriendly with cats: no\nFriendly with children: no, does not like to be pet in certain areas \nReason for surrender: Landlord wouldn't allow the dog\n\nDog Adoption Fees are $120 and include:\nSpaying or neutering \nBordetella, Distemper and Rabies vaccines (12 weeks and older)\nFlea Treatment\nDe-worming\n4DX Test: HW, LY, AC, EC\nWellness Exam\nDental cleaning if necessary\nMicrochipping with registration\n\nApplications must be submitted in person after you meet the pet.\nFor more information visit www.stevens-swan.org"
    //     },
    //     "mix": {
    //         "$t": "yes"
    //     },
    //     "shelterId": {
    //         "$t": "NY26"
    //     },
    //     "lastUpdate": {
    //         "$t": "2017-12-20T18:19:29Z"
    //     },
    //     "animal": {
    //         "$t": "Dog"
    //     }
    // },
    // {
    //     "options": {
    //         "option": [
    //             {
    //                 "$t": "altered"
    //             },
    //             {
    //                 "$t": "hasShots"
    //             },
    //             {
    //                 "$t": "housetrained"
    //             }
    //         ]
    //     },
    //     "status": {
    //         "$t": "A"
    //     },
    //     "contact": {
    //         "phone": {},
    //         "state": {
    //             "$t": "NJ"
    //         },
    //         "address2": {},
    //         "email": {
    //             "$t": "sadeyelittleguys@yahoo.com"
    //         },
    //         "city": {
    //             "$t": "Westville"
    //         },
    //         "zip": {
    //             "$t": "08093"
    //         },
    //         "fax": {},
    //         "address1": {}
    //     },
    //     "age": {
    //         "$t": "Adult"
    //     },
    //     "size": {
    //         "$t": "S"
    //     },
    //     "media": {
    //         "photos": {
    //             "photo": [
    //                 {
    //                     "@size": "pnt",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42399086/1/?bust=1533555671&width=60&-pnt.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "fpm",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42399086/1/?bust=1533555671&width=95&-fpm.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "x",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42399086/1/?bust=1533555671&width=500&-x.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "pn",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42399086/1/?bust=1533555671&width=300&-pn.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "t",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42399086/1/?bust=1533555671&width=50&-t.jpg",
    //                     "@id": "1"
    //                 }
    //             ]
    //         }
    //     },
    //     "id": {
    //         "$t": "42399086"
    //     },
    //     "shelterPetId": {},
    //     "breeds": {
    //         "breed": [
    //             {
    //                 "$t": "Maltese"
    //             },
    //             {
    //                 "$t": "Poodle"
    //             }
    //         ]
    //     },
    //     "name": {
    //         "$t": "Daisy"
    //     },
    //     "sex": {
    //         "$t": "F"
    //     },
    //     "description": {
    //         "$t": "Daisy\nThis pretty little 12 lb 7 year old Maltese/Poodle mix was surrendered to us because the toddler in the house is highly allergic to dog saliva and the family does not want to keep Daisy locked away all day to keep the child from coming down with severe hives.\nShe loves being petted, is very sweet, and needs a new home to call her own. Daisy would be a good fit for someone looking to spoil a little princess. Application is required. No toddlers or large breed dogs please.\nAdoption fee; $350\nDaisy is spayed and up to date on shots and just groomed.\nAdoption apps are available on the website; www.sadeyenj.org"
    //     },
    //     "mix": {
    //         "$t": "yes"
    //     },
    //     "shelterId": {
    //         "$t": "NJ688"
    //     },
    //     "lastUpdate": {
    //         "$t": "2018-08-06T11:42:20Z"
    //     },
    //     "animal": {
    //         "$t": "Dog"
    //     }
    // },
    // {
    //     "options": {},
    //     "status": {
    //         "$t": "A"
    //     },
    //     "contact": {
    //         "phone": {
    //             "$t": "210-207-6666 "
    //         },
    //         "state": {
    //             "$t": "TX"
    //         },
    //         "address2": {},
    //         "email": {
    //             "$t": "ACSAdoptions@sanantonio.gov"
    //         },
    //         "city": {
    //             "$t": "San Antonio"
    //         },
    //         "zip": {
    //             "$t": "78227"
    //         },
    //         "fax": {},
    //         "address1": {
    //             "$t": "4710 State Hwy 151"
    //         }
    //     },
    //     "age": {
    //         "$t": "Adult"
    //     },
    //     "size": {
    //         "$t": "S"
    //     },
    //     "media": {
    //         "photos": {
    //             "photo": [
    //                 {
    //                     "@size": "pnt",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42699779/1/?bust=1536876861&width=60&-pnt.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "fpm",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42699779/1/?bust=1536876861&width=95&-fpm.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "x",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42699779/1/?bust=1536876861&width=500&-x.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "pn",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42699779/1/?bust=1536876861&width=300&-pn.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "t",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42699779/1/?bust=1536876861&width=50&-t.jpg",
    //                     "@id": "1"
    //                 }
    //             ]
    //         }
    //     },
    //     "id": {
    //         "$t": "42699779"
    //     },
    //     "shelterPetId": {
    //         "$t": "A498731"
    //     },
    //     "breeds": {
    //         "breed": {
    //             "$t": "Chihuahua"
    //         }
    //     },
    //     "name": {
    //         "$t": "A498731"
    //     },
    //     "sex": {
    //         "$t": "F"
    //     },
    //     "description": {},
    //     "mix": {
    //         "$t": "no"
    //     },
    //     "shelterId": {
    //         "$t": "TX487"
    //     },
    //     "lastUpdate": {
    //         "$t": "2018-09-08T13:14:21Z"
    //     },
    //     "animal": {
    //         "$t": "Dog"
    //     }
    // },
    // {
    //     "options": {
    //         "option": [
    //             {
    //                 "$t": "altered"
    //             },
    //             {
    //                 "$t": "housetrained"
    //             }
    //         ]
    //     },
    //     "status": {
    //         "$t": "A"
    //     },
    //     "contact": {
    //         "phone": {
    //             "$t": "(870) 269-5200"
    //         },
    //         "state": {
    //             "$t": "AR"
    //         },
    //         "address2": {},
    //         "email": {
    //             "$t": "schs@yelcot.net"
    //         },
    //         "city": {
    //             "$t": "Mountain View"
    //         },
    //         "zip": {
    //             "$t": "72560"
    //         },
    //         "fax": {},
    //         "address1": {
    //             "$t": "17379 Highway 9"
    //         }
    //     },
    //     "age": {
    //         "$t": "Adult"
    //     },
    //     "size": {
    //         "$t": "M"
    //     },
    //     "media": {
    //         "photos": {
    //             "photo": [
    //                 {
    //                     "@size": "pnt",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42759423/1/?bust=1537018102&width=60&-pnt.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "fpm",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42759423/1/?bust=1537018102&width=95&-fpm.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "x",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42759423/1/?bust=1537018102&width=500&-x.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "pn",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42759423/1/?bust=1537018102&width=300&-pn.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "t",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42759423/1/?bust=1537018102&width=50&-t.jpg",
    //                     "@id": "1"
    //                 }
    //             ]
    //         }
    //     },
    //     "id": {
    //         "$t": "42759423"
    //     },
    //     "shelterPetId": {
    //         "$t": "13549682"
    //     },
    //     "breeds": {
    //         "breed": {
    //             "$t": "Black Mouth Cur"
    //         }
    //     },
    //     "name": {
    //         "$t": "Big Girl"
    //     },
    //     "sex": {
    //         "$t": "F"
    //     },
    //     "description": {
    //         "$t": "Meet Big Girl! She is a very sweet dog needing a good home! She is very sweet, loves to be around people, and petted. She would make someone a great pet. She does have an old gunshot wound to her back right leg. She can not bear weight on it but gets around just fine. If you would like to meet Big Girl, please visit the Stone County Humane Society shelter located at 17379 Highway 9, Mountain View, AR or call 870-269-5200. You can also go on-line and complete an adoption application at our website schspets.org.\n9/14/18 3:02 PM"
    //     },
    //     "mix": {
    //         "$t": "yes"
    //     },
    //     "shelterId": {
    //         "$t": "AR154"
    //     },
    //     "lastUpdate": {
    //         "$t": "2018-09-15T08:05:49Z"
    //     },
    //     "animal": {
    //         "$t": "Dog"
    //     }
    // },
    // {
    //     "options": {
    //         "option": {
    //             "$t": "altered"
    //         }
    //     },
    //     "status": {
    //         "$t": "A"
    //     },
    //     "contact": {
    //         "phone": {
    //             "$t": "(385) 468-7387"
    //         },
    //         "state": {
    //             "$t": "UT"
    //         },
    //         "address2": {},
    //         "email": {
    //             "$t": "Adoptions@slco.org"
    //         },
    //         "city": {
    //             "$t": "Salt Lake City"
    //         },
    //         "zip": {
    //             "$t": "84123"
    //         },
    //         "fax": {},
    //         "address1": {
    //             "$t": "511 West 3900 South"
    //         }
    //     },
    //     "age": {
    //         "$t": "Young"
    //     },
    //     "size": {
    //         "$t": "M"
    //     },
    //     "media": {
    //         "photos": {
    //             "photo": [
    //                 {
    //                     "@size": "pnt",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42738394/1/?bust=1536845471&width=60&-pnt.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "fpm",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42738394/1/?bust=1536845471&width=95&-fpm.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "x",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42738394/1/?bust=1536845471&width=500&-x.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "pn",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42738394/1/?bust=1536845471&width=300&-pn.jpg",
    //                     "@id": "1"
    //                 },
    //                 {
    //                     "@size": "t",
    //                     "$t": "http://photos.petfinder.com/photos/pets/42738394/1/?bust=1536845471&width=50&-t.jpg",
    //                     "@id": "1"
    //                 }
    //             ]
    //         }
    //     },
    //     "id": {
    //         "$t": "42738394"
    //     },
    //     "shelterPetId": {
    //         "$t": "A473893"
    //     },
    //     "breeds": {
    //         "breed": [
    //             {
    //                 "$t": "Chihuahua"
    //             },
    //             {
    //                 "$t": "Welsh Corgi"
    //             }
    //         ]
    //     },
    //     "name": {
    //         "$t": "GIDGET"
    //     },
    //     "sex": {
    //         "$t": "F"
    //     },
    //     "description": {
    //         "$t": "Hello, I am a Shy Friend! I am shy but sweet. Looking for some patience and gentle guidance while I am working on building my confidence. *Knows basic commands *Wallflower *Needs to be treated gently *Loves Treats *Walks well on a leash *Affectionate *Needs to build confidence while in shelter to see true personality"
    //     },
    //     "mix": {
    //         "$t": "yes"
    //     },
    //     "shelterId": {
    //         "$t": "UT07"
    //     },
    //     "lastUpdate": {
    //         "$t": "2018-09-13T05:14:55Z"
    //     },
    //     "animal": {
    //         "$t": "Dog"
    //     }
    // }
];


export default dogs;
