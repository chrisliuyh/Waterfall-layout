// app.js
// 主要功能实现

// 全局变量
let currentPage = 1;
let isLoading = false;
let dataType = 'json'; // 默认使用JSON数据，可通过URL参数切换
let parser = new DOMParser();
let totalCards = 0; // 记录已添加的卡片总数，用于确保加载更多数据时正确交替放入左右两列

// DOM元素
const contentArea = document.querySelector('.content-area');
const leftColumn = document.querySelector('.left-column');
const rightColumn = document.querySelector('.right-column');
const pullDownRefresh = document.querySelector('.pull-down-refresh');
const pullUpLoad = document.querySelector('.pull-up-load');
const tabs = document.querySelectorAll('.tab');

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 检查URL参数
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('type')) {
        dataType = urlParams.get('type').toLowerCase();
    }

    // 初始加载数据
    loadInitialData();

    // 设置滚动监听
    setupScrollListeners();

    // 设置标签点击事件
    setupTabListeners();
});

// 加载初始数据
function loadInitialData() {
    isLoading = true;
    pullUpLoad.style.display = 'flex';

    // 根据数据类型获取数据
    let data;
    if (dataType === 'xml') {
        data = parseXmlData(xmlData);
    } else if (dataType === 'csv') {
        data = parseCsvData(csvData);
    } else {
        data = jsonData.items;
    }

    // 渲染数据
    renderItems(data);

    isLoading = false;
    pullUpLoad.style.display = 'none';
}

// 加载更多数据
function loadMoreData() {
    if (isLoading) return;

    isLoading = true;
    pullUpLoad.style.display = 'flex';

    // 模拟网络请求延迟
    setTimeout(() => {
        // 根据数据类型获取更多数据
        let data;
        if (dataType === 'xml') {
            data = parseXmlData(moreXmlData);
        } else if (dataType === 'csv') {
            data = parseCsvData(moreCsvData);
        } else {
            data = moreJsonData.items;
        }

        // 渲染数据
        renderItems(data);

        currentPage++;
        isLoading = false;
        pullUpLoad.style.display = 'none';
    }, 1000);
}

// 刷新数据
function refreshData() {
    if (isLoading) return;

    isLoading = true;
    pullDownRefresh.classList.add('loading');

    // 模拟网络请求延迟
    setTimeout(() => {
        // 清空现有数据
        leftColumn.innerHTML = '';
        rightColumn.innerHTML = '';
        
        // 重置卡片计数器
        totalCards = 0;

        // 重新加载初始数据
        loadInitialData();

        // 重置页码
        currentPage = 1;

        // 隐藏刷新提示
        pullDownRefresh.classList.remove('visible');
        pullDownRefresh.classList.remove('loading');
        isLoading = false;
    }, 1000);
}

// 解析XML数据
function parseXmlData(xmlString) {
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const items = xmlDoc.getElementsByTagName('item');
    const result = [];

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        result.push({
            id: getXmlElementValue(item, 'id'),
            type: getXmlElementValue(item, 'type'),
            title: getXmlElementValue(item, 'title'),
            imageUrl: getXmlElementValue(item, 'imageUrl'),
            videoUrl: getXmlElementValue(item, 'videoUrl'),
            author: {
                name: getXmlElementValue(item.getElementsByTagName('author')[0], 'name'),
                avatar: getXmlElementValue(item.getElementsByTagName('author')[0], 'avatar')
            },
            likes: parseInt(getXmlElementValue(item, 'likes')),
            height: parseInt(getXmlElementValue(item, 'height')),
            width: parseInt(getXmlElementValue(item, 'width'))
        });
    }

    return result;
}

// 解析CSV数据
function parseCsvData(csvString) {
    const lines = csvString.split('\n');
    const headers = lines[0].split(',');
    const result = [];

    for (let i = 1; i < lines.length; i++) {
        // 处理CSV行，考虑引号内的逗号
        const line = lines[i];
        const values = [];
        let insideQuotes = false;
        let currentValue = '';
        
        for (let j = 0; j < line.length; j++) {
            const char = line[j];
            
            if (char === '"' && (j === 0 || line[j-1] !== '\\')) {
                insideQuotes = !insideQuotes;
            } else if (char === ',' && !insideQuotes) {
                values.push(currentValue);
                currentValue = '';
            } else {
                currentValue += char;
            }
        }
        
        values.push(currentValue); // 添加最后一个值
        
        // 处理引号
        for (let j = 0; j < values.length; j++) {
            if (values[j].startsWith('"') && values[j].endsWith('"')) {
                values[j] = values[j].substring(1, values[j].length - 1);
            }
        }
        
        const item = {
            id: values[0],
            type: values[1],
            title: values[2],
            imageUrl: values[3],
            videoUrl: values[4] || '',
            author: {
                name: values[5],
                avatar: values[6]
            },
            likes: parseInt(values[7]),
            height: parseInt(values[8]),
            width: parseInt(values[9])
        };
        
        result.push(item);
    }

    return result;
}

