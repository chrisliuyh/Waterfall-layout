// mock-data.js
// 提供两种不同格式的数据：JSON和XML

// JSON格式数据
const jsonData = {
  "items": [
    {
      "id": "001",
      "type": "image",
      "title": "春天的樱花真美丽，忍不住拍了一堆照片！#春天 #樱花 #摄影",
      "imageUrl": "https://picsum.photos/id/237/400/600",
      "author": {
        "name": "樱花爱好者",
        "avatar": "https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_1280.jpg"
      },
      "likes": 1289,
      "height": 600,
      "width": 400
    },
    {
      "id": "002",
      "type": "video",
      "title": "超简单的家常菜教程，学会这道菜，朋友都馋哭了！#美食 #家常菜 #教程",
      "imageUrl": "https://picsum.photos/id/292/400/300",
      "videoUrl": "https://www.w3schools.com/html/mov_bbb.mp4",
      "author": {
        "name": "美食达人",
        "avatar": "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
      },
      "likes": 2345,
      "height": 300,
      "width": 400
    },
    {
      "id": "003",
      "type": "image",
      "title": "今天去了这家网红咖啡店，环境超级好，推荐大家去打卡！#咖啡 #网红店 #打卡",
      "imageUrl": "https://picsum.photos/id/42/400/500",
      "author": {
        "name": "咖啡控",
        "avatar": "https://cdn.pixabay.com/photo/2017/11/19/07/30/girl-2961959_1280.jpg"
      },
      "likes": 876,
      "height": 500,
      "width": 400
    },
    {
      "id": "004",
      "type": "video",
      "title": "分享一个超实用的化妆技巧，手残党也能学会！#化妆 #美妆 #技巧",
      "imageUrl": "https://picsum.photos/id/177/400/400",
      "videoUrl": "https://www.w3schools.com/html/mov_bbb.mp4",
      "author": {
        "name": "美妆博主",
        "avatar": "https://cdn.pixabay.com/photo/2017/06/26/02/47/people-2442565_1280.jpg"
      },
      "likes": 3421,
      "height": 400,
      "width": 400
    },
    {
      "id": "005",
      "type": "image",
      "title": "新买的裙子终于到了，质量超级好，分享给大家！#穿搭 #购物分享 #夏装",
      "imageUrl": "https://picsum.photos/id/65/400/650",
      "author": {
        "name": "穿搭达人",
        "avatar": "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377_1280.jpg"
      },
      "likes": 1543,
      "height": 650,
      "width": 400
    },
    {
      "id": "006",
      "type": "image",
      "title": "周末去爬山，风景太美了，大家有空也可以去！#旅行 #爬山 #周末",
      "imageUrl": "https://picsum.photos/id/29/400/500",
      "author": {
        "name": "旅行爱好者",
        "avatar": "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
      },
      "likes": 987,
      "height": 500,
      "width": 400
    },
    {
      "id": "007",
      "type": "video",
      "title": "这个健身动作很适合初学者，每天坚持就能看到效果！#健身 #运动 #塑形",
      "imageUrl": "https://picsum.photos/id/342/400/300",
      "videoUrl": "https://www.w3schools.com/html/mov_bbb.mp4",
      "author": {
        "name": "健身教练",
        "avatar": "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
      },
      "likes": 2109,
      "height": 300,
      "width": 400
    },
    {
      "id": "008",
      "type": "image",
      "title": "今天做了一款超级简单的甜点，新手也能轻松上手！#甜点 #烘焙 #美食",
      "imageUrl": "https://picsum.photos/id/431/400/400",
      "author": {
        "name": "甜点师",
        "avatar": "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
      },
      "likes": 1765,
      "height": 400,
      "width": 400
    },
    {
      "id": "009",
      "type": "image",
      "title": "最近很火的这本书终于看完了，强烈推荐给大家！#读书 #书评 #推荐",
      "imageUrl": "https://picsum.photos/id/24/400/550",
      "author": {
        "name": "读书人",
        "avatar": "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
      },
      "likes": 932,
      "height": 550,
      "width": 400
    },
    {
      "id": "010",
      "type": "video",
      "title": "这个小众景点太美了，人还特别少，下次去旅行一定要去！#旅行 #小众 #景点",
      "imageUrl": "https://picsum.photos/id/87/400/300",
      "videoUrl": "https://www.w3schools.com/html/mov_bbb.mp4",
      "author": {
        "name": "旅行博主",
        "avatar": "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
      },
      "likes": 2876,
      "height": 300,
      "width": 400
    }
  ],
  "nextPage": 2
};

