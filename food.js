let foodCat = {
    c01: "蛋餅",
    c02: "吐司",
    c03: "漢堡",
    c04: "沙拉",
    c05: "點心",
    c06: "飲品",
}


let menuItemlistData2 = [
    { groupNum: "c01", itemNum: "p012", caption: "玉米蛋餅", desc: "手工蛋餅皮+滿滿玉米", cose: 30, imgPathFile: "p012.jpg" },
    { groupNum: "c01", itemNum: "p013", caption: "培根蛋餅", desc: "手工蛋餅皮+雙份培根", cose: 35, imgPathFile: "p013.jpg" },
    { groupNum: "c01", itemNum: "p014", caption: "火腿蛋餅", desc: "手工蛋餅皮+整條火腿", cose: 35, imgPathFile: "p014.jpg" },
    { groupNum: "c01", itemNum: "p015", caption: "鮪魚沙拉蛋餅", desc: "手工蛋餅皮+一整罐鮪魚", cose: 35, imgPathFile: "p015.jpg" },
    { groupNum: "c01", itemNum: "p016", caption: "起司蛋餅", desc: "手工蛋餅皮+爆漿起司", cose: 35, imgPathFile: "p016.jpg" },
    { groupNum: "c02", itemNum: "p021", caption: "果醬吐司", desc: "切邊烤土司+一公分厚塗果醬", cose: 15, imgPathFile: "p021.jpg" },
    { groupNum: "c02", itemNum: "p022", caption: "鮪魚沙拉吐司", desc: "切邊烤土司+一整罐鮪魚", cose: 35, imgPathFile: "p022.jpg" },
    { groupNum: "c02", itemNum: "p023", caption: "培根吐司", desc: "切邊烤土司+雙份培根", cose: 35, imgPathFile: "p023.jpg" },
    { groupNum: "c02", itemNum: "p024", caption: "里肌豬排吐司", desc: "切邊烤土司+厚切里肌豬排", cose: 35, imgPathFile: "p024.jpg" },
    { groupNum: "c03", itemNum: "p031", caption: "紐澳良豬排堡", desc: "就是豬排加生菜的漢堡啦", cose: 55, imgPathFile: "p031.jpg" },
    { groupNum: "c03", itemNum: "p032", caption: "美味蟹堡", desc: "是誰住在深海的大鳳梨裡", cose: 45, imgPathFile: "p032.jpg" },
    { groupNum: "c03", itemNum: "p033", caption: "阿拉斯加鱈魚堡", desc: "鱈~魚~堡~", cose: 45, imgPathFile: "p033.jpg" },
    { groupNum: "c03", itemNum: "p034", caption: "日式和牛堡", desc: "日本來的和牛，頂級享受", cose: 100, imgPathFile: "p034.jpg" },
    { groupNum: "c03", itemNum: "p035", caption: "薯泥堡", desc: "內含薯泥沙拉，美味蔬食", cose: 40, imgPathFile: "p035.jpg" },
    { groupNum: "c03", itemNum: "p036", caption: "無骨雞腿堡", desc: "精選黃金右腿去骨雞腿排", cose: 55, imgPathFile: "p036.jpg" },
    { groupNum: "c04", itemNum: "p041", caption: "經典美味沙拉", desc: "全素草食餐", cose: 55, imgPathFile: "p041.jpg" },
    { groupNum: "c04", itemNum: "p042", caption: "低脂蛋白沙拉", desc: "很多葉子搭配水煮蛋、舒肥雞胸肉", cose: 55, imgPathFile: "p042.jpg" },
    { groupNum: "c05", itemNum: "p051", caption: "歡樂薯餅", desc: "薯餅薯餅得第一", cose: 10, imgPathFile: "p051.jpg" },
    { groupNum: "c05", itemNum: "p052", caption: "雞塊", desc: "一份4塊", cose: 30, imgPathFile: "p052.jpg" },
    { groupNum: "c05", itemNum: "p053", caption: "薯條", desc: "酥脆薯條，素食可用", cose: 30, imgPathFile: "p053.jpg" },
    { groupNum: "c05", itemNum: "p054", caption: "熱狗", desc: "國產熱狗", cose: 30, imgPathFile: "p054.jpg" },
    { groupNum: "c05", itemNum: "p055", caption: "月亮蝦餅", desc: "泰式月亮蝦餅搭配泰式酸辣醬", cose: 30, imgPathFile: "p055.jpg" },
    { groupNum: "c06", itemNum: "p061", caption: "早餐店奶茶", desc: "台灣特色，早餐店奶茶", cose: 15, imgPathFile: "p061.jpg" },
    { groupNum: "c06", itemNum: "p062", caption: "經典紅茶", desc: "台灣高山茶葉沖泡", cose: 15, imgPathFile: "p062.jpg" },
]