// 获取XML元素的值
function getXmlElementValue(parent, tagName) {
    const elements = parent.getElementsByTagName(tagName);
    if (elements.length > 0) {
        return elements[0].textContent;
    }
    return '';
}

// 渲染数据项
function renderItems(items) {
    items.forEach((item) => {
        // 创建卡片元素
        const card = createCard(item);

        // 使用全局计数器确保正确交替放入左右两列
        if (totalCards % 2 === 0) {
            leftColumn.appendChild(card);
        } else {
            rightColumn.appendChild(card);
        }
        
        // 增加计数器
        totalCards++;
    });
}

// 创建卡片元素
function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-id', item.id);

    // 设置卡片高度，根据图片比例
    const aspectRatio = item.height / item.width;
    const cardImageHeight = Math.floor(aspectRatio * (card.offsetWidth || 150));

    // 卡片内容
    let cardContent = `
        <div class="card-image" style="height: ${cardImageHeight}px;">
            <img src="${item.imageUrl}" alt="${item.title}" loading="lazy">
            ${item.type === 'video' ? '<div class="play-icon"></div>' : ''}
        </div>
        <div class="card-content">
            <div class="card-title">${item.title}</div>
        </div>
        <div class="card-footer">
            <div class="author">
                <img src="${item.author.avatar}" alt="${item.author.name}" class="author-avatar">
                <span class="author-name">${item.author.name}</span>
            </div>
            <div class="like-info">
                <svg class="like-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ff2442"/>
                </svg>
                <span class="like-count">${formatLikes(item.likes)}</span>
            </div>
        </div>
    `;

    card.innerHTML = cardContent;

    // 如果是视频类型，添加点击事件
    if (item.type === 'video') {
        card.querySelector('.card-image').addEventListener('click', () => {
            playVideo(card, item);
        });
    }

    return card;
}

// 播放视频
function playVideo(card, item) {
    const cardImage = card.querySelector('.card-image');
    const img = cardImage.querySelector('img');
    const playIcon = cardImage.querySelector('.play-icon');

    // 创建视频元素
    const video = document.createElement('video');
    video.src = item.videoUrl;
    video.controls = true;
    video.autoplay = true;
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';

    // 替换图片为视频
    cardImage.innerHTML = '';
    cardImage.appendChild(video);

    // 视频结束后恢复图片
    video.addEventListener('ended', () => {
        cardImage.innerHTML = '';
        cardImage.appendChild(img);
        cardImage.appendChild(playIcon);
    });
}

// 格式化点赞数
function formatLikes(likes) {
    if (likes >= 10000) {
        return Math.floor(likes / 10000) + '万+';
    } else if (likes >= 1000) {
        return Math.floor(likes / 1000) + '千+';
    } else {
        return likes;
    }
}

// 设置滚动监听
function setupScrollListeners() {
    let startY = 0;
    let isRefreshing = false;

    // 触摸开始
    contentArea.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
    });

    // 触摸移动
    contentArea.addEventListener('touchmove', (e) => {
        const currentY = e.touches[0].clientY;
        const deltaY = currentY - startY;

        // 下拉刷新（当内容区域已经滚动到顶部）
        if (contentArea.scrollTop === 0 && deltaY > 50 && !isRefreshing) {
            pullDownRefresh.classList.add('visible');
            isRefreshing = true;
        }
    });

    // 触摸结束
    contentArea.addEventListener('touchend', () => {
        if (isRefreshing) {
            refreshData();
            isRefreshing = false;
        }
    });

    // 滚动监听（上拉加载更多）
    contentArea.addEventListener('scroll', () => {
        const scrollTop = contentArea.scrollTop;
        const scrollHeight = contentArea.scrollHeight;
        const clientHeight = contentArea.clientHeight;

        // 当滚动到底部时加载更多
        if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading) {
            loadMoreData();
        }
    });
}

// 设置标签点击事件
function setupTabListeners() {
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 移除所有标签的active类
            tabs.forEach(t => t.classList.remove('active'));
            
            // 添加当前标签的active类
            tab.classList.add('active');
            
            // 模拟切换频道，刷新数据
            refreshData();
        });
    });
}