// 更多JSON数据，用于加载更多
const moreJsonData = {
  "items": [
    {
      "id": "011",
      "type": "image",
      "title": "今天去海边玩，拍了好多美照，分享给大家！#海边 #旅行 #夏天",
      "imageUrl": "https://picsum.photos/id/152/400/600",
      "author": {
        "name": "海边控",
        "avatar": "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
      },
      "likes": 1567,
      "height": 600,
      "width": 400
    },
    {
      "id": "012",
      "type": "video",
      "title": "这个小技巧让你的手机电池用得更久，太实用了！#手机 #技巧 #省电",
      "imageUrl": "https://picsum.photos/id/160/400/300",
      "videoUrl": "https://www.w3schools.com/html/mov_bbb.mp4",
      "author": {
        "name": "数码达人",
        "avatar": "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
      },
      "likes": 3210,
      "height": 300,
      "width": 400
    },
    {
      "id": "013",
      "type": "image",
      "title": "新入手的口红也太好看了吧，显白又提气色！#口红 #美妆 #种草",
      "imageUrl": "https://picsum.photos/id/106/400/500",
      "author": {
        "name": "美妆小达人",
        "avatar": "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
      },
      "likes": 1432,
      "height": 500,
      "width": 400
    },
    {
      "id": "014",
      "type": "video",
      "title": "这个超简单的家务小技巧，让你的家务时间减半！#家务 #技巧 #生活",
      "imageUrl": "https://picsum.photos/id/111/400/400",
      "videoUrl": "https://www.w3schools.com/html/mov_bbb.mp4",
      "author": {
        "name": "生活妙招",
        "avatar": "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
      },
      "likes": 2543,
      "height": 400,
      "width": 400
    },
    {
      "id": "015",
      "type": "image",
      "title": "今天做的午餐也太好吃了吧，分享给大家！#午餐 #美食 #家常菜",
      "imageUrl": "https://picsum.photos/id/102/400/650",
      "author": {
        "name": "美食家",
        "avatar": "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
      },
      "likes": 1876,
      "height": 650,
      "width": 400
    }
  ],
  "nextPage": 3
};