let theMenu = [
    {
        "id": "c01",
        "name": "蛋餅",
        "products": [
            {
                "id": "p012",
                "name": "玉米蛋餅",
                "catId": "c01",
                "img": "./Img/PC/p012.jpg",
                "comment": "手工蛋餅皮+滿滿玉米",
                "isSoldOut": false,
                "price": 30,
                "additionIds": [
                    "AH01"
                ]
            },
            {
                "id": "p013",
                "catId": "c01",
                "name": "培根蛋餅",
                "price": 35,
                "comment": "手工蛋餅皮+雙份培根",
                "img": "./Img/PC/p013.jpg",
                "additionIds": [
                    "AH01"
                ],
                "isSoldOut": false
            },
            {
                "id": "p014",
                "catId": "c01",
                "name": "火腿蛋餅",
                "price": 35,
                "comment": "手工蛋餅皮+整條火腿",
                "img": "./Img/PC/p014.jpg",
                "additionIds": [
                    "AH01"
                ],
                "isSoldOut": false
            },
            {
                "id": "p015",
                "catId": "c01",
                "name": "鮪魚沙拉蛋餅",
                "price": 35,
                "comment": "手工蛋餅皮+一整罐鮪魚",
                "img": "./Img/PC/p015.jpg",
                "additionIds": [
                    "AH01"
                ],
                "isSoldOut": false
            },
            {
                "id": "p016",
                "catId": "c01",
                "name": "起司蛋餅",
                "price": 35,
                "comment": "手工蛋餅皮+爆漿起司",
                "img": "./Img/PC/p016.jpg",
                "additionIds": [
                    "AH01"
                ],
                "isSoldOut": false
            }
        ]
    },
    {
        "id": "c02",
        "name": "吐司",
        "products": [
            {
                "id": "p021",
                "catId": "c02",
                "name": "果醬吐司",
                "price": 15,
                "comment": "切邊烤土司+一公分厚塗果醬",
                "img": "./Img/PC/p021.jpg",
                "additionIds": [
                    "AH01"
                ],
                "isSoldOut": false
            },
            {
                "id": "p022",
                "catId": "c02",
                "name": "鮪魚沙拉吐司",
                "price": 35,
                "comment": "切邊烤土司+一整罐鮪魚",
                "img": "./Img/PC/p022.jpg",
                "additionIds": [
                    "AH01"
                ],
                "isSoldOut": false
            },
            {
                "id": "p023",
                "catId": "c02",
                "name": "培根吐司",
                "price": 35,
                "comment": "切邊烤土司+雙份培根",
                "img": "./Img/PC/p023.jpg",
                "additionIds": [
                    "AH01"
                ],
                "isSoldOut": false
            },
            {
                "id": "p024",
                "catId": "c02",
                "name": "里肌豬排吐司",
                "price": 35,
                "comment": "切邊烤土司+厚切里肌豬排",
                "img": "./Img/PC/p024.jpg",
                "additionIds": [
                    "AH01"
                ],
                "isSoldOut": false
            }
        ]
    },
    {
        "id": "c03",
        "name": "漢堡",
        "products": [
            {
                "id": "p031",
                "catId": "c03",
                "name": "紐澳良豬排堡",
                "price": 55,
                "comment": "就是豬排加生菜的漢堡啦",
                "img": "./Img/PC/p031.jpg",
                "additionIds": [
                    "AH01"
                ],
                "isSoldOut": false
            },
            {
                "id": "p032",
                "catId": "c03",
                "name": "美味蟹堡",
                "price": 45,
                "comment": "是誰住在深海的大鳳梨裡",
                "img": "./Img/PC/p032.jpg",
                "additionIds": [
                    "AH01"
                ],
                "isSoldOut": false
            },
            {
                "id": "p033",
                "catId": "c03",
                "name": "阿拉斯加鱈魚堡",
                "price": 45,
                "comment": "鱈~魚~堡~",
                "img": "./Img/PC/p033.jpg",
                "additionIds": [
                    "AH01"
                ],
                "isSoldOut": false
            },
            {
                "id": "p034",
                "catId": "c03",
                "name": "日式和牛堡",
                "price": 100,
                "comment": "日本來的和牛，頂級享受",
                "img": "./Img/PC/p034.jpg",
                "additionIds": [
                    "AH01"
                ],
                "isSoldOut": false
            },
            {
                "id": "p035",
                "catId": "c03",
                "name": "薯泥堡",
                "price": 40,
                "comment": "內含薯泥沙拉，美味蔬食",
                "img": "./Img/PC/p035.jpg",
                "additionIds": [
                    "AH01"
                ],
                "isSoldOut": true
            },
            {
                "id": "p036",
                "catId": "c03",
                "name": "無骨雞腿堡",
                "price": 55,
                "comment": "精選黃金右腿去骨雞腿排",
                "img": "./Img/PC/p036.jpg",
                "additionIds": [
                    "AH01"
                ],
                "isSoldOut": false
            }
        ]
    },
    {
        "id": "c04",
        "name": "沙拉",
        "products": [
            {
                "id": "p041",
                "catId": "c04",
                "name": "經典美味沙拉",
                "price": 55,
                "comment": "全素草食餐",
                "img": "./Img/PC/p041.jpg",
                "additionIds": [
                    "AH01",
                    "AH04"
                ],
                "isSoldOut": false
            },
            {
                "id": "p042",
                "catId": "c04",
                "name": "低脂蛋白沙拉",
                "price": 55,
                "comment": "很多葉子搭配水煮蛋、舒肥雞胸肉",
                "img": "./Img/PC/p042.jpg",
                "additionIds": [
                    "AH01",
                    "AH04"
                ],
                "isSoldOut": false
            }
        ]
    },
    {
        "id": "c05",
        "name": "點心",
        "products": [
            {
                "id": "p051",
                "name": "歡樂薯餅",
                "catId": "c05",
                "img": "./Img/PC/p051.jpg",
                "comment": "薯餅薯餅得第一",
                "isSoldOut": false,
                "price": 10,
                "additionIds": [
                    "AH01",
                    "AH04"
                ]
            },
            {
                "id": "p052",
                "catId": "c05",
                "name": "雞塊",
                "price": 30,
                "comment": "一份4塊",
                "img": "./Img/PC/p052.jpg",
                "additionIds": [
                    "AH04"
                ],
                "isSoldOut": false
            },
            {
                "id": "p053",
                "catId": "c05",
                "name": "薯條",
                "price": 30,
                "comment": "酥脆薯條，素食可用",
                "img": "./Img/PC/p053.jpg",
                "additionIds": [
                    "AH04"
                ],
                "isSoldOut": false
            },
            {
                "id": "p054",
                "catId": "c05",
                "name": "熱狗",
                "price": 30,
                "comment": "國產熱狗",
                "img": "./Img/PC/p054.jpg",
                "additionIds": [
                    "AH04"
                ],
                "isSoldOut": false
            },
            {
                "id": "p055",
                "catId": "c05",
                "name": "月亮蝦餅",
                "price": 30,
                "comment": "泰式月亮蝦餅搭配泰式酸辣醬",
                "img": "./Img/PC/p055.jpg",
                "additionIds": [
                    "AH04"
                ],
                "isSoldOut": false
            }
        ]
    },
    {
        "id": "c06",
        "name": "飲品",
        "products": [
            {
                "id": "p061",
                "catId": "c06",
                "name": "早餐店奶茶",
                "price": 15,
                "comment": "台灣特色，早餐店奶茶",
                "img": "./Img/PC/p061.jpg",
                "additionIds": [
                    "AH02",
                    "AH03"
                ],
                "isSoldOut": false
            },
            {
                "id": "p062",
                "catId": "c06",
                "name": "經典紅茶",
                "price": 15,
                "comment": "台灣高山茶葉沖泡",
                "img": "./Img/PC/p062.jpg",
                "additionIds": [
                    "AH02",
                    "AH03"
                ],
                "isSoldOut": false
            }
        ]
    }
]


