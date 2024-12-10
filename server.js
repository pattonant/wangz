import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import NodeCache from 'node-cache';
import compression from 'compression';
import sharp from 'sharp';
import Color from 'color';  // 需要先安装: npm install color

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// 在 app 初始化后添加
app.use(compression()); // 启用 GZIP 压缩

// 修改静态文件服务，添加缓存控制
app.use(express.static(path.join(__dirname), {
    maxAge: '1d', // 静态资源缓存1天
    etag: true
}));
app.use('/js', express.static(path.join(__dirname, 'js'), {
    maxAge: '1d',
    etag: true
}));
app.use('/css', express.static(path.join(__dirname, 'css'), {
    maxAge: '1d',
    etag: true
}));

// 设置CORS头
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// 设置正确的MIME类型
app.use((req, res, next) => {
    if (req.path.endsWith('.js')) {
        res.type('application/javascript');
    }
    next();
});

// 处理所有路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 在现有路由之前添加搜索路由
app.get('/api/search', (req, res) => {
    const query = req.query.q;
    const cacheKey = `search_${query}`;
    
    // 检查缓存
    const cachedResult = searchCache.get(cacheKey);
    if (cachedResult) {
        return res.json(cachedResult);
    }
    
    // 如果没有缓存，执行搜索并存储结果
    const searchResults = performSearch(query); // 你的搜索逻辑
    searchCache.set(cacheKey, searchResults);
    res.json(searchResults);
});

// 在现有路由前添加图片处理路由
app.get('/images/:size/:image', async (req, res) => {
    try {
        const { size, image } = req.params;
        const imagePath = path.join(__dirname, 'images', image);
        
        // 解析尺寸参数
        const [width] = size.split('x').map(Number);
        
        // 处理并缓存图片
        const processedImage = await sharp(imagePath)
            .resize(width, null, { withoutEnlargement: true })
            .jpeg({ quality: 80 })
            .toBuffer();
            
        // 设置缓存头
        res.setHeader('Cache-Control', 'public, max-age=31536000');
        res.setHeader('Content-Type', 'image/jpeg');
        res.send(processedImage);
    } catch (error) {
        res.status(404).send('Image not found');
    }
});

// 在其他路由之前添加颜色处理路由
app.get('/api/color/:colorCode', (req, res) => {
    try {
        const { colorCode } = req.params;
        const color = Color(colorCode);
        
        // 获取颜色的详细信息
        const colorInfo = {
            hex: color.hex(),
            rgb: color.rgb().array(),
            hsl: color.hsl().array(),
            name: getColorName(color.hex()),  // 你需要实现这个函数
            brightness: color.brightness(),
            luminosity: color.luminosity(),
            isDark: color.isDark(),
            isLight: color.isLight(),
            complementary: color.negate().hex(),
            // 添加对比色
            analogous: [
                color.rotate(30).hex(),
                color.rotate(-30).hex()
            ]
        };
        
        res.json(colorInfo);
    } catch (error) {
        res.status(400).json({ error: '无效的颜色代码' });
    }
});

// 颜色名称匹配函数
function getColorName(hex) {
    // 这里可以添加一个颜色名称映射表
    const colorNames = {
        '#FF0000': '红色',
        '#00FF00': '绿色',
        '#0000FF': '蓝色',
        // 添加更多颜色映射...
    };
    
    return colorNames[hex.toUpperCase()] || '未知颜色';
}

// 启动服务器
const port = 3000;
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
    console.log(`静态文件目录: ${__dirname}`);
}); 