// XML格式数据
const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
<feed>
  <items>
    <item>
      <id>101</id>
      <type>image</type>
      <title>这家火锅店太好吃了，下次还要再去！#火锅 #美食 #推荐</title>
      <imageUrl>https://picsum.photos/id/225/400/500</imageUrl>
      <author>
        <name>火锅爱好者</name>
        <avatar>https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255_1280.jpg</avatar>
      </author>
      <likes>2134</likes>
      <height>500</height>
      <width>400</width>
    </item>
    <item>
      <id>102</id>
      <type>video</type>
      <title>超简单的瑜伽动作，每天坚持让你越来越年轻！#瑜伽 #健身 #养生</title>
      <imageUrl>https://picsum.photos/id/235/400/300</imageUrl>
      <videoUrl>https://www.w3schools.com/html/mov_bbb.mp4</videoUrl>
      <author>
        <name>瑜伽达人</name>
        <avatar>https://randomuser.me/api/portraits/women/45.jpg</avatar>
      </author>
      <likes>3421</likes>
      <height>300</height>
      <width>400</width>
    </item>
    <item>
      <id>103</id>
      <type>image</type>
      <title>今天的日落也太美了吧，随手一拍就是大片！#日落 #摄影 #风景</title>
      <imageUrl>https://picsum.photos/id/110/400/600</imageUrl>
      <author>
        <name>摄影师</name>
        <avatar>https://randomuser.me/api/portraits/men/72.jpg</avatar>
      </author>
      <likes>1876</likes>
      <height>600</height>
      <width>400</width>
    </item>
    <item>
      <id>104</id>
      <type>video</type>
      <title>这个小众品牌的护肤品太好用了，推荐给大家！#护肤 #小众 #种草</title>
      <imageUrl>https://picsum.photos/id/21/400/400</imageUrl>
      <videoUrl>https://www.w3schools.com/html/mov_bbb.mp4</videoUrl>
      <author>
        <name>护肤博主</name>
        <avatar>https://randomuser.me/api/portraits/women/32.jpg</avatar>
      </author>
      <likes>2543</likes>
      <height>400</height>
      <width>400</width>
    </item>
    <item>
      <id>105</id>
      <type>image</type>
      <title>新买的鞋子也太好看了吧，百搭又舒适！#鞋子 #穿搭 #购物</title>
      <imageUrl>https://picsum.photos/id/96/400/500</imageUrl>
      <author>
        <name>穿搭博主</name>
        <avatar>https://randomuser.me/api/portraits/women/18.jpg</avatar>
      </author>
      <likes>1432</likes>
      <height>500</height>
      <width>400</width>
    </item>
    <item>
      <id>106</id>
      <type>image</type>
      <title>今天去了这家博物馆，长知识了！#博物馆 #文化 #周末</title>
      <imageUrl>https://picsum.photos/id/43/400/550</imageUrl>
      <author>
        <name>文化爱好者</name>
        <avatar>https://randomuser.me/api/portraits/men/64.jpg</avatar>
      </author>
      <likes>987</likes>
      <height>550</height>
      <width>400</width>
    </item>
    <item>
      <id>107</id>
      <type>video</type>
      <title>这个小众景点太美了，人还特别少，下次去旅行一定要去！#旅行 #小众 #景点</title>
      <imageUrl>https://picsum.photos/id/63/400/300</imageUrl>
      <videoUrl>https://www.w3schools.com/html/mov_bbb.mp4</videoUrl>
      <author>
        <name>旅行达人</name>
        <avatar>https://randomuser.me/api/portraits/women/26.jpg</avatar>
      </author>
      <likes>2876</likes>
      <height>300</height>
      <width>400</width>
    </item>
    <item>
      <id>108</id>
      <type>image</type>
      <title>今天做了一款超级简单的甜点，新手也能轻松上手！#甜点 #烘焙 #美食</title>
      <imageUrl>https://picsum.photos/id/431/400/400</imageUrl>
      <author>
        <name>甜点师</name>
        <avatar>https://randomuser.me/api/portraits/women/22.jpg</avatar>
      </author>
      <likes>1765</likes>
      <height>400</height>
      <width>400</width>
    </item>
    <item>
      <id>109</id>
      <type>image</type>
      <title>最近很火的这本书终于看完了，强烈推荐给大家！#读书 #书评 #推荐</title>
      <imageUrl>https://picsum.photos/id/24/400/550</imageUrl>
      <author>
        <name>读书人</name>
        <avatar>https://randomuser.me/api/portraits/men/67.jpg</avatar>
      </author>
      <likes>932</likes>
      <height>550</height>
      <width>400</width>
    </item>
    <item>
      <id>110</id>
      <type>video</type>
      <title>这个小众景点太美了，人还特别少，下次去旅行一定要去！#旅行 #小众 #景点</title>
      <imageUrl>https://picsum.photos/id/87/400/300</imageUrl>
      <videoUrl>https://www.w3schools.com/html/mov_bbb.mp4</videoUrl>
      <author>
        <name>旅行博主</name>
        <avatar>https://randomuser.me/api/portraits/women/17.jpg</avatar>
      </author>
      <likes>2876</likes>
      <height>300</height>
      <width>400</width>
    </item>
  </items>
  <nextPage>2</nextPage>
