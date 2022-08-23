const userData = [
    {
        name: 'Jan',
        "Active User": 4000,
    },
    {
        name: 'Feb',
        "Active User": 3000,
    },
    {
        name: 'Mar',
        "Active User": 5000,
    },
    {
        name: 'Apr',
        "Active User": 4000,
    },
    {
        name: 'May',
        "Active User": 3000,
    },
    {
        name: 'Jun',
        "Active User": 2000,
    },
    {
        name: 'Jul',
        "Active User": 4000,
    },
    {
        name: 'Agu',
        "Active User": 3000,
    },
    {
        name: 'Sep',
        "Active User": 4000,
    },
    {
        name: 'Oct',
        "Active User": 3000,
    },
    {
        name: 'Nov',
        "Active User": 4000,
    },
    {
        name: 'Dec',
        "Active User": 4000,
    },

];
const userRows = [
    {
        id: 1,
        userName: "Sergen Yalçın",
        avatar:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sergen_Yalcin.jpg/1200px-Sergen_Yalcin.jpg",
        email: "eagle1903@hotmail.com",
        status: "active",
        transaction: "$15000.00"
    },
    {
        id: 2,
        userName: "Fatih Terim",
        avatar:
            "https://upload.wikimedia.org/wikipedia/commons/2/21/Fatih_Terim_2018.jpg",
        email: "fterim@hotmail.com",
        status: "active",
        transaction: "$15000.00"
    },
    {
        id: 3,
        userName: "Volodymyr Zelenskyy",
        avatar:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Volodymyr_Zelensky_Official_portrait.jpg/1200px-Volodymyr_Zelensky_Official_portrait.jpg",
        email: "volodymyr_zelenskyy@hotmail.com",
        status: "active",
        transaction: "$5000.00"
    },
    {
        id: 4,
        userName: "Angela Merkel",
        avatar:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Angela_Merkel_2019_cropped.jpg/1200px-Angela_Merkel_2019_cropped.jpg",
        email: "angela_merkel@hotmail.com",
        status: "active",
        transaction: "$75000.00"
    },
    {
        id: 5,
        userName: "Shakira",
        avatar:
            "https://upload.wikimedia.org/wikipedia/commons/1/1d/Shakira_for_VOGUE_in_2021_2.png",
        email: "fuck_pique@hotmail.com",
        status: "active",
        transaction: "$20.00"
    },
    {
        id: 6,
        userName: "Sergen Yalçın",
        avatar:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sergen_Yalcin.jpg/1200px-Sergen_Yalcin.jpg",
        email: "eagle1903@hotmail.com",
        status: "active",
        transaction: "$15000.00"
    },
    {
        id: 7,
        userName: "Fatih Terim",
        avatar:
            "https://upload.wikimedia.org/wikipedia/commons/2/21/Fatih_Terim_2018.jpg",
        email: "fterim@hotmail.com",
        status: "active",
        transaction: "$15000.00"
    },
    {
        id: 8,
        userName: "Volodymyr Zelenskyy",
        avatar:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Volodymyr_Zelensky_Official_portrait.jpg/1200px-Volodymyr_Zelensky_Official_portrait.jpg",
        email: "volodymyr_zelenskyy@hotmail.com",
        status: "active",
        transaction: "$5000.00"
    },
    {
        id: 9,
        userName: "Angela Merkel",
        avatar:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Angela_Merkel_2019_cropped.jpg/1200px-Angela_Merkel_2019_cropped.jpg",
        email: "angela_merkel@hotmail.com",
        status: "active",
        transaction: "$75000.00"
    },
    {
        id: 10,
        userName: "Shakira",
        avatar:
            "https://upload.wikimedia.org/wikipedia/commons/1/1d/Shakira_for_VOGUE_in_2021_2.png",
        email: "fuck_pique@hotmail.com",
        status: "active",
        transaction: "$20.00"
    },
    ]
const productRows = [
    {
      id: 1,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 2,
      name: "Tesla Mode S",
      img:
       "https://upload.wikimedia.org/wikipedia/commons/c/c3/2013_Tesla_Model_S_%2811322176214%29_cropped.jpg",
      stock: 12,
      status: "active",
      price: "$32000.00",
    },
    {
      id: 3,
      name: "Airbus 380",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/A380_Emirates_A6-EDC.jpg/1200px-A380_Emirates_A6-EDC.jpg",
      stock: 123,
      status: "active",
      price: "$390000000.00",
    },
    {
      id: 4,
      name: "Antonov An-225 Mriya",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Antonov_An-225_Beltyukov-1.jpg/1200px-Antonov_An-225_Beltyukov-1.jpg",
      stock: 0,
      status: "active",
      price: "$250000000.00",
    },
    {
      id: 5,
      name: "USS Dwight D. Eisenhower",
      img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/US_Navy_060617-N-0490C-010_The_Nimitz-class_aircraft_carrier_USS_Dwight_D._Eisenhower_%28CVN_69%29_conducts_a_turn_in_the_Atlantic_Ocean._Eisenhower_is_underway_conducting_routine_carrier_operations.jpg/1200px-thumbnail.jpg",
      stock: 1,
      status: "active",
      price: "$679000000.00",
    },
    {
      id: 6,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 7,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 8,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 9,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 10,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },

];
const productData = [
    {
      name: "Jan",
      "Sales": 4000,
    },
    {
      name: "Feb",
      "Sales": 3000,
    },
    {
      name: "Mar",
      "Sales": 5000,
    },
  ];

export { userData,userRows,productRows,productData};