let theFoodAdditions =
    [
        {
            "id": "AH01",
            "name": "加料",
            "isMulti": true,
            "items": [
                {
                    "id": "AD011",
                    "name": "加蛋",
                    "price": 10
                },
                {
                    "id": "AD012",
                    "name": "加培根",
                    "price": 15
                },
                {
                    "id": "AD013",
                    "name": "加蔥花",
                    "price": 5
                },
                {
                    "id": "AD014",
                    "name": "加起司",
                    "price": 10
                },
                {
                    "id": "AD015",
                    "name": "加蔬菜",
                    "price": 10
                },
                {
                    "id": "AD016",
                    "name": "不要醬料",
                    "price": 0
                },
                {
                    "id": "AH017",
                    "name": "不要胡椒",
                    "price": 0
                }
            ]
        },
        {
            "id": "AH02",
            "name": "大小",
            "isMulti": false,
            "items": [
                {
                    "id": "AD021",
                    "name": "M",
                    "price": 0
                },
                {
                    "id": "AD022",
                    "name": "L",
                    "price": 10
                }
            ]
        },
        {
            "id": "AH03",
            "name": "溫度",
            "isMulti": false,
            "items": [
                {
                    "id": "AD031",
                    "name": "熱",
                    "price": 0
                },
                {
                    "id": "AD032",
                    "name": "溫",
                    "price": 0
                },
                {
                    "id": "AD033",
                    "name": "去冰",
                    "price": 0
                },
                {
                    "id": "AD034",
                    "name": "冰",
                    "price": 0
                }
            ]
        },
        {
            "id": "AH04",
            "name": "醬料",
            "isMulti": true,
            "items": [
                {
                    "id": "AD041",
                    "name": "番茄醬",
                    "price": 0
                },
                {
                    "id": "AD042",
                    "name": "芥末醬",
                    "price": 0
                },
                {
                    "id": "AD043",
                    "name": "辣椒醬",
                    "price": 0
                },
                {
                    "id": "AD044",
                    "name": "凱薩醬",
                    "price": 0
                },
                {
                    "id": "AD045",
                    "name": "胡麻醬",
                    "price": 0
                },
                {
                    "id": "AD046",
                    "name": "糖醋醬",
                    "price": 0
                }
            ]
        }
    ]