</feed>`;

// 更多XML数据，用于加载更多
const moreXmlData = `<?xml version="1.0" encoding="UTF-8"?>
<feed>
  <items>
    <item>
      <id>111</id>
      <type>image</type>
      <title>今天去海边玩，拍了好多美照，分享给大家！#海边 #旅行 #夏天</title>
      <imageUrl>https://picsum.photos/id/152/400/600</imageUrl>
      <author>
        <name>海边控</name>
        <avatar>https://randomuser.me/api/portraits/women/57.jpg</avatar>
      </author>
      <likes>1567</likes>
      <height>600</height>
      <width>400</width>
    </item>
    <item>
      <id>112</id>
      <type>video</type>
      <title>这个小技巧让你的手机电池用得更久，太实用了！#手机 #技巧 #省电</title>
      <imageUrl>https://picsum.photos/id/160/400/300</imageUrl>
      <videoUrl>https://www.w3schools.com/html/mov_bbb.mp4</videoUrl>
      <author>
        <name>数码达人</name>
        <avatar>https://randomuser.me/api/portraits/men/42.jpg</avatar>
      </author>
      <likes>3210</likes>
      <height>300</height>
      <width>400</width>
    </item>
    <item>
      <id>113</id>
      <type>image</type>
      <title>新入手的口红也太好看了吧，显白又提气色！#口红 #美妆 #种草</title>
      <imageUrl>https://picsum.photos/id/106/400/500</imageUrl>
      <author>
        <name>美妆小达人</name>
        <avatar>https://randomuser.me/api/portraits/women/28.jpg</avatar>
      </author>
      <likes>1432</likes>
      <height>500</height>
      <width>400</width>
    </item>
    <item>
      <id>114</id>
      <type>video</type>
      <title>这个超简单的家务小技巧，让你的家务时间减半！#家务 #技巧 #生活</title>
      <imageUrl>https://picsum.photos/id/111/400/400</imageUrl>
      <videoUrl>https://www.w3schools.com/html/mov_bbb.mp4</videoUrl>
      <author>
        <name>生活妙招</name>
        <avatar>https://randomuser.me/api/portraits/women/76.jpg</avatar>
      </author>
      <likes>2543</likes>
      <height>400</height>
      <width>400</width>
    </item>
    <item>
      <id>115</id>
      <type>image</type>
      <title>今天做的午餐也太好吃了吧，分享给大家！#午餐 #美食 #家常菜</title>
      <imageUrl>https://picsum.photos/id/102/400/650</imageUrl>
      <author>
        <name>美食家</name>
        <avatar>https://randomuser.me/api/portraits/men/23.jpg</avatar>
      </author>
      <likes>1876</likes>
      <height>650</height>
      <width>400</width>
    </item>
  </items>
  <nextPage>3</nextPage>
</feed>`;

// CSV格式数据
const csvData = `id,type,title,imageUrl,videoUrl,authorName,authorAvatar,likes,height,width
201,image,"[CSV数据] 美食博主分享：我的家常菜食谱大全，简单易学！#美食 #食谱 #家常菜",https://picsum.photos/id/10/400/500,,"CSV美食博主",https://randomuser.me/api/portraits/women/1.jpg,3245,500,400
202,video,"[CSV数据] 新手化妆教程：三分钟打造日常通勤妆容！#化妆 #教程 #日常妆容",https://picsum.photos/id/20/400/300,https://www.w3schools.com/html/mov_bbb.mp4,"CSV化妆师",https://randomuser.me/api/portraits/women/2.jpg,4567,300,400
203,image,"[CSV数据] 旅行笔记：我的五一小长假旅行全攝影指南！#旅行 #摄影 #小长假",https://picsum.photos/id/30/400/600,,"CSV旅行博主",https://randomuser.me/api/portraits/men/3.jpg,2345,600,400
204,video,"[CSV数据] 健身教程：在家就能做的十分钟燃脂运动！#健身 #在家运动 #减脂",https://picsum.photos/id/40/400/400,https://www.w3schools.com/html/mov_bbb.mp4,"CSV健身教练",https://randomuser.me/api/portraits/men/4.jpg,5678,400,400
205,image,"[CSV数据] 我的春季穿搭分享：五套百搭通勤穿搭方案！#穿搭 #春季 #通勤穿搭",https://picsum.photos/id/50/400/500,,"CSV穿搭达人",https://randomuser.me/api/portraits/women/5.jpg,3456,500,400
206,image,"[CSV数据] 家居整理术：如何让你的小空间变得干净整洁！#家居 #整理 #收纳",https://picsum.photos/id/60/400/550,,"CSV家居博主",https://randomuser.me/api/portraits/women/6.jpg,2567,550,400
207,video,"[CSV数据] 手机摄影技巧：教你用手机拍出大片感的照片！#摄影 #手机摄影 #技巧",https://picsum.photos/id/70/400/300,https://www.w3schools.com/html/mov_bbb.mp4,"CSV摄影师",https://randomuser.me/api/portraits/men/7.jpg,4321,300,400
208,image,"[CSV数据] 我的读书笔记：五本改变我人生的书籍推荐！#读书 #书籍推荐 #笔记",https://picsum.photos/id/80/400/400,,"CSV读书人",https://randomuser.me/api/portraits/women/8.jpg,3456,400,400
209,image,"[CSV数据] 办公室小技巧：提高工作效率的十个实用方法！#办公室 #效率 #职场",https://picsum.photos/id/90/400/550,,"CSV职场博主",https://randomuser.me/api/portraits/men/9.jpg,2345,550,400
210,video,"[CSV数据] 家庭烹饪教程：五道简单美味的家常菜！#烹饪 #教程 #家常菜",https://picsum.photos/id/100/400/300,https://www.w3schools.com/html/mov_bbb.mp4,"CSV美食博主",https://randomuser.me/api/portraits/women/10.jpg,5432,300,400`;

// 更多CSV数据，用于加载更多
const moreCsvData = `id,type,title,imageUrl,videoUrl,authorName,authorAvatar,likes,height,width
211,image,"[CSV数据] 我的家庭花园打理：新手也能上手的园艺技巧！#园艺 #花园 #种植",https://picsum.photos/id/110/400/600,,"CSV园艺爱好者",https://randomuser.me/api/portraits/women/11.jpg,3456,600,400
212,video,"[CSV数据] 数码产品开箱测评：最新智能手表值得入手吗？#数码 #开箱 #测评",https://picsum.photos/id/120/400/300,https://www.w3schools.com/html/mov_bbb.mp4,"CSV数码博主",https://randomuser.me/api/portraits/men/12.jpg,4567,300,400
213,image,"[CSV数据] 我的小型公寓改造记：从杂乱到清爱的家居空间！#家居 #改造 #小户型",https://picsum.photos/id/130/400/500,,"CSV家居博主",https://randomuser.me/api/portraits/women/13.jpg,3456,500,400
214,video,"[CSV数据] 手机摄影进阶教程：夜景摄影技巧全解析！#摄影 #手机 #夜景",https://picsum.photos/id/140/400/400,https://www.w3schools.com/html/mov_bbb.mp4,"CSV摄影师",https://randomuser.me/api/portraits/men/14.jpg,5678,400,400
215,image,"[CSV数据] 我的春季护肤必备清单：五款平价好用的护肤品！#护肤 #春季 #好物推荐",https://picsum.photos/id/150/400/650,,"CSV护肤博主",https://randomuser.me/api/portraits/women/15.jpg,4321,650,400